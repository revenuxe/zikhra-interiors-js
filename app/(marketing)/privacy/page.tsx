import type { Metadata } from "next";
import Privacy from "@/legacy-pages/Privacy";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "Review how Zikhra collects and protects your data when you browse or request interior design consultation.",
  alternates: { canonical: "/privacy" },
};

export default function PrivacyPage() {
  return <Privacy />;
}

