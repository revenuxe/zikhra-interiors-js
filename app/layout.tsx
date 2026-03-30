import type { Metadata } from "next";
import "./globals.css";
import Providers from "./providers";
import { SITE_NAME, SITE_URL } from "@/lib/seo";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Luxury Interior Designers in Hyderabad | Zikhra",
    template: `%s | ${SITE_NAME}`,
  },
  description:
    "Zikhra is a premium luxury interior design studio in Hyderabad delivering bespoke home interiors, modular kitchens, and turnkey execution.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    siteName: SITE_NAME,
    title: "Luxury Interior Designers in Hyderabad | Zikhra",
    description:
      "Premium and high-end interior design in Hyderabad for villas, apartments, and elegant modern homes.",
    url: SITE_URL,
  },
  twitter: {
    card: "summary_large_image",
    title: "Luxury Interior Designers in Hyderabad | Zikhra",
    description:
      "Premium and high-end interior design in Hyderabad for villas, apartments, and elegant modern homes.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}

