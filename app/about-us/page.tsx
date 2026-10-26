import type { Metadata } from "next";
import Link from "next/link";
import { experts, values, whatsappUrl } from "../content";

export const metadata: Metadata = {
  title: "Tentang Kami | byConsultax",
  description: "byConsultax menyediakan konsultasi pajak, pelaporan, dan pembukuan untuk orang pribadi serta badan usaha.",
};

const milestones = [
  ["Konsultasi awal", "Pembahasan kegiatan usaha, sumber penghasilan, dan kebutuhan pajak."],
  ["Pemeriksaan data", "Data ditinjau dan kelengkapan dokumen dikonfirmasi."],
  ["Pembahasan hasil", "Hasil perhitungan dijelaskan beserta langkah yang perlu dilakukan."],
  ["Pelaksanaan", "Pekerjaan dilanjutkan setelah mendapat persetujuan sesuai cakupan layanan."],
];

export default function AboutUsPage() {
  return (
    <main>
      <section className="subpage-hero">
        <div>
          <p className="eyebrow">Tentang kami</p>
          <h1>Tentang byConsultax.</h1>
          <p>Kami membantu orang pribadi dan pemilik usaha mengurus pajak, mulai dari memahami kewajiban sampai menyiapkan laporan.</p>
        </div>
      </section>

      <section className="about-deep-section">
        <div className="about-deep-grid">
          <div className="about-story">
            <h2>Layanan berdasarkan kondisi dan kebutuhan.</h2>
            <p>Kami melayani kebutuhan pajak sejak usaha mulai berjalan, termasuk penyusunan pembukuan, pelaporan rutin, dan peninjauan laporan sebelumnya.</p>
            <p>Setiap pekerjaan dimulai dengan pembahasan cakupan layanan dan dokumen yang diperlukan. Perhitungan serta draf laporan dijelaskan untuk ditinjau sebelum pelaporan.</p>
          </div>
          <figure className="editorial-photo about-editorial">
            <img src="/images/diskusi-dokumen.png" alt="Ilustrasi dua orang membahas catatan keuangan dan mencatat hasil diskusi" width={1536} height={1024} loading="lazy" />
            <figcaption>Peninjauan dokumen dan pembahasan hasil perhitungan.</figcaption>
          </figure>
        </div>
        <div className="value-grid about-values">
          {values.map((item, index) => (
            <article className="value-card" key={item.title}>
              <span>{String(index + 1).padStart(2, "0")}</span><h3>{item.title}</h3><p>{item.copy}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="timeline-section">
        <div className="section-title"><p className="eyebrow">Cara kami bekerja</p><h2>Proses kerja dari konsultasi hingga pelaksanaan.</h2></div>
        <div className="timeline-grid">
          {milestones.map(([title, copy], index) => (
            <article className="workflow-card" key={title}><strong>{String(index + 1).padStart(2, "0")}</strong><h3>{title}</h3><p>{copy}</p></article>
          ))}
        </div>
      </section>

      <section className="experts-section">
        <div className="section-title split">
          <div><p className="eyebrow">Tim kami</p><h2>Tim byConsultax.</h2></div>
          <a className="text-link" href={whatsappUrl} target="_blank" rel="noreferrer">Hubungi kami</a>
        </div>
        <div className="expert-grid">
          {experts.map(([name, role, focus]) => (
            <article className="expert-card" key={name}>
              <div className="avatar" aria-hidden="true">{name.split(" ").map((part) => part[0]).join("")}</div>
              <h3>{name}</h3><strong>{role}</strong><p>{focus}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="mini-cta">
        <div><p className="eyebrow">Konsultasi</p><h2>Diskusikan kebutuhan pajak dan pembukuan.</h2></div>
        <div className="hero-actions">
          <a className="button primary" href={whatsappUrl} target="_blank" rel="noreferrer">Hubungi via WhatsApp</a>
          <Link className="button ghost" href="/services">Lihat layanan</Link>
        </div>
      </section>
    </main>
  );
}
