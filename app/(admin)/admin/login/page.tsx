import type { Metadata } from "next";
import AdminLogin from "@/legacy-pages/AdminLogin";

export const metadata: Metadata = {
  title: "Admin Login",
  robots: {
    index: false,
    follow: false,
  },
};

export default function AdminLoginPage() {
  return <AdminLogin />;
}

