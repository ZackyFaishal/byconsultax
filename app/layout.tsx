import type { Metadata } from "next";
import "./globals.css";
import { SiteFooter } from "./components/SiteFooter";
import { SiteHeader } from "./components/SiteHeader";
import { WhatsAppBubble } from "./components/WhatsAppBubble";

export const metadata: Metadata = {
  title: "byConsultax | Konsultan Pajak",
  description:
    "byConsultax menyediakan konsultasi pajak, pelaporan SPT, pendampingan pajak bulanan, dan pembukuan untuk orang pribadi serta badan usaha.",
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
