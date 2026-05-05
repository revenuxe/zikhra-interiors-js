import type { Metadata } from "next";
import "./globals.css";
import Providers from "./providers";
import { SITE_NAME, SITE_URL } from "@/lib/seo";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Best Interior Designer in Hyderabad & Bangalore | Zikhra",
    template: `%s | ${SITE_NAME}`,
  },
  description:
    "Zikhra designs premium home interiors, modular kitchens, and turnkey interiors in Hyderabad and Bangalore with clear scope planning and supervised delivery.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    siteName: "Zikhra Interiors",
    title: "Best Interior Designer in Hyderabad & Bangalore | Zikhra",
    description:
      "Premium and high-end interior design in Hyderabad for villas, apartments, and modern homes.",
    url: SITE_URL,
  },
  twitter: {
    card: "summary_large_image",
    title: "Best Interior Designer in Hyderabad & Bangalore | Zikhra",
    description:
      "Premium and high-end interior design in Hyderabad for villas, apartments, and modern homes.",
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
