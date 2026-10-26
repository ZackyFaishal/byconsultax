import type { Metadata } from "next";
import "./globals.css";
import { SiteFooter } from "./components/SiteFooter";
import { SiteHeader } from "./components/SiteHeader";
import { WhatsAppBubble } from "./components/WhatsAppBubble";

export const metadata: Metadata = {
  title: "byConsultax | Konsultan Pajak",
  description:
    "Butuh bantuan pajak pribadi atau usaha? byConsultax membantu konsultasi, pelaporan SPT, pajak bulanan, dan pembukuan. Ceritakan kebutuhan Anda kepada kami.",
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
