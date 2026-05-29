import { Link } from "react-router-dom";
import { aboutCopy, businessInfo } from "../data/siteContent";

export function AboutPage() {
  return (
    <>
      <section className="page-hero">
        <div className="container">
          <h1>Who We Are</h1>
          <p>{businessInfo.name} &mdash; an independent South Carolina insurance agency since {businessInfo.yearFounded}.</p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="about-content">
            <p>
              At {businessInfo.name}, we are focused on providing excellent services with the highest levels of customer satisfaction &mdash; we will do everything we can to exceed your expectations.
            </p>
            {aboutCopy.map((paragraph, i) => (
              <p key={i}>{paragraph}</p>
            ))}
          </div>

          <div style={{ textAlign: "center", marginTop: "2.5rem" }}>
            <Link to="/contact" className="btn btn--solid">
              <strong>FREE</strong>&nbsp;QUOTE
            </Link>
          </div>
        </div>
      </section>

      <section className="cta-strip">
        <div className="cta-strip__inner">
          <div>
            <h2>Questions about coverage?</h2>
            <p>Give us a call at {businessInfo.phone} or send a message.</p>
          </div>
          <Link to="/contact" className="btn btn--primary">
            <strong>CONTACT</strong>&nbsp;US
          </Link>
        </div>
      </section>
    </>
  );
}
