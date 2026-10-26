import Link from "next/link";
import {
  clientSegments, experts, faqs, highlights, insights, logoPath,
  packages, services, values, whatsappUrl, workflowSteps,
} from "./content";

export default function Home() {
  return (
    <main>
      <section className="hero" id="home">
        <div className="hero-copy">
          <img className="hero-logo" src={logoPath} alt="byConsultax" width={2172} height={724} />
          <p className="eyebrow">Konsultan pajak untuk Anda dan usaha Anda</p>
          <h1>Soal pajak, kita urus bersama.</h1>
          <p>
            Dari pertanyaan pertama sampai laporan selesai, kami bantu Anda
            mengurus pajak pribadi, pajak usaha, dan pembukuan.
          </p>
          <div className="hero-actions">
            <a className="button primary" href={whatsappUrl} target="_blank" rel="noreferrer">Tanya lewat WhatsApp</a>
            <Link className="button ghost" href="/services">Lihat layanan</Link>
          </div>
        </div>
        <figure className="editorial-photo hero-editorial">
          <img src="/images/pembukuan-usaha.png" alt="Kalkulator, bukti transaksi, dan buku catatan keuangan di meja kerja" width={1536} height={1024} fetchPriority="high" />
          <figcaption>Mulai dari catatan usaha yang Anda punya.</figcaption>
        </figure>
      </section>

      <section className="highlight-strip" aria-label="Bantuan dari byConsultax">
        {highlights.map(([title, copy]) => (
          <div key={title}><strong>{title}</strong><p>{copy}</p></div>
        ))}
      </section>

      <section className="audience-section">
        <div className="section-title compact">
          <p className="eyebrow">Siapa yang kami bantu</p>
          <h2>Untuk yang bekerja sendiri, sampai yang punya tim.</h2>
        </div>
        <div className="audience-grid">
          {clientSegments.map((item) => (
            <article className="audience-card" key={item.title}>
              <h3>{item.title}</h3><p>{item.copy}</p>
              <div>{item.tags.map((tag) => <span key={tag}>{tag}</span>)}</div>
            </article>
          ))}
        </div>
      </section>

      <section className="about-section" id="about">
        <div className="section-title split">
          <div><p className="eyebrow">Tentang byConsultax</p><h2>Ada yang bisa Anda tanya dan ajak diskusi.</h2></div>
          <Link className="text-link" href="/about-us">Kenalan dengan kami</Link>
        </div>
        <div className="about-grid">
          <div className="about-story">
            <p>Tidak harus paham istilah pajak untuk mulai konsultasi. Ceritakan saja kondisi Anda, termasuk kalau ada laporan atau dokumen yang belum lengkap.</p>
            <p>Kami bantu mengecek apa yang perlu diurus, menjelaskan perhitungannya, dan menyiapkan laporan bersama Anda.</p>
          </div>
          <div className="value-grid compact-grid">
            {values.map((item, index) => (
              <article className="value-card" key={item.title}>
                <span>{String(index + 1).padStart(2, "0")}</span><h3>{item.title}</h3><p>{item.copy}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="services-section" id="services">
        <div className="section-title split">
          <div><p className="eyebrow">Layanan</p><h2>Apa yang sedang Anda butuhkan?</h2></div>
          <Link className="text-link" href="/services">Semua layanan</Link>
        </div>
        <div className="service-card-grid">
          {services.map((service, index) => (
            <Link className="service-card" href={`/services/${service.slug}`} key={service.slug}>
              <strong>{String(index + 1).padStart(2, "0")}</strong>
              <h3>{service.title}</h3><p>{service.copy}</p>
              <span className="card-link">Tentang layanan ini</span>
            </Link>
          ))}
        </div>
      </section>

      <section className="packages-section">
        <div className="section-title split">
          <div><p className="eyebrow">Pilihan bantuan</p><h2>Sekali konsultasi atau dibantu setiap bulan.</h2></div>
          <a className="text-link" href={whatsappUrl} target="_blank" rel="noreferrer">Tanyakan paketnya</a>
        </div>
        <div className="package-grid">
          {packages.map((item) => (
            <article className="package-card" key={item.name}>
              <span>{item.label}</span><h3>{item.name}</h3><p>{item.copy}</p>
              <ul>{item.includes.map((include) => <li key={include}>{include}</li>)}</ul>
            </article>
          ))}
        </div>
      </section>

      <section className="workflow-section">
        <div className="section-title compact"><p className="eyebrow">Cara kerja</p><h2>Mulainya dari obrolan singkat.</h2></div>
        <div className="workflow-strip">
          {workflowSteps.map(([title, copy], index) => (
            <article className="workflow-step" key={title}>
              <strong>{String(index + 1).padStart(2, "0")}</strong><h3>{title}</h3><p>{copy}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="experts-section" id="experts">
        <div className="section-title split">
          <div><p className="eyebrow">Tim kami</p><h2>Kenalan dengan tim byConsultax.</h2></div>
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

      <section className="insights-section" id="insight">
        <div className="section-title compact"><p className="eyebrow">Bahan obrolan</p><h2>Pertanyaan seperti ini juga boleh.</h2></div>
        <div className="insight-grid">
          {insights.map((item) => (
            <article className="insight-card" key={item.title}>
              <span>{item.category}</span><h3>{item.title}</h3>
              <a href={whatsappUrl} target="_blank" rel="noreferrer">Tanyakan ke kami</a>
            </article>
          ))}
        </div>
      </section>

      <section className="faq-section">
        <div className="section-title compact"><p className="eyebrow">Tanya jawab</p><h2>Sebelum mulai.</h2></div>
        <div className="faq-grid">
          {faqs.map((item) => (
            <article className="faq-card" key={item.question}><h3>{item.question}</h3><p>{item.answer}</p></article>
          ))}
        </div>
      </section>

      <section className="cta-section" id="contact">
        <div>
          <p className="eyebrow">Hubungi kami</p><h2>Ceritakan dulu kebutuhan Anda.</h2>
          <p>Belum tahu harus mulai dari mana? Kirim pesan saja. Kami bantu cari tahu layanan yang sesuai.</p>
          <div className="contact-list">
            <a href="mailto:hello@byconsultax.id">hello@byconsultax.id</a>
            <a href={whatsappUrl} target="_blank" rel="noreferrer">WhatsApp: +62 857-0326-4750</a>
            <span>Jakarta, Indonesia</span>
          </div>
        </div>
        <div className="contact-start">
          <h3>Mau bahas apa?</h3>
          <p>Cukup sampaikan jenis usaha atau pekerjaan Anda dan pertanyaan yang ingin dibahas. Dokumen bisa menyusul setelah kita tahu kebutuhannya.</p>
          <a className="button primary" href={whatsappUrl} target="_blank" rel="noreferrer">Mulai chat di WhatsApp</a>
        </div>
      </section>
    </main>
  );
}
