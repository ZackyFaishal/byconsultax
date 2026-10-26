import Link from "next/link";
import { companyName, logoPath } from "../content";

export function SiteFooter() {
  return (
    <footer className="footer">
      <div>
        <img className="footer-logo" src={logoPath} alt={companyName} width={2172} height={724} />
        <p>
          Bantuan pajak pribadi, pajak usaha, dan pembukuan.
          Mulai dari konsultasi sampai laporan selesai.
        </p>
      </div>
      <div className="footer-links">
        <Link href="/">Beranda</Link>
        <Link href="/about-us">Tentang Kami</Link>
        <Link href="/services">Layanan</Link>
        <Link href="/#experts">Tim</Link>
        <Link href="/#insight">Tanya Jawab</Link>
        <Link href="/#contact">Kontak</Link>
      </div>
    </footer>
  );
}
