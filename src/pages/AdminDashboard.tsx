import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";
import { Eye, Trash2, LogOut, Users, X, FileText } from "lucide-react";
import { Link } from "react-router-dom";
import { toast } from "sonner";

interface Lead {
  id: string;
  name: string;
  phone: string;
  email: string | null;
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
  const navigate = useNavigate();

  useEffect(() => {
    checkAuth();
    fetchLeads();
  }, []);

  const checkAuth = async () => {
    const { data: { session } } = await supabase.auth.getSession();
    if (!session) navigate("/admin/login");
  };

  const fetchLeads = async () => {
    const { data, error } = await supabase
      .from("leads")
      .select("*")
      .order("created_at", { ascending: false });
    if (error) {
      toast.error("Failed to fetch leads");
    } else {
      setLeads(data || []);
    }
    setLoading(false);
  };

  const handleDelete = async (id: string) => {
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
    await supabase.auth.signOut();
    navigate("/admin/login");
  };

  const formatDate = (d: string) =>
    new Date(d).toLocaleDateString("en-IN", {
      day: "numeric", month: "short", year: "numeric", hour: "2-digit", minute: "2-digit",
    });

  return (
    <div className="min-h-screen bg-luxury-black">
      {/* Header */}
      <div className="sticky top-0 z-40 glass-effect border-b border-border/20 px-4 py-3 flex items-center justify-between">
        <h1 className="font-serif text-xl gold-text">Dashboard</h1>
        <button onClick={handleLogout} className="flex items-center gap-1.5 text-muted-foreground text-xs font-sans hover:text-gold transition-colors">
          <LogOut className="w-4 h-4" /> Logout
        </button>
      </div>

      {/* Stats */}
      <div className="px-4 py-4">
        <div className="bg-card rounded-2xl border border-border/30 p-4 flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl gold-gradient flex items-center justify-center">
            <Users className="w-5 h-5 text-primary-foreground" />
          </div>
          <div>
            <p className="font-sans text-2xl font-bold text-foreground">{leads.length}</p>
            <p className="font-sans text-xs text-muted-foreground">Total Leads</p>
          </div>
        </div>
      </div>

      {/* Leads List */}
      <div className="px-4 pb-8">
        <h2 className="font-sans text-sm font-medium text-muted-foreground mb-3">Recent Leads</h2>
        {loading ? (
          <div className="text-center py-10 text-muted-foreground text-sm">Loading...</div>
        ) : leads.length === 0 ? (
          <div className="text-center py-10 text-muted-foreground text-sm">No leads yet</div>
        ) : (
          <div className="space-y-3">
            {leads.map((lead) => (
              <div key={lead.id} className="bg-card rounded-2xl border border-border/30 p-4">
                <div className="flex items-start justify-between">
                  <div className="flex-1 min-w-0">
                    <p className="font-sans text-sm font-medium text-foreground truncate">{lead.name}</p>
                    <p className="font-sans text-xs text-muted-foreground mt-0.5">{lead.phone}</p>
                    <p className="font-sans text-[10px] text-muted-foreground/60 mt-1">{formatDate(lead.created_at)}</p>
                  </div>
                  <div className="flex items-center gap-2 ml-3">
                    <button
                      onClick={() => setSelectedLead(lead)}
                      className="w-8 h-8 rounded-xl bg-gold/10 flex items-center justify-center hover:bg-gold/20 transition-colors"
                    >
                      <Eye className="w-4 h-4 text-gold" />
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
        <div className="fixed inset-0 z-50 bg-black/70 flex items-end sm:items-center justify-center p-4" onClick={() => setSelectedLead(null)}>
          <div className="bg-card rounded-2xl border border-border/30 w-full max-w-sm p-5 animate-fade-in-up" onClick={(e) => e.stopPropagation()}>
            <div className="flex items-center justify-between mb-4">
              <h3 className="font-serif text-lg gold-text">Lead Details</h3>
              <button onClick={() => setSelectedLead(null)} className="w-8 h-8 rounded-xl bg-muted/20 flex items-center justify-center hover:bg-muted/40 transition-colors">
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
              className="mt-5 w-full flex items-center justify-center gap-2 gold-gradient py-3 rounded-full font-sans text-sm font-medium text-primary-foreground transition-all hover:scale-[1.02]"
            >
              Reply on WhatsApp
            </a>
          </div>
        </div>
      )}

      {/* Delete Confirmation Modal */}
      {deleteId && (
        <div className="fixed inset-0 z-50 bg-black/70 flex items-end sm:items-center justify-center p-4" onClick={() => setDeleteId(null)}>
          <div className="bg-card rounded-2xl border border-border/30 w-full max-w-xs p-5 text-center animate-fade-in-up" onClick={(e) => e.stopPropagation()}>
            <div className="w-12 h-12 rounded-full bg-destructive/10 flex items-center justify-center mx-auto mb-3">
              <Trash2 className="w-5 h-5 text-destructive" />
            </div>
            <h3 className="font-serif text-lg text-foreground mb-1">Delete Lead?</h3>
            <p className="font-sans text-xs text-muted-foreground mb-5">This action cannot be undone.</p>
            <div className="flex gap-3">
              <button
                onClick={() => setDeleteId(null)}
                className="flex-1 py-2.5 rounded-full border border-border/50 font-sans text-sm text-muted-foreground hover:bg-muted/10 transition-colors"
              >
                Cancel
              </button>
              <button
                onClick={() => handleDelete(deleteId)}
                className="flex-1 py-2.5 rounded-full bg-destructive font-sans text-sm text-destructive-foreground hover:bg-destructive/90 transition-colors"
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
