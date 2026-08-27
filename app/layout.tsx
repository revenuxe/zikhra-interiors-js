import type { Metadata } from "next";
import "./globals.css";
import Providers from "./providers";
import { DEFAULT_OG_IMAGE_PATH, pageOpenGraph, SITE_NAME, SITE_URL, twitterSummaryLarge } from "@/lib/seo";

const defaultTitle = "Best Interior Designer in Bangalore | Zikhra Interiors";
const defaultDescription =
  "Premium home interiors, modular kitchens, and turnkey execution in Bangalore with clear scope planning and supervised delivery.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: defaultTitle,
    template: `%s | ${SITE_NAME}`,
  },
  description: defaultDescription,
  icons: {
    icon: [{ url: "/favicon.ico", type: "image/x-icon" }],
    shortcut: "/favicon.ico",
  },
  alternates: {
    canonical: "/",
  },
  openGraph: {
    ...pageOpenGraph({
      title: defaultTitle,
      description: defaultDescription,
      path: "/",
      imageUrl: DEFAULT_OG_IMAGE_PATH,
      imageAlt: "Zikhra - best interior designer in Bangalore",
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
