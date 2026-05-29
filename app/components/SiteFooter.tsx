import Link from "next/link";
import { companyName, logoPath } from "../content";

export function SiteFooter() {
  return (
    <footer className="footer">
      <div>
        <img className="footer-logo" src={logoPath} alt={companyName} />
        <p>
          Konsultan pajak yang membantu UMKM, orang pribadi, freelancer, CV,
          dan PT merapikan pelaporan, pembukuan, payroll, PPN, dan tax planning.
        </p>
      </div>
      <div className="footer-links">
        <Link href="/">Home</Link>
        <Link href="/about-us">About Us</Link>
        <Link href="/services">Services</Link>
        <Link href="/#experts">Experts</Link>
        <Link href="/#insight">Insight</Link>
        <Link href="/#contact">Contact</Link>
      </div>
    </footer>
  );
}
