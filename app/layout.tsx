import type { Metadata } from "next";
import "./globals.css";
import Providers from "./providers";
import { DEFAULT_OG_IMAGE_PATH, pageOpenGraph, SITE_NAME, SITE_URL, twitterSummaryLarge } from "@/lib/seo";

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
    ...pageOpenGraph({
      title: "Luxury Interior Designers in Hyderabad | Zikhra",
      description:
        "Premium and high-end interior design in Hyderabad for villas, apartments, and elegant modern homes.",
      path: "/",
      imageUrl: DEFAULT_OG_IMAGE_PATH,
      imageAlt: "Zikhra luxury interior design studio — elegant bespoke homes in Hyderabad",
    }),
    siteName: SITE_NAME,
  },
  twitter: twitterSummaryLarge(
    "Luxury Interior Designers in Hyderabad | Zikhra",
    "Premium and high-end interior design in Hyderabad for villas, apartments, and elegant modern homes.",
    DEFAULT_OG_IMAGE_PATH,
  ),
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

