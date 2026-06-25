import type { Metadata, Viewport } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import { ClientCursor } from "@/components/client/ClientCursor";
import { clientSite } from "@/lib/client-site";
import "./globals.css";
import "./client.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-client-body",
  weight: ["300", "400", "500"],
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-client-display",
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const title = `${clientSite.name} — Graphic Designer`;
const description = `${clientSite.roles.join(" · ")} · ${clientSite.location}`;

export const metadata: Metadata = {
  metadataBase: new URL(clientSite.url),
  title,
  description,
  openGraph: {
    title,
    description,
    url: clientSite.url,
    siteName: clientSite.name,
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary",
    title,
    description,
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport: Viewport = {
  themeColor: "#000000",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${spaceGrotesk.variable}`}>
      <body>
        <div className="client-shell">
          <ClientCursor />
          {children}
        </div>
      </body>
    </html>
  );
}
