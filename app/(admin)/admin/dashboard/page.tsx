import type { Metadata } from "next";
import AdminDashboard from "@/legacy-pages/AdminDashboard";

export const metadata: Metadata = {
  title: "Admin Dashboard",
  robots: {
    index: false,
    follow: false,
  },
};

export default function AdminDashboardPage() {
  return <AdminDashboard />;
}

