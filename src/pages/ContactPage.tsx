import { QuoteForm } from "../components/common/QuoteForm";
import { businessInfo } from "../data/siteContent";

export function ContactPage() {
  return (
    <>
      <section className="page-hero">
        <div className="container">
          <h1>Contact Us</h1>
          <p>Get a free, no-obligation quote from our team &mdash; usually within one business day.</p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="intro-two-col">
            <div>
              <span className="intro-two-col__sub">Get in Touch</span>
              <h2>Reach Out Anytime</h2>
              <p>
                Whether you&rsquo;re shopping for your first policy or comparing rates on your existing coverage, our team is here to help. We&rsquo;ll look at your situation, ask the right questions, and walk you through your options.
              </p>

              <div style={{ marginTop: "1.5rem", display: "flex", flexDirection: "column", gap: "0.6rem" }}>
                <div>
                  <strong style={{ color: "var(--navy)", display: "block", marginBottom: "0.2rem" }}>Phone</strong>
                  <a href={businessInfo.phoneHref} style={{ fontSize: "1.2rem", fontWeight: 700 }}>{businessInfo.phone}</a>
                </div>
                <div>
                  <strong style={{ color: "var(--navy)", display: "block", marginBottom: "0.2rem" }}>Email</strong>
                  <a href={`mailto:${businessInfo.email}`}>{businessInfo.email}</a>
                </div>
                <div>
                  <strong style={{ color: "var(--navy)", display: "block", marginBottom: "0.2rem" }}>Office</strong>
                  <span style={{ color: "var(--text-soft)" }}>
                    {businessInfo.addressLine1}
                    <br />
                    {businessInfo.addressLine2}
                  </span>
                </div>
              </div>
            </div>

            <div>
              <QuoteForm heading="Send Us a Message" showSubject />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
