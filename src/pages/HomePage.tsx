import { Link } from "react-router-dom";
import { QuoteForm } from "../components/common/QuoteForm";
import {
  aboutCopy,
  businessInfo,
  personalInsurance,
  testimonials,
} from "../data/siteContent";

export function HomePage() {
  return (
    <>
      {/* HERO */}
      <section className="hero">
        <div className="hero__inner">
          <div className="hero__copy">
            <h1>
              We&rsquo;ve Got You
              <br />
              Covered
            </h1>
            <p>
              At {businessInfo.name}, we are focused on providing excellent services with the highest levels of customer satisfaction.
            </p>
            <Link to="/contact" className="btn btn--primary">
              <strong>CONTACT</strong>&nbsp;US
            </Link>
          </div>

          <div className="hero__visual">
            <div className="hero__person-placeholder">
              <span className="hero__person-name">Christa Wilks</span>
              <span className="hero__person-role">Agency Owner</span>
            </div>
          </div>
        </div>
      </section>

      {/* WELCOME INTRO */}
      <section className="section">
        <div className="container">
          <div className="intro-two-col">
            <div>
              <span className="intro-two-col__sub">Insurance Agency in South Carolina</span>
              <h2>Welcome to {businessInfo.name}</h2>
              <p>
                At {businessInfo.name}, we are focused on providing excellent services with the highest levels of customer satisfaction &mdash; we will do everything we can to exceed your expectations.
              </p>
              <p>{aboutCopy[0]}</p>
              <Link to="/about" className="btn btn--outline" style={{ marginTop: "1rem" }}>
                Learn More
              </Link>
            </div>

            <div>
              <QuoteForm heading="Get a Free Quote" />
            </div>
          </div>
        </div>
      </section>

      {/* PERSONAL INSURANCE PREVIEW */}
      <section className="section section--tint">
        <div className="container">
          <div className="section-heading">
            <h2>Personal Insurance</h2>
            <span className="section-heading__rule" />
            <p className="section-heading__sub">
              From auto and home to life and flood, we cover what matters most to you and your family.
            </p>
          </div>

          <div className="service-grid">
            {personalInsurance.slice(0, 4).map((item) => (
              <article key={item.key} className="service-card">
                <h3>{item.title}</h3>
                <p>{item.description.split(". ").slice(0, 2).join(". ")}.</p>
              </article>
            ))}
          </div>

          <div style={{ textAlign: "center", marginTop: "2.5rem" }}>
            <Link to="/personal-insurance" className="btn btn--solid">
              View All Personal Coverage
            </Link>
          </div>
        </div>
      </section>

      {/* COMMERCIAL TEASER */}
      <section className="section">
        <div className="container">
          <div className="section-heading">
            <h2>Commercial Insurance</h2>
            <span className="section-heading__rule" />
            <p className="section-heading__sub">
              A wide variety of commercial insurance options for businesses small and large &mdash; customized to fit what you&rsquo;ve built.
            </p>
          </div>

          <div style={{ textAlign: "center" }}>
            <Link to="/commercial" className="btn btn--outline">
              See Business Coverage
            </Link>
          </div>
        </div>
      </section>

      {/* TESTIMONIAL PREVIEW */}
      <section className="section section--tint">
        <div className="container">
          <div className="section-heading">
            <h2>What Our Clients Say</h2>
            <span className="section-heading__rule" />
          </div>

          <div className="testimonial-grid">
            {testimonials.map((t) => (
              <article key={t.name} className="testimonial">
                <div className="testimonial__stars" aria-label="5 stars">★★★★★</div>
                <p className="testimonial__quote">
                  &ldquo;{t.quote.length > 180 ? `${t.quote.slice(0, 180)}…` : t.quote}&rdquo;
                </p>
                <div className="testimonial__meta">
                  <span className="testimonial__name">{t.name}</span>
                  <span className="testimonial__source">{t.source} &middot; {t.yearsAgo}</span>
                </div>
              </article>
            ))}
          </div>

          <div style={{ textAlign: "center", marginTop: "2.5rem" }}>
            <Link to="/testimonials" className="btn btn--outline">
              Read More Reviews
            </Link>
          </div>
        </div>
      </section>

      {/* CTA STRIP */}
      <section className="cta-strip">
        <div className="cta-strip__inner">
          <div>
            <h2>Ready to save on insurance?</h2>
            <p>Get a free, no-obligation quote from our team today.</p>
          </div>
          <Link to="/contact" className="btn btn--primary">
            <strong>FREE</strong>&nbsp;QUOTE
          </Link>
        </div>
      </section>
    </>
  );
}
