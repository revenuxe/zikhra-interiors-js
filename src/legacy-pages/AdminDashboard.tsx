"use client";

import { useEffect, useState } from "react";
import { getSupabaseClient } from "@/integrations/supabase/client";
import { Eye, Trash2, LogOut, Users, X } from "lucide-react";
import { toast } from "sonner";
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
}

const AdminDashboard = () => {
  const [leads, setLeads] = useState<Lead[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedLead, setSelectedLead] = useState<Lead | null>(null);
  const [deleteId, setDeleteId] = useState<string | null>(null);
  const router = useRouter();

  useEffect(() => {
    checkAuth();
    fetchLeads();
  }, []);

  const checkAuth = async () => {
    const supabase = getSupabaseClient();
    if (!supabase) return;
    try {
      const { data: { session } } = await supabase.auth.getSession();
      if (!session) {
        router.push("/admin/login");
      }
    } catch {
      router.push("/admin/login");
    }
  };

  const fetchLeads = async () => {
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

  return (
    <div className="min-h-screen bg-[#f5f5f3] text-[#171717]">
      {/* Header */}
      <div className="sticky top-0 z-40 flex items-center justify-between border-b border-black/10 bg-white/90 px-4 py-4 backdrop-blur-md sm:px-6">
        <div>
          <p className="text-[10px] font-sans font-medium uppercase tracking-[0.24em] text-[#777]">Zikhra Interiors</p>
          <h1 className="mt-1 font-sans text-xl font-medium tracking-[-0.04em] text-[#171717]">Lead Dashboard</h1>
        </div>
        <button onClick={handleLogout} className="flex items-center gap-1.5 rounded-lg border border-black/12 bg-white px-3 py-2 font-sans text-xs font-medium text-[#333] transition-colors hover:border-black/35 hover:bg-[#fafafa]">
          <LogOut className="w-4 h-4" /> Logout
        </button>
      </div>

      {/* Stats */}
      <div className="mx-auto flex max-w-6xl gap-3 px-4 py-6 sm:px-6">
        <div className="flex flex-1 items-center gap-3 rounded-[1.25rem] border border-black/10 bg-white p-5 shadow-[0_10px_24px_rgba(0,0,0,0.055)]">
          <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#171717]">
            <Users className="h-5 w-5 text-white" />
          </div>
          <div>
            <p className="font-sans text-2xl font-semibold tracking-[-0.04em] text-[#171717]">{leads.length}</p>
            <p className="font-sans text-xs text-muted-foreground">Total Leads</p>
          </div>
        </div>
      </div>

      {/* Leads List */}
      <div className="mx-auto max-w-6xl px-4 pb-10 sm:px-6">
        <h2 className="mb-4 font-sans text-sm font-medium text-[#505050]">Recent Leads</h2>
        {loading ? (
          <div className="text-center py-10 text-muted-foreground text-sm">Loading...</div>
        ) : leads.length === 0 ? (
          <div className="text-center py-10 text-muted-foreground text-sm">No leads yet</div>
        ) : (
          <div className="space-y-3">
            {leads.map((lead) => (
              <div key={lead.id} className="rounded-[1.25rem] border border-black/10 bg-white p-4 shadow-[0_8px_20px_rgba(0,0,0,0.045)] transition-shadow hover:shadow-[0_12px_26px_rgba(0,0,0,0.075)]">
                <div className="flex items-start justify-between">
                  <div className="flex-1 min-w-0">
                    <p className="font-sans text-sm font-medium text-foreground truncate">{lead.name}</p>
                    <p className="font-sans text-xs text-muted-foreground mt-0.5">{lead.phone}</p>
                    {lead.area ? (
                      <p className="font-sans text-[10px] text-gold/90 mt-0.5 truncate">{lead.area}</p>
                    ) : null}
                    <p className="font-sans text-[10px] text-muted-foreground/60 mt-1">{formatDate(lead.created_at)}</p>
                  </div>
                  <div className="flex items-center gap-2 ml-3">
                    <button
                      onClick={() => setSelectedLead(lead)}
                      className="flex h-8 w-8 items-center justify-center rounded-lg bg-black/[0.06] transition-colors hover:bg-black/[0.12]"
                    >
                      <Eye className="h-4 w-4 text-[#171717]" />
                    </button>
                    <button
                      onClick={() => setDeleteId(lead.id)}
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

      {/* Lead Detail Modal */}
      {selectedLead && (
        <div className="fixed inset-0 z-50 flex items-end justify-center bg-black/45 p-4 backdrop-blur-sm sm:items-center" onClick={() => setSelectedLead(null)}>
          <div className="w-full max-w-sm animate-fade-in-up rounded-[1.25rem] border border-black/10 bg-white p-5 shadow-[0_20px_50px_rgba(0,0,0,0.2)]" onClick={(e) => e.stopPropagation()}>
            <div className="flex items-center justify-between mb-4">
              <h3 className="font-sans text-lg font-medium tracking-[-0.035em] text-[#171717]">Lead Details</h3>
              <button onClick={() => setSelectedLead(null)} className="flex h-8 w-8 items-center justify-center rounded-lg bg-black/[0.06] transition-colors hover:bg-black/[0.12]">
                <X className="w-4 h-4 text-muted-foreground" />
              </button>
            </div>
            <div className="space-y-3">
              <div>
                <p className="text-[10px] font-sans uppercase tracking-wider text-muted-foreground mb-0.5">Name</p>
                <p className="text-sm font-sans text-foreground">{selectedLead.name}</p>
              </div>
              <div>
                <p className="text-[10px] font-sans uppercase tracking-wider text-muted-foreground mb-0.5">Phone</p>
                <a href={`tel:${selectedLead.phone}`} className="text-sm font-sans text-gold">{selectedLead.phone}</a>
              </div>
              {selectedLead.email && (
                <div>
                  <p className="text-[10px] font-sans uppercase tracking-wider text-muted-foreground mb-0.5">Email</p>
                  <a href={`mailto:${selectedLead.email}`} className="text-sm font-sans text-gold">{selectedLead.email}</a>
                </div>
              )}
              {selectedLead.area && (
                <div>
                  <p className="text-[10px] font-sans uppercase tracking-wider text-muted-foreground mb-0.5">Area</p>
                  <p className="text-sm font-sans text-foreground">{selectedLead.area}</p>
                </div>
              )}
              {selectedLead.project_type && (
                <div>
                  <p className="text-[10px] font-sans uppercase tracking-wider text-muted-foreground mb-0.5">Project type</p>
                  <p className="text-sm font-sans text-foreground">{selectedLead.project_type}</p>
                </div>
              )}
              {selectedLead.message && (
                <div>
                  <p className="text-[10px] font-sans uppercase tracking-wider text-muted-foreground mb-0.5">Message</p>
                  <p className="text-sm font-sans text-foreground/80">{selectedLead.message}</p>
                </div>
              )}
              <div>
                <p className="text-[10px] font-sans uppercase tracking-wider text-muted-foreground mb-0.5">Source</p>
                <p className="text-sm font-sans text-foreground">{selectedLead.source || "Website"}</p>
              </div>
              <div>
                <p className="text-[10px] font-sans uppercase tracking-wider text-muted-foreground mb-0.5">Received</p>
                <p className="text-sm font-sans text-foreground">{formatDate(selectedLead.created_at)}</p>
              </div>
            </div>
            <a
              href={`https://wa.me/${selectedLead.phone.replace(/\D/g, '')}`}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-5 flex w-full items-center justify-center gap-2 rounded-lg bg-[#171717] py-3 font-sans text-sm font-medium text-white transition-all hover:-translate-y-0.5 hover:bg-black"
            >
              Reply on WhatsApp
            </a>
          </div>
        </div>
      )}

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
