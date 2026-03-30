import type { Metadata } from "next";
import ThankYou from "@/legacy-pages/ThankYou";

export const dynamic = "force-dynamic";
export const revalidate = 0;

export const metadata: Metadata = {
  title: "Thank You",
  description: "Thank you for contacting Zikhra. Our luxury interior design team will get back to you shortly.",
  alternates: { canonical: "/thank-you" },
};

export default function ThankYouPage() {
  return <ThankYou />;
}

