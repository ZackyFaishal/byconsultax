import Link from "next/link";
import {
  clientSegments,
  experts,
  faqs,
  highlights,
  insights,
  packages,
  professionalImages,
  services,
  taxElements,
  testimonials,
  values,
  whatsappUrl,
  workflowSteps,
} from "./content";

export default function Home() {
  return (
    <main>
      <section className="hero" id="home">
        <div className="hero-copy">
          <img className="hero-logo" src="/logo-byconsultax-transparent.png" alt="byConsultax" />
          <p className="eyebrow">Konsultan pajak yang jadi teman bisnis</p>
          <h1>byConsultax bantu pajak bisnis lebih rapi, ringan, dan terarah.</h1>
          <p>
            Pendampingan konsultasi pajak, tax planning, SPT Tahunan,
            pendampingan pajak bulanan, pembukuan, PPN, PKP, payroll, dan PPh
            21 untuk UMKM, orang pribadi, freelancer, CV, dan PT.
          </p>
          <div className="hero-actions">
            <a className="button primary" href={whatsappUrl} target="_blank" rel="noreferrer">
              Konsultasi via WhatsApp
            </a>
            <Link className="button ghost" href="/services">
              Jelajahi layanan
            </Link>
          </div>
        </div>

        <div className="hero-visual" aria-label="Ilustrasi konsultasi pajak byConsultax">
          <div className="hero-consult-card float-card">
            <div className="consult-photo">
              <img
                src="https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=1100&q=80"
                alt="Konsultan pajak sedang berdiskusi dengan klien"
              />
            </div>
            <div className="consult-panel">
              <p className="eyebrow">Tax readiness</p>
              <h3>Dokumen pajak lebih siap sebelum tenggat.</h3>
              <div className="consult-checklist">
                <span>SPT Tahunan</span>
                <strong>Checklist dokumen</strong>
                <span>PPN & e-Faktur</span>
                <strong>Rekap bulanan</strong>
                <span>PPh 21</span>
                <strong>Payroll review</strong>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="highlight-strip" aria-label="byConsultax highlights">
        {highlights.map(([value, copy]) => (
          <div key={value}>
            <strong>{value}</strong>
            <p>{copy}</p>
          </div>
        ))}
      </section>

      <section className="audience-section">
        <div className="section-title split">
          <div>
            <p className="eyebrow">Who we help</p>
            <h2>Untuk pengusaha yang ingin pajaknya rapi tanpa dibuat rumit.</h2>
          </div>
          <p className="section-note">
            byConsultax dirancang untuk kebutuhan wajib pajak modern: dari
            bisnis kecil sampai badan usaha yang mulai butuh sistem administrasi.
          </p>
        </div>
        <div className="audience-grid">
          {clientSegments.map((item) => (
            <article className="audience-card" key={item.title}>
              <h3>{item.title}</h3>
              <p>{item.copy}</p>
              <div>
                {item.tags.map((tag) => (
                  <span key={tag}>{tag}</span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="about-section" id="about">
        <div className="section-title split">
          <div>
            <p className="eyebrow">About Us</p>
            <h2>Firma konsultasi yang menghubungkan regulasi, angka, dan strategi bisnis.</h2>
          </div>
          <Link className="text-link" href="/about-us">
            Baca profil byConsultax
          </Link>
        </div>
        <div className="about-grid">
          <div className="about-story">
            <p>
              byConsultax hadir untuk membantu wajib pajak orang pribadi,
              freelancer, UMKM, CV, dan PT memahami kewajiban, mengurangi
              risiko administrasi, dan membangun proses pajak yang lebih tertib.
            </p>
            <p>
              Pendekatan kami menggabungkan konsultasi, tax planning, pelaporan,
              pembukuan, PPN, payroll, dan edukasi pajak agar klien bisa
              mengambil keputusan dengan lebih percaya diri.
            </p>
          </div>
          <div className="about-media-stack">
            <div className="about-photo-card">
              <img
                src="https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=1200&q=80"
                alt="Konsultan pajak berdiskusi dengan klien"
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

      <section className="gallery-section">
        <div className="section-title split">
          <div>
            <p className="eyebrow">Professional tax support</p>
            <h2>Visual kerja yang rapi, modern, dan terpercaya.</h2>
          </div>
          <p className="section-note">
            Gambar profesional untuk memperkuat kesan konsultan pajak yang
            teliti, tenang, dan siap mendampingi klien.
          </p>
        </div>
        <div className="consultant-gallery">
          {professionalImages.map((item) => (
            <article className="gallery-card" key={item.title}>
              <img src={item.image} alt={item.title} />
              <div>
                <h3>{item.title}</h3>
                <p>{item.copy}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="tax-elements-section">
        <div className="section-title split">
          <div>
            <p className="eyebrow">Tax elements</p>
            <h2>Elemen pajak yang sering kami bantu rapikan.</h2>
          </div>
          <p className="section-note">
            Dari identitas pajak sampai bukti potong, seluruh elemen administrasi
            dibuat lebih mudah ditelusuri.
          </p>
        </div>
        <div className="tax-chip-grid">
          {taxElements.map((item) => (
            <span key={item}>{item}</span>
          ))}
        </div>
      </section>

      <section className="services-section" id="services">
        <div className="section-title split">
          <div>
            <p className="eyebrow">Our services</p>
            <h2>Layanan pajak lengkap untuk kebutuhan harian bisnis.</h2>
          </div>
          <Link className="text-link" href="/services">
            Lihat semua layanan
          </Link>
        </div>
        <div className="service-marquee" aria-hidden="true">
          <div>
            <span>Tax</span>
            <span>SPT</span>
            <span>Tax Planning</span>
            <span>PPN</span>
            <span>Accounting</span>
            <span>PPh 21</span>
          </div>
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
              <span className="card-link">Lihat detail layanan</span>
            </Link>
          ))}
        </div>
      </section>

      <section className="feature-band">
        <div className="feature-photo" aria-hidden="true">
          <img
            src="https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&w=1200&q=80"
            alt=""
          />
        </div>
        <div className="feature-copy">
          <p className="eyebrow">Briefing awal</p>
          <h2>Layanan disesuaikan dengan kemampuan dan kebutuhan byConsultax.</h2>
          <p>
            Fokus website ini adalah konsultasi, perencanaan, pelaporan,
            pendampingan pajak bulanan, pembukuan, PPN, PKP, payroll, dan PPh
            21. Layanan di luar kepatuhan administratif tidak dimasukkan ke
            dalam ruang lingkup.
          </p>
          <a className="button primary" href="#contact">
            Request proposal
          </a>
        </div>
      </section>

      <section className="packages-section">
        <div className="section-title split">
          <div>
            <p className="eyebrow">Service packages</p>
            <h2>Pilih bentuk pendampingan yang paling cocok.</h2>
          </div>
          <a className="text-link" href="#contact">
            Minta rekomendasi paket
          </a>
        </div>
        <div className="package-grid">
          {packages.map((item) => (
            <article className="package-card" key={item.name}>
              <span>{item.label}</span>
              <h3>{item.name}</h3>
              <p>{item.copy}</p>
              <ul>
                {item.includes.map((include) => (
                  <li key={include}>{include}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>

      <section className="workflow-section">
        <div className="section-title compact">
          <p className="eyebrow">How it works</p>
          <h2>Alur kerja yang jelas dari briefing sampai arsip laporan.</h2>
        </div>
        <div className="workflow-strip">
          {workflowSteps.map(([title, copy], index) => (
            <article className="workflow-step" key={title}>
              <strong>{String(index + 1).padStart(2, "0")}</strong>
              <h3>{title}</h3>
              <p>{copy}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="experts-section" id="experts">
        <div className="section-title split">
          <div>
            <p className="eyebrow">Meet our team</p>
            <h2>Tim konsultan untuk isu pajak yang berbeda-beda.</h2>
          </div>
          <a className="text-link" href="#contact">
            Jadwalkan diskusi
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

      <section className="insights-section" id="insight">
        <div className="section-title split">
          <div>
            <p className="eyebrow">Tax education</p>
            <h2>Insight pajak untuk pemilik usaha dan wajib pajak pribadi.</h2>
          </div>
          <a className="text-link" href="#contact">
            Subscribe insight
          </a>
        </div>
        <div className="insight-grid">
          {insights.map((item) => (
            <article className="insight-card" key={item.title}>
              <span>{item.category}</span>
              <h3>{item.title}</h3>
              <p>{item.date}</p>
              <a href="#contact">Read more</a>
            </article>
          ))}
        </div>
      </section>

      <section className="testimonial-section">
        <div className="section-title">
          <p className="eyebrow">Client voice</p>
          <h2>Yang ingin dirasakan klien setelah pajaknya didampingi.</h2>
        </div>
        <div className="testimonial-grid">
          {testimonials.map((item) => (
            <article className="testimonial-card" key={item.name}>
              <p>&quot;{item.quote}&quot;</p>
              <strong>{item.name}</strong>
            </article>
          ))}
        </div>
      </section>

      <section className="faq-section">
        <div className="section-title compact">
          <p className="eyebrow">FAQ</p>
          <h2>Pertanyaan yang sering muncul sebelum mulai konsultasi.</h2>
        </div>
        <div className="faq-grid">
          {faqs.map((item) => (
            <article className="faq-card" key={item.question}>
              <h3>{item.question}</h3>
              <p>{item.answer}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="cta-section" id="contact">
        <div>
          <p className="eyebrow">Contact us</p>
          <h2>Serahkan urusan pajak kepada tim yang siap mendampingi.</h2>
          <p>
            Hubungi byConsultax untuk konsultasi pajak, proposal layanan,
            pelaporan SPT, pendampingan bulanan, pembukuan, PPN, PKP, payroll,
            dan PPh 21.
          </p>
          <div className="contact-list">
            <span>Email: hello@byconsultax.id</span>
            <span>WhatsApp: +62 857-0326-4750</span>
            <span>Jakarta, Indonesia</span>
          </div>
        </div>
        <form className="contact-form">
          <input type="text" placeholder="Nama" aria-label="Nama" />
          <input type="email" placeholder="Email" aria-label="Email" />
          <select aria-label="Kebutuhan" defaultValue="">
            <option value="" disabled>
              Pilih kebutuhan pajak
            </option>
            {services.map((service) => (
              <option key={service.title}>{service.title}</option>
            ))}
          </select>
          <textarea placeholder="Ceritakan kebutuhan Anda" aria-label="Pesan" />
          <button type="button">Kirim permintaan</button>
        </form>
      </section>

      <section className="subscribe-section">
        <div>
          <p className="eyebrow">Stay updated</p>
          <h2>Dapatkan update pajak dan edukasi praktis dari byConsultax.</h2>
        </div>
        <form className="subscribe-form">
          <input type="email" placeholder="Email perusahaan" aria-label="Email perusahaan" />
          <button type="button">Subscribe</button>
        </form>
      </section>
    </main>
  );
}
