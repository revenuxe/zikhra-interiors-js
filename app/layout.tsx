import type { Metadata } from "next";
import "./globals.css";
import Providers from "./providers";
import { DEFAULT_OG_IMAGE_PATH, pageOpenGraph, SITE_NAME, SITE_URL, twitterSummaryLarge } from "@/lib/seo";

const defaultTitle = "Luxury Interior Designers Hyderabad & Bangalore | Zikhra";
const defaultDescription =
  "Premium luxury interior design studio for Hyderabad and Bangalore — bespoke home interiors, modular kitchens, turnkey villas & apartments. Jubilee Hills to HITEC City; Koramangala to Whitefield.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: defaultTitle,
    template: `%s | ${SITE_NAME}`,
  },
  description: defaultDescription,
  alternates: {
    canonical: "/",
  },
  openGraph: {
    ...pageOpenGraph({
      title: defaultTitle,
      description: defaultDescription,
      path: "/",
      imageUrl: DEFAULT_OG_IMAGE_PATH,
      imageAlt: "Zikhra — luxury interior design Hyderabad and Bangalore",
    }),
    siteName: SITE_NAME,
  },
  twitter: twitterSummaryLarge(defaultTitle, defaultDescription, DEFAULT_OG_IMAGE_PATH),
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

