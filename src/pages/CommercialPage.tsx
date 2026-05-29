import { Link } from "react-router-dom";
import { commercialCopy, commercialOfferings } from "../data/siteContent";

export function CommercialPage() {
  return (
    <>
      <section className="page-hero">
        <div className="container">
          <h1>Commercial Insurance</h1>
          <p>Customized coverage for the business you&rsquo;ve built &mdash; from one truck to a full operation.</p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="about-content">
            {commercialCopy.map((paragraph, i) => (
              <p key={i}>{paragraph}</p>
            ))}
          </div>
        </div>
      </section>

      <section className="section section--tint">
        <div className="container">
          <div className="section-heading">
            <h2>Business Coverage Options</h2>
            <span className="section-heading__rule" />
            <p className="section-heading__sub">
              A snapshot of the commercial lines we write. Don&rsquo;t see what you need? Call us &mdash; we&rsquo;ll find it.
            </p>
          </div>

          <div className="service-grid">
            {commercialOfferings.map((item) => (
              <article key={item.key} className="service-card">
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="cta-strip">
        <div className="cta-strip__inner">
          <div>
            <h2>Protect your business.</h2>
            <p>Call for a free commercial quote tailored to your operation.</p>
          </div>
          <Link to="/contact" className="btn btn--primary">
            <strong>FREE</strong>&nbsp;QUOTE
          </Link>
        </div>
      </section>
    </>
  );
}
