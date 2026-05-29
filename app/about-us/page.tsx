import type { Metadata } from "next";
import Link from "next/link";
import { experts, values, whatsappUrl } from "../content";

export const metadata: Metadata = {
  title: "About Us | byConsultax",
  description:
    "Tentang byConsultax, konsultan pajak untuk UMKM, orang pribadi, freelancer, CV, dan PT.",
};

const milestones = [
  ["Discovery", "Memahami model bisnis, struktur transaksi, dan kondisi administrasi klien."],
  ["Strategy", "Menyusun prioritas pajak, legal, dan akuntansi yang realistis untuk dijalankan."],
  ["Execution", "Mendampingi implementasi pelaporan, dokumentasi, dan komunikasi dengan otoritas."],
  ["Improvement", "Memberikan catatan perbaikan agar proses berikutnya lebih efisien."],
];

export default function AboutUsPage() {
  return (
    <main>
      <section className="subpage-hero">
        <div>
          <p className="eyebrow">About Us</p>
          <h1>byConsultax brings friendly tax guidance to your business.</h1>
          <p>
            Kami membantu pemilik usaha, freelancer, orang pribadi, CV, dan PT
            memahami kewajiban pajak, merapikan pembukuan, dan menjalankan
            pelaporan dengan pendekatan yang praktis.
          </p>
        </div>
      </section>

      <section className="about-deep-section">
        <div className="about-deep-grid">
          <div className="about-story">
            <p>
              byConsultax dibangun untuk menjawab kebutuhan wajib pajak yang ingin
              mendapatkan layanan profesional tanpa proses yang berbelit.
              Konsultan kami membantu membaca regulasi, menyiapkan dokumen,
              dan menjelaskan pilihan tindakan dengan bahasa bisnis.
            </p>
            <p>
              Tujuan kami sederhana: membuat klien lebih siap menghadapi
              kewajiban pajak rutin, transaksi penting, pembukuan, pelaporan,
              dan perubahan regulasi.
            </p>
          </div>
          <div className="about-media-stack">
            <div className="about-photo-card">
              <img
                src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&w=1200&q=80"
                alt="Tim konsultan pajak byConsultax dalam sesi strategi"
              />
            </div>
            <div className="value-grid compact-grid">
              {values.map((item) => (
                <article className="value-card" key={item.title}>
                  <span>{item.title.slice(0, 2)}</span>
                  <h3>{item.title}</h3>
                  <p>{item.copy}</p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="timeline-section">
        <div className="section-title">
          <p className="eyebrow">How we work</p>
          <h2>Metode kerja yang rapi dari awal sampai tindak lanjut.</h2>
        </div>
        <div className="timeline-grid">
          {milestones.map(([title, copy], index) => (
            <article className="workflow-card" key={title}>
              <strong>{String(index + 1).padStart(2, "0")}</strong>
              <h3>{title}</h3>
              <p>{copy}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="experts-section">
        <div className="section-title split">
          <div>
            <p className="eyebrow">Our experts</p>
            <h2>Konsultan untuk isu pajak dan bisnis yang berbeda.</h2>
          </div>
          <a className="text-link" href={whatsappUrl} target="_blank" rel="noreferrer">
            Hubungi tim
          </a>
        </div>
        <div className="expert-grid">
          {experts.map(([name, role, focus]) => (
            <article className="expert-card" key={name}>
              <div className="avatar">{name.split(" ").map((part) => part[0]).join("")}</div>
              <h3>{name}</h3>
              <strong>{role}</strong>
              <p>{focus}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="mini-cta">
        <div>
          <p className="eyebrow">Ready to talk?</p>
          <h2>Diskusikan kebutuhan pajak Anda bersama byConsultax.</h2>
        </div>
        <div className="hero-actions">
          <a className="button primary" href={whatsappUrl} target="_blank" rel="noreferrer">
            WhatsApp Admin
          </a>
          <Link className="button ghost" href="/services">
            Lihat layanan
          </Link>
        </div>
      </section>
    </main>
  );
}
