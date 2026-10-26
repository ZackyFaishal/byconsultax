import type { Metadata } from "next";
import Link from "next/link";
import { experts, values, whatsappUrl } from "../content";

export const metadata: Metadata = {
  title: "Tentang Kami | byConsultax",
  description: "Kenalan dengan byConsultax. Kami membantu mengurus pajak pribadi, pajak usaha, dan pembukuan, mulai dari konsultasi hingga pelaporan.",
};

const milestones = [
  ["Kami dengarkan", "Ceritakan usaha, pekerjaan, dan pertanyaan pajak Anda."],
  ["Kami cek", "Kami pelajari data yang ada dan beri tahu jika ada dokumen yang kurang."],
  ["Kita bahas", "Kami jelaskan hasil perhitungan dan langkah yang perlu dilakukan."],
  ["Kami bantu urus", "Setelah Anda setujui, kami lanjutkan pekerjaan sesuai layanan yang disepakati."],
];

export default function AboutUsPage() {
  return (
    <main>
      <section className="subpage-hero">
        <div>
          <p className="eyebrow">Tentang kami</p>
          <h1>Kenalan dulu dengan byConsultax.</h1>
          <p>Kami membantu orang pribadi dan pemilik usaha mengurus pajak, mulai dari memahami kewajiban sampai menyiapkan laporan.</p>
        </div>
      </section>

      <section className="about-deep-section">
        <div className="about-deep-grid">
          <div className="about-story">
            <h2>Anda tidak perlu tahu semuanya dari awal.</h2>
            <p>Ada yang datang karena baru mulai usaha. Ada juga yang ingin membereskan laporan atau butuh bantuan pembukuan. Kita mulai dari kondisi Anda sekarang.</p>
            <p>Kami jelaskan data yang dibutuhkan, apa yang akan dikerjakan, dan bagian yang perlu Anda periksa. Kalau ada istilah atau angka yang belum jelas, silakan tanyakan.</p>
          </div>
          <figure className="editorial-photo about-editorial">
            <img src="/images/diskusi-dokumen.png" alt="Ilustrasi dua orang membahas catatan keuangan dan mencatat hasil diskusi" width={1536} height={1024} loading="lazy" />
            <figcaption>Kita periksa datanya dan bahas bersama.</figcaption>
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
        <div className="section-title"><p className="eyebrow">Cara kami bekerja</p><h2>Dibahas dulu, baru dikerjakan.</h2></div>
        <div className="timeline-grid">
          {milestones.map(([title, copy], index) => (
            <article className="workflow-card" key={title}><strong>{String(index + 1).padStart(2, "0")}</strong><h3>{title}</h3><p>{copy}</p></article>
          ))}
        </div>
      </section>

      <section className="experts-section">
        <div className="section-title split">
          <div><p className="eyebrow">Tim kami</p><h2>Tim yang membantu Anda.</h2></div>
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
        <div><p className="eyebrow">Ada yang ingin ditanyakan?</p><h2>Kami siap mendengarkan.</h2></div>
        <div className="hero-actions">
          <a className="button primary" href={whatsappUrl} target="_blank" rel="noreferrer">Chat di WhatsApp</a>
          <Link className="button ghost" href="/services">Lihat layanan</Link>
        </div>
      </section>
    </main>
  );
}
