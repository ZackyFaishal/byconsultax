import type { Metadata } from "next";
import Link from "next/link";
import { services, whatsappUrl } from "../content";

export const metadata: Metadata = {
  title: "Layanan | byConsultax",
  description: "Bantuan konsultasi pajak, SPT Tahunan, pajak bulanan, pembukuan, PPN, dan PPh 21. Pilih sesuai kebutuhan Anda dan usaha Anda.",
};

export default function ServicesPage() {
  return (
    <main>
      <section className="subpage-hero">
        <div>
          <p className="eyebrow">Layanan kami</p>
          <h1>Bantuan pajak sesuai kebutuhan Anda.</h1>
          <p>Butuh konsultasi sekali, bantuan lapor SPT, atau pendampingan setiap bulan? Pilih layanan di bawah untuk melihat apa saja yang kami kerjakan.</p>
        </div>
      </section>
      <section className="services-section standalone-section">
        <div className="section-title compact"><p className="eyebrow">Yang bisa kami bantu</p><h2>Dari konsultasi sampai pembukuan.</h2></div>
        <div className="service-card-grid">
          {services.map((service, index) => (
            <Link className="service-card" href={`/services/${service.slug}`} key={service.slug}>
              <strong>{String(index + 1).padStart(2, "0")}</strong><h3>{service.title}</h3><p>{service.copy}</p>
              <ul>{service.points.map((point) => <li key={point}>{point}</li>)}</ul>
              <span className="card-link">Tentang layanan ini</span>
            </Link>
          ))}
        </div>
      </section>
      <section className="mini-cta">
        <div><p className="eyebrow">Masih belum yakin?</p><h2>Kita cari tahu kebutuhannya bersama.</h2></div>
        <a className="button primary" href={whatsappUrl} target="_blank" rel="noreferrer">Tanya lewat WhatsApp</a>
      </section>
    </main>
  );
}
