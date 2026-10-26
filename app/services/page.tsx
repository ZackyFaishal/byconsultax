import type { Metadata } from "next";
import Link from "next/link";
import { services, whatsappUrl } from "../content";

export const metadata: Metadata = {
  title: "Layanan | byConsultax",
  description: "Bantuan konsultasi pajak, SPT Tahunan, pajak bulanan, pembukuan, PPN, dan PPh 21. Untuk kebutuhan orang pribadi dan badan usaha.",
};

export default function ServicesPage() {
  return (
    <main>
      <section className="subpage-hero">
        <div>
          <p className="eyebrow">Layanan kami</p>
          <h1>Layanan pajak dan pembukuan.</h1>
          <p>Tersedia konsultasi, pelaporan SPT, pembukuan, dan pendampingan bulanan. Setiap layanan mencakup penjelasan pekerjaan, hasil, dan proses pelaksanaannya.</p>
        </div>
      </section>
      <section className="services-section standalone-section">
        <div className="section-title compact"><p className="eyebrow">Cakupan layanan</p><h2>Dari konsultasi sampai pembukuan.</h2></div>
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
        <div><p className="eyebrow">Pemilihan layanan</p><h2>Konsultasikan layanan yang sesuai.</h2></div>
        <a className="button primary" href={whatsappUrl} target="_blank" rel="noreferrer">Konsultasi via WhatsApp</a>
      </section>
    </main>
  );
}
