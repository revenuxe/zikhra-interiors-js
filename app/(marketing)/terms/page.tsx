import type { Metadata } from "next";
import Terms from "@/legacy-pages/Terms";

export const metadata: Metadata = {
  title: "Terms and Conditions",
  description: "Read the terms and conditions for using Zikhra's website and luxury interior design services.",
  alternates: { canonical: "/terms" },
};

export default function TermsPage() {
  return <Terms />;
}

