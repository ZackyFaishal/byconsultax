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
      title: "Service Not Found | byConsultax",
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
      <section className="detail-hero">
        <div>
          <div className="breadcrumb">
            <Link href="/">Home</Link>
            <span>/</span>
            <Link href="/services">Services</Link>
          </div>
          <p className="eyebrow">byConsultax Service</p>
          <h1>{service.title}</h1>
          <p>{service.headline}</p>
          <div className="hero-actions">
            <a className="button primary" href={whatsappUrl} target="_blank" rel="noreferrer">
              Konsultasi layanan ini
            </a>
            <Link className="button ghost" href="/services">
              Semua layanan
            </Link>
          </div>
        </div>
        <div className="detail-hero-image">
          <img src={service.image} alt={service.title} />
        </div>
      </section>

      <section className="detail-layout">
        <aside className="detail-panel">
          <p className="eyebrow">Scope</p>
          <h2>Area layanan</h2>
          <ul>
            {service.points.map((point) => (
              <li key={point}>{point}</li>
            ))}
          </ul>
        </aside>

        <div className="detail-main">
          <article>
            <p className="eyebrow">Overview</p>
            <h2>{service.headline}</h2>
            <p>{service.copy}</p>
          </article>

          <article>
            <p className="eyebrow">Deliverables</p>
            <h2>Apa saja yang akan Anda dapatkan?</h2>
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
            <p className="eyebrow">Process</p>
            <h2>Alur kerja layanan</h2>
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
            <p className="eyebrow">Best for</p>
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
            <p className="eyebrow">Other services</p>
            <h2>Layanan byConsultax lainnya</h2>
          </div>
          <Link className="text-link" href="/services">
            Lihat semua
          </Link>
        </div>
        <div className="related-grid">
          {relatedServices.map((item) => (
            <Link className="service-card" href={`/services/${item.slug}`} key={item.slug}>
              <div className="service-image">
                <img src={item.image} alt={item.title} />
              </div>
              <h3>{item.title}</h3>
              <p>{item.copy}</p>
              <span className="card-link">Lihat detail</span>
            </Link>
          ))}
        </div>
      </section>

      <section className="mini-cta">
        <div>
          <p className="eyebrow">Start now</p>
          <h2>Mulai dari konsultasi singkat dengan admin byConsultax.</h2>
        </div>
        <a className="button primary" href={whatsappUrl} target="_blank" rel="noreferrer">
          Chat WhatsApp
        </a>
      </section>
    </main>
  );
}
