import type { Metadata } from "next";
import "./globals.css";
import { SiteFooter } from "./components/SiteFooter";
import { SiteHeader } from "./components/SiteHeader";
import { WhatsAppBubble } from "./components/WhatsAppBubble";

export const metadata: Metadata = {
  title: "byConsultax | Konsultan Pajak",
  description:
    "byConsultax membantu UMKM, orang pribadi, freelancer, CV, dan PT mengelola konsultasi pajak, tax planning, SPT Tahunan, pendampingan pajak bulanan, pembukuan, PPN, PKP, dan PPh 21.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id">
      <body>
        <SiteHeader />
        {children}
        <SiteFooter />
        <WhatsAppBubble />
      </body>
    </html>
  );
}
