import type { Metadata } from "next";
import Link from "next/link";
import { services, whatsappUrl } from "../content";

export const metadata: Metadata = {
  title: "Services | byConsultax",
  description:
    "Daftar layanan byConsultax untuk konsultasi pajak, tax planning, SPT Tahunan, pendampingan pajak bulanan, pembukuan, PPN, PKP, payroll, dan PPh 21.",
};

export default function ServicesPage() {
  return (
    <main>
      <section className="subpage-hero">
        <div>
          <p className="eyebrow">Our services</p>
          <h1>Layanan pajak dan bisnis dengan halaman detail yang jelas.</h1>
          <p>
            Pilih layanan yang sesuai dengan kebutuhan perusahaan Anda. Setiap
            halaman berisi ruang lingkup, deliverables, proses kerja, dan tipe
            klien yang paling cocok.
          </p>
        </div>
      </section>

      <section className="services-section standalone-section">
        <div className="section-title compact">
          <p className="eyebrow">Layanan kami</p>
          <h2>Bukan hanya daftar layanan, setiap layanan punya detail sendiri.</h2>
        </div>
        <div className="service-card-grid">
          {services.map((service, index) => (
            <Link className="service-card" href={`/services/${service.slug}`} key={service.title}>
              <div className="service-image">
                <img src={service.image} alt={service.title} />
              </div>
              <strong>{String(index + 1).padStart(2, "0")}</strong>
              <h3>{service.title}</h3>
              <p>{service.copy}</p>
              <ul>
                {service.points.map((point) => (
                  <li key={point}>{point}</li>
                ))}
              </ul>
              <span className="card-link">Buka detail layanan</span>
            </Link>
          ))}
        </div>
      </section>

      <section className="mini-cta">
        <div>
          <p className="eyebrow">Need guidance?</p>
          <h2>Belum yakin layanan mana yang paling tepat?</h2>
        </div>
        <a className="button primary" href={whatsappUrl} target="_blank" rel="noreferrer">
          Tanya Admin byConsultax
        </a>
      </section>
    </main>
  );
}
