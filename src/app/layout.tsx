import type { Metadata } from "next";
import "./globals.css";
import Providers from "./providers";
import { SITE_NAME, SITE_URL } from "@/lib/seo";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Umrah & Hajj Travel from Bangalore & Bengaluru | Zikhra",
    template: `%s | ${SITE_NAME}`,
  },
  description:
    "Zikhra designs premium Umrah journeys, Hajj enquiries, and coordinated travel in Bangalore and Bengaluru with clear scope planning and supervised delivery.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    siteName: "Zikhra Tours & Travels",
    title: "Umrah & Hajj Travel from Bangalore & Bengaluru | Zikhra",
    description:
      "Umrah planning, Hajj enquiries, and family travel from Bangalore.",
    url: SITE_URL,
  },
  twitter: {
    card: "summary_large_image",
    title: "Umrah & Hajj Travel from Bangalore & Bengaluru | Zikhra",
    description:
      "Umrah planning, Hajj enquiries, and family travel from Bangalore.",
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
