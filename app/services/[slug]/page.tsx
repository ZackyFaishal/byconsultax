import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getService, services, whatsappUrl } from "../../content";

type ServicePageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export function generateStaticParams() {
  return services.map((service) => ({
    slug: service.slug,
  }));
}

export async function generateMetadata({ params }: ServicePageProps): Promise<Metadata> {
  const { slug } = await params;
  const service = getService(slug);

  if (!service) {
    return {
      title: "Layanan Tidak Ditemukan | byConsultax",
    };
  }

  return {
    title: `${service.title} | byConsultax`,
    description: service.copy,
  };
}

export default async function ServiceDetailPage({ params }: ServicePageProps) {
  const { slug } = await params;
  const service = getService(slug);

  if (!service) {
    notFound();
  }

  const relatedServices = services
    .filter((item) => item.slug !== service.slug)
    .slice(0, 3);

  return (
    <main>
      <section className="detail-hero detail-hero-text">
        <div>
          <div className="breadcrumb">
            <Link href="/">Beranda</Link>
            <span>/</span>
            <Link href="/services">Layanan</Link>
          </div>
          <p className="eyebrow">Layanan byConsultax</p>
          <h1>{service.title}</h1>
          <p>{service.headline}</p>
          <div className="hero-actions">
            <a className="button primary" href={whatsappUrl} target="_blank" rel="noreferrer">
              Konsultasi layanan
            </a>
            <Link className="button ghost" href="/services">
              Semua layanan
            </Link>
          </div>
        </div>
      </section>

      <section className="detail-layout">
        <aside className="detail-panel">
          <p className="eyebrow">Cakupan</p>
          <h2>Ruang lingkup</h2>
          <ul>
            {service.points.map((point) => (
              <li key={point}>{point}</li>
            ))}
          </ul>
        </aside>

        <div className="detail-main">
          <article>
            <p className="eyebrow">Tentang layanan</p>
            <h2>Penjelasan layanan</h2>
            <p>{service.copy}</p>
          </article>

          <article>
            <p className="eyebrow">Hasil pekerjaan</p>
            <h2>Dokumen dan hasil pekerjaan</h2>
            <div className="detail-list">
              {service.deliverables.map((item) => (
                <div key={item}>
                  <span />
                  <p>{item}</p>
                </div>
              ))}
            </div>
          </article>

          <article>
            <p className="eyebrow">Cara kerja</p>
            <h2>Tahapan pekerjaan</h2>
            <div className="timeline-grid">
              {service.process.map((item, index) => (
                <div className="workflow-card" key={item}>
                  <strong>{String(index + 1).padStart(2, "0")}</strong>
                  <p>{item}</p>
                </div>
              ))}
            </div>
          </article>

          <article>
            <p className="eyebrow">Kebutuhan klien</p>
            <h2>Layanan ini cocok untuk</h2>
            <div className="why-grid">
              {service.suitableFor.map((item) => (
                <div key={item}>{item}</div>
              ))}
            </div>
          </article>
        </div>
      </section>

      <section className="related-section">
        <div className="section-title split">
          <div>
            <p className="eyebrow">Layanan lainnya</p>
            <h2>Layanan terkait</h2>
          </div>
          <Link className="text-link" href="/services">
            Lihat semua
          </Link>
        </div>
        <div className="related-grid">
          {relatedServices.map((item) => (
            <Link className="service-card" href={`/services/${item.slug}`} key={item.slug}>
              <h3>{item.title}</h3>
              <p>{item.copy}</p>
              <span className="card-link">Lihat detail</span>
            </Link>
          ))}
        </div>
      </section>

      <section className="mini-cta">
        <div>
          <p className="eyebrow">Konsultasi layanan</p>
          <h2>Hubungi kami untuk membahas kebutuhan layanan.</h2>
        </div>
        <a className="button primary" href={whatsappUrl} target="_blank" rel="noreferrer">
          Hubungi via WhatsApp
        </a>
      </section>
    </main>
  );
}
