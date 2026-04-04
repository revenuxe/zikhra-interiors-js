"use client";

import { useState } from "react";
import { getSupabaseClient } from "@/integrations/supabase/client";
import { toast } from "sonner";
import { useRouter } from "next/navigation";
import { useBeginRouteChange } from "@/components/GlobalNavigationLoader";

const AdminLogin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  const beginRouteChange = useBeginRouteChange();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    const supabase = getSupabaseClient();
    if (!supabase) {
      toast.error("Login is temporarily unavailable. Please try again in a moment.");
      setLoading(false);
      return;
    }
    const { error } = await supabase.auth.signInWithPassword({ email, password });
    setLoading(false);
    if (error) {
      toast.error("Invalid credentials");
    } else {
      toast.success("Welcome back!");
      beginRouteChange();
      router.push("/admin/dashboard");
    }
  };

  return (
    <div className="min-h-screen bg-luxury-black flex items-center justify-center px-4">
      <div className="w-full max-w-sm">
        <div className="text-center mb-8">
          <h1 className="font-serif text-3xl gold-text mb-2">Zikhra Admin</h1>
          <p className="text-muted-foreground text-sm font-sans">Sign in to manage your leads</p>
        </div>

        <form onSubmit={handleLogin} className="bg-card rounded-2xl p-6 border border-border/30 space-y-4 shadow-xl">
          <div>
            <label className="block text-xs font-sans text-muted-foreground mb-1.5">Email</label>
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-3 rounded-xl bg-background border border-border/50 font-sans text-sm text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:border-gold/50 transition-colors"
              placeholder="admin@zikhra.com"
            />
          </div>
          <div>
            <label className="block text-xs font-sans text-muted-foreground mb-1.5">Password</label>
            <input
              type="password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-3 rounded-xl bg-background border border-border/50 font-sans text-sm text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:border-gold/50 transition-colors"
              placeholder="••••••••"
            />
          </div>
          <button
            type="submit"
            disabled={loading}
            className="w-full gold-gradient py-3 rounded-full font-sans text-sm font-medium text-primary-foreground transition-all duration-300 hover:scale-[1.02] disabled:opacity-50"
          >
            {loading ? "Signing in..." : "Sign In"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default AdminLogin;
