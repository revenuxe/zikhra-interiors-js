import { seoTitle } from "@/lib/seo";
import type { Metadata } from "next";
import AdminLogin from "@/legacy-pages/AdminLogin";

export const metadata: Metadata = {
  title: seoTitle("Admin Login"),
  robots: {
    index: false,
    follow: false,
  },
};

export default function AdminLoginPage() {
  return <AdminLogin />;
}

