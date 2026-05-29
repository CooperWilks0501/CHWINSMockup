import { Link } from "react-router-dom";
import { personalInsurance } from "../data/siteContent";

export function PersonalInsurancePage() {
  return (
    <>
      <section className="page-hero">
        <div className="container">
          <h1>Personal Insurance</h1>
          <p>From your car to your home to your family&rsquo;s future &mdash; we cover what matters most.</p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="service-grid">
            {personalInsurance.map((item) => (
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
            <h2>Not sure what coverage you need?</h2>
            <p>Our team will walk you through it &mdash; no pressure, no jargon.</p>
          </div>
          <Link to="/contact" className="btn btn--primary">
            <strong>FREE</strong>&nbsp;QUOTE
          </Link>
        </div>
      </section>
    </>
  );
}
