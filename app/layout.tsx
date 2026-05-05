import type { Metadata } from "next";
import "./globals.css";
import Providers from "./providers";
import { DEFAULT_OG_IMAGE_PATH, pageOpenGraph, SITE_NAME, SITE_URL, twitterSummaryLarge } from "@/lib/seo";

const defaultTitle = "Best Interior Designer in Hyderabad & Bangalore | Zikhra";
const defaultDescription =
  "Premium home interiors, modular kitchens, and turnkey execution in Hyderabad and Bangalore with clear scope planning and supervised delivery.";

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
      imageAlt: "Zikhra - best interior designer in Hyderabad and Bangalore",
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
