import { seoTitle } from "@/lib/seo";
import type { Metadata } from "next";
import AdminDashboard from "@/legacy-pages/AdminDashboard";

export const metadata: Metadata = {
  title: seoTitle("Admin Dashboard"),
  robots: {
    index: false,
    follow: false,
  },
};

export default function AdminDashboardPage() {
  return <AdminDashboard />;
}

