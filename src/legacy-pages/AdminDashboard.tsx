"use client";

import { useEffect, useState } from "react";
import { getSupabaseClient } from "@/integrations/supabase/client";
import { Eye, Trash2, LogOut, Users, ChevronDown, ChartNoAxesColumn, ClipboardList, Layers, PanelsTopLeft, RefreshCw } from "lucide-react";
import Link from "next/link";
import AdminListings from "@/components/AdminListings";
import { adminView, readAdminStorage, writeAdminStorage } from "@/lib/admin-workspace";
import { toast } from "sonner";
import { Dialog, DialogContent, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { useRouter } from "next/navigation";

interface Lead {
  id: string;
  name: string;
  phone: string;
  email: string | null;
  area: string | null;
  project_type: string | null;
  message: string | null;
  source: string | null;
  status: string | null;
  created_at: string;
  package_id?: string | null;
  package_name?: string | null;
  airline?: string | null;
  sharing?: string | null;
  price_per_adult?: number | null;
  preferred_departure?: string | null;
  travellers?: number | null;
}

const AdminDashboard = () => {
  const [adminId,setAdminId]=useState("");
  const [authorised,setAuthorised]=useState(false);
  const [leads, setLeads] = useState<Lead[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedLead, setSelectedLead] = useState<Lead | null>(null);
  const [deleteId, setDeleteId] = useState<string | null>(null);
  const [activeView, setActiveView] = useState<"dashboard" | "orders" | "listings">("orders");
  const router = useRouter();

  useEffect(() => {
    checkAuth();
    
  }, []);

  const checkAuth = async () => {
    const supabase = getSupabaseClient();
    if (!supabase) return;
    try {
      const { data: { session } } = await supabase.auth.getSession();
      if (!session || session.user.app_metadata.role !== "admin") {
        router.push("/admin/login");
      } else {
        setAdminId(session.user.id);
        const view=adminView(new URLSearchParams(window.location.search).get("view")) ?? adminView(readAdminStorage(`zikhra-admin-view:${session.user.id}`)) ?? "orders";
        setActiveView(view);
        const url=new URL(window.location.href);url.searchParams.set("view",view);window.history.replaceState(null,"",url);
        setAuthorised(true);
        await fetchLeads();
      }
    } catch {
      router.push("/admin/login");
    }
  };

  const fetchLeads = async () => {
    setLoading(true);
    const supabase = getSupabaseClient();
    if (!supabase) {
      toast.error("Dashboard is temporarily unavailable. Please try again in a moment.");
      setLoading(false);
      return;
    }
    try {
      const { data, error } = await supabase
        .from("leads")
        .select("*")
        .order("created_at", { ascending: false });
      if (error) {
        toast.error("Failed to fetch leads");
      } else {
        setLeads(data || []);
      }
    } catch {
      // Session/token refresh failed (e.g. expired or revoked refresh token) — send back to login
      // instead of leaving the dashboard stuck on "Loading...".
      toast.error("Your session has expired. Please log in again.");
      router.push("/admin/login");
    } finally {
      setLoading(false);
    }
  };

  useEffect(()=>{
    if(!adminId)return;
    const restore=()=>{const view=adminView(new URLSearchParams(window.location.search).get("view"))??"orders";setActiveView(view);writeAdminStorage(`zikhra-admin-view:${adminId}`,view);};
    window.addEventListener("popstate",restore);return()=>window.removeEventListener("popstate",restore);
  },[adminId]);
  const chooseView=(view:"dashboard"|"orders"|"listings")=>{setActiveView(view);writeAdminStorage(`zikhra-admin-view:${adminId}`,view);const url=new URL(window.location.href);url.searchParams.set("view",view);window.history.pushState(null,"",url);};

  const handleDelete = async (id: string) => {
    const supabase = getSupabaseClient();
    if (!supabase) return;
    const { error } = await supabase.from("leads").delete().eq("id", id);
    if (error) {
      toast.error("Failed to delete lead");
    } else {
      setLeads(leads.filter((l) => l.id !== id));
      toast.success("Lead deleted");
      setDeleteId(null);
    }
  };

  const handleLogout = async () => {
    const supabase = getSupabaseClient();
    if (!supabase) return;
    await supabase.auth.signOut();
    router.push("/admin/login");
  };

  const formatDate = (d: string) =>
    new Date(d).toLocaleDateString("en-IN", {
      day: "numeric", month: "short", year: "numeric", hour: "2-digit", minute: "2-digit",
    });

  if (!authorised) return <div className="min-h-screen p-8 text-sm">Checking admin access…</div>;
  return (
    <div className="min-h-screen bg-[#f5f5f3] text-[#171717]">
      {/* Header */}
      <div className="sticky top-0 z-40 flex items-center justify-between border-b border-black/10 bg-white/90 px-4 py-4 backdrop-blur-md sm:px-6">
        <div>
          <p className="text-[10px] font-sans font-medium uppercase tracking-[0.24em] text-[#777]">Zikhra Tours & Travels</p>
          <h1 className="mt-1 font-sans text-xl font-medium tracking-[-0.04em] text-[#171717]">{activeView === "orders" ? "Travel Enquiries" : activeView === "listings" ? "Listings" : "Dashboard"}</h1>
        </div>
        <button onClick={handleLogout} className="flex items-center gap-1.5 rounded-lg border border-black/12 bg-white px-3 py-2 font-sans text-xs font-medium text-[#333] transition-colors hover:border-black/35 hover:bg-[#fafafa]">
          <LogOut className="w-4 h-4" /> Logout
        </button>
      </div>

      <nav aria-label="Admin navigation" className="border-b border-black/5 bg-[#faf9f5]">
        <div className="hide-scrollbar mx-auto flex max-w-6xl items-center gap-1 overflow-x-auto px-4 py-2 sm:gap-2 sm:px-6">
          {([{ id: "dashboard", label: "Dashboard", icon: ChartNoAxesColumn }, { id: "orders", label: "Orders", icon: ClipboardList }, { id: "listings", label: "Listings", icon: Layers }] as const).map(item => <button key={item.id} onClick={() => chooseView(item.id)} aria-current={activeView === item.id ? "page" : undefined} className={`flex shrink-0 items-center gap-2 rounded-2xl px-4 py-3 text-sm font-medium transition-colors ${activeView === item.id ? "bg-[#111] text-white" : "text-[#74716b] hover:bg-black/5"}`}><item.icon size={18} strokeWidth={1.7} />{item.label}</button>)}
          <Link href="/" className="flex shrink-0 items-center gap-2 rounded-2xl px-4 py-3 text-sm font-medium text-[#74716b] hover:bg-black/5"><PanelsTopLeft size={18} strokeWidth={1.7} />Homepage</Link>
        </div>
      </nav>

      <AdminListings adminId={adminId} active={activeView === "listings"} />
      {activeView !== "listings" && <>
      {/* Stats */}
      <div className="mx-auto flex max-w-6xl gap-3 px-4 py-6 sm:px-6">
        <div className="flex flex-1 items-center gap-3 rounded-[1.25rem] border border-black/10 bg-white p-5 shadow-[0_10px_24px_rgba(0,0,0,0.055)]">
          <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#171717]">
            <Users className="h-5 w-5 text-white" />
          </div>
          <div>
            <p className="font-sans text-2xl font-semibold tracking-[-0.04em] text-[#171717]">{leads.length}</p>
            <p className="font-sans text-xs text-muted-foreground">Total Enquiries</p>
          </div>
        </div>
      </div>

      {activeView === "dashboard" && <div className="mx-auto mb-6 grid max-w-6xl grid-cols-2 gap-3 px-4 sm:px-6">{[{ label: "New enquiries", count: leads.filter(lead => !lead.status || lead.status === "new").length }, { label: "Other enquiries", count: leads.filter(lead => lead.status && lead.status !== "new").length }].map(item => <div key={item.label} className="rounded-2xl border border-black/10 bg-white p-4"><p className="text-2xl font-semibold">{item.count}</p><p className="mt-1 text-xs text-muted-foreground">{item.label}</p></div>)}</div>}

      {/* Leads List */}
      <div className="mx-auto max-w-6xl px-4 pb-10 sm:px-6">
        <div className="mb-4 flex items-center justify-between gap-3"><h2 className="font-sans text-sm font-medium text-[#505050]">{activeView === "dashboard" ? "Latest Travel Enquiries" : "All Travel Enquiries"}</h2><button type="button" disabled={loading} onClick={fetchLeads} aria-label="Refresh enquiries" className="rounded-lg border border-black/10 bg-white p-2 disabled:opacity-50"><RefreshCw size={16} className={loading ? "animate-spin" : ""} /></button></div>
        {loading ? (
          <div className="text-center py-10 text-muted-foreground text-sm">Loading...</div>
        ) : leads.length === 0 ? (
          <div className="text-center py-10 text-muted-foreground text-sm">No travel enquiries yet</div>
        ) : (
          <div className="space-y-3">
            {(activeView === "dashboard" ? leads.slice(0, 5) : leads).map((lead) => (
              <div key={lead.id} className="rounded-[1.25rem] border border-black/10 bg-white p-4 shadow-[0_8px_20px_rgba(0,0,0,0.045)] transition-shadow hover:shadow-[0_12px_26px_rgba(0,0,0,0.075)]">
                <div className="flex items-start justify-between">
                  <div className="flex-1 min-w-0">
                    <p className="font-sans text-sm font-medium text-foreground truncate">{lead.name}</p>
                    <p className="font-sans text-xs text-muted-foreground mt-0.5">{lead.phone}</p>
                    {lead.area ? (
                      <p className="font-sans text-[10px] text-gold/90 mt-0.5 truncate">{lead.area}</p>
                    ) : null}
                    {(lead.package_name || lead.project_type) && <p className="mt-2 text-xs font-medium">{lead.package_name || lead.project_type}{lead.airline ? ` · ${lead.airline}` : ""}</p>}
                    {(lead.preferred_departure || lead.travellers) && <p className="mt-1 text-xs text-muted-foreground">{lead.preferred_departure || "Dates to discuss"}{lead.travellers ? ` · ${lead.travellers} travellers` : ""}</p>}
                    <p className="font-sans text-[10px] text-muted-foreground/60 mt-1">{formatDate(lead.created_at)}</p>
                  </div>
                  <div className="flex items-center gap-2 ml-3">
                    <button
                      onClick={() => setSelectedLead(lead)}
                      aria-label={`View enquiry from ${lead.name}`}
                      className="flex h-8 w-8 items-center justify-center rounded-lg bg-black/[0.06] transition-colors hover:bg-black/[0.12]"
                    >
                      <Eye className="h-4 w-4 text-[#171717]" />
                    </button>
                    <button
                      onClick={() => setDeleteId(lead.id)}
                      aria-label={`Delete enquiry from ${lead.name}`}
                      className="w-8 h-8 rounded-xl bg-destructive/10 flex items-center justify-center hover:bg-destructive/20 transition-colors"
                    >
                      <Trash2 className="w-4 h-4 text-destructive" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      </>}
      {/* Compact enquiry details */}
      <Dialog open={Boolean(selectedLead)} onOpenChange={open => { if (!open) setSelectedLead(null); }}>
        {selectedLead && <DialogContent className="flex max-h-[85dvh] w-[calc(100%-2rem)] max-w-md flex-col gap-0 overflow-hidden rounded-2xl bg-white p-0 sm:rounded-2xl">
          <div className="shrink-0 border-b border-black/10 px-5 py-4 pr-12">
            <DialogDescription className="mb-1 text-[10px] uppercase tracking-widest">Travel enquiry</DialogDescription>
            <DialogTitle className="break-words text-lg font-medium">{selectedLead.name}</DialogTitle>
          </div>
          <div className="min-h-0 overflow-y-auto px-5 py-4">
            <dl className="grid grid-cols-2 gap-x-4 gap-y-3 text-sm">
              <div><dt className="mb-1 text-[10px] uppercase tracking-wide text-muted-foreground">Phone</dt><dd><a href={`tel:${selectedLead.phone}`} className="break-all">{selectedLead.phone}</a></dd></div>
              <div><dt className="mb-1 text-[10px] uppercase tracking-wide text-muted-foreground">Departure city</dt><dd className="break-words">{selectedLead.area || "To discuss"}</dd></div>
              <div className="col-span-2 rounded-xl bg-[#f7f5f0] p-3"><dt className="mb-1 text-[10px] uppercase tracking-wide text-muted-foreground">Journey / package</dt><dd className="break-words font-medium">{selectedLead.package_name || selectedLead.message?.match(/Selected package: ([^\n]+)/)?.[1] || selectedLead.project_type || "Travel enquiry"}</dd></div>
              {(selectedLead.preferred_departure || selectedLead.message?.match(/Preferred departure: ([^\n]+)/)?.[1]) && <div><dt className="mb-1 text-[10px] uppercase tracking-wide text-muted-foreground">Departure</dt><dd>{selectedLead.preferred_departure || selectedLead.message?.match(/Preferred departure: ([^\n]+)/)?.[1]}</dd></div>}
              {(selectedLead.travellers || selectedLead.message?.match(/Number of travellers: (\d+)/)?.[1]) && <div><dt className="mb-1 text-[10px] uppercase tracking-wide text-muted-foreground">Travellers</dt><dd>{selectedLead.travellers || selectedLead.message?.match(/Number of travellers: (\d+)/)?.[1]}</dd></div>}
              {selectedLead.airline && <div><dt className="mb-1 text-[10px] uppercase tracking-wide text-muted-foreground">Airline</dt><dd>{selectedLead.airline}</dd></div>}
              {selectedLead.sharing && <div><dt className="mb-1 text-[10px] uppercase tracking-wide text-muted-foreground">Room sharing</dt><dd>{selectedLead.sharing}</dd></div>}
              {selectedLead.price_per_adult && <div className="col-span-2"><dt className="mb-1 text-[10px] uppercase tracking-wide text-muted-foreground">Indicative price / adult</dt><dd>₹{Number(selectedLead.price_per_adult).toLocaleString("en-IN")}</dd></div>}
              {selectedLead.email && <div className="col-span-2"><dt className="mb-1 text-[10px] uppercase tracking-wide text-muted-foreground">Email</dt><dd><a href={`mailto:${selectedLead.email}`} className="break-all">{selectedLead.email}</a></dd></div>}
            </dl>
            {selectedLead.message && <details className="mt-4 rounded-xl border border-black/10 px-3 py-2.5"><summary className="flex cursor-pointer list-none items-center justify-between text-xs font-medium">Travel preferences & full message<ChevronDown size={15} /></summary><p className="mt-3 whitespace-pre-line break-words text-xs leading-relaxed text-muted-foreground">{selectedLead.message}</p></details>}
            <div className="mt-3 flex flex-wrap items-center justify-between gap-2 text-[10px] text-muted-foreground"><span>{selectedLead.source || "Website"}</span><span>{formatDate(selectedLead.created_at)}</span></div>
          </div>
          <div className="shrink-0 border-t border-black/10 bg-white p-4">
            <a href={`https://wa.me/${selectedLead.phone.replace(/\D/g, '')}`} target="_blank" rel="noopener noreferrer" className="flex w-full items-center justify-center rounded-xl bg-[#171717] py-3 text-sm font-medium text-white">Reply on WhatsApp</a>
          </div>
        </DialogContent>}
      </Dialog>

      {/* Delete Confirmation Modal */}
      {deleteId && (
        <div className="fixed inset-0 z-50 flex items-end justify-center bg-black/45 p-4 backdrop-blur-sm sm:items-center" onClick={() => setDeleteId(null)}>
          <div className="w-full max-w-xs animate-fade-in-up rounded-[1.25rem] border border-black/10 bg-white p-5 text-center shadow-[0_20px_50px_rgba(0,0,0,0.2)]" onClick={(e) => e.stopPropagation()}>
            <div className="w-12 h-12 rounded-full bg-destructive/10 flex items-center justify-center mx-auto mb-3">
              <Trash2 className="w-5 h-5 text-destructive" />
            </div>
            <h3 className="mb-1 font-sans text-lg font-medium tracking-[-0.035em] text-[#171717]">Delete Lead?</h3>
            <p className="font-sans text-xs text-muted-foreground mb-5">This action cannot be undone.</p>
            <div className="flex gap-3">
              <button
                onClick={() => setDeleteId(null)}
                className="flex-1 rounded-lg border border-black/15 py-2.5 font-sans text-sm text-muted-foreground transition-colors hover:bg-black/[0.04]"
              >
                Cancel
              </button>
              <button
                onClick={() => handleDelete(deleteId)}
                className="flex-1 rounded-lg bg-destructive py-2.5 font-sans text-sm text-destructive-foreground transition-colors hover:bg-destructive/90"
              >
                Delete
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default AdminDashboard;
