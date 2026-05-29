import { useState, type FormEvent } from "react";
import { testimonials } from "../data/siteContent";

export function TestimonialsPage() {
  const [name, setName] = useState("");
  const [rating, setRating] = useState(5);
  const [review, setReview] = useState("");
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    // Mockup-only: success state. Wire to a real handler before launch
    // (Resend, Formspree, or a Google Reviews redirect).
    setSubmitted(true);
  }

  return (
    <>
      <section className="page-hero">
        <div className="container">
          <h1>Testimonials</h1>
          <p>Real reviews from real customers across South Carolina.</p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="testimonial-grid">
            {testimonials.map((t) => (
              <article key={t.name} className="testimonial">
                <div className="testimonial__stars" aria-label="5 stars">★★★★★</div>
                <p className="testimonial__quote">&ldquo;{t.quote}&rdquo;</p>
                <div className="testimonial__meta">
                  <span className="testimonial__name">{t.name}</span>
                  <span className="testimonial__source">{t.source} &middot; {t.yearsAgo}</span>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section section--tint">
        <div className="container">
          <div className="section-heading">
            <h2>Leave A Review</h2>
            <span className="section-heading__rule" />
            <p className="section-heading__sub">
              Worked with us? We&rsquo;d love to hear about it. Share your experience below.
            </p>
          </div>

          <div style={{ maxWidth: "640px", margin: "0 auto" }}>
            {submitted ? (
              <div className="quote-form">
                <div className="quote-form__success">
                  Thanks, {name || "friend"}! Your review has been received. We appreciate you taking the time to share your experience.
                </div>
                <button
                  type="button"
                  className="btn btn--outline quote-form__submit"
                  onClick={() => {
                    setSubmitted(false);
                    setName("");
                    setRating(5);
                    setReview("");
                  }}
                >
                  Leave Another
                </button>
              </div>
            ) : (
              <form className="quote-form" onSubmit={handleSubmit}>
                <label>
                  <span>Your Name*</span>
                  <input
                    type="text"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Your full name"
                  />
                </label>

                <label>
                  <span>Rating*</span>
                  <select value={rating} onChange={(e) => setRating(Number(e.target.value))}>
                    <option value={5}>★★★★★ — 5 stars</option>
                    <option value={4}>★★★★ — 4 stars</option>
                    <option value={3}>★★★ — 3 stars</option>
                    <option value={2}>★★ — 2 stars</option>
                    <option value={1}>★ — 1 star</option>
                  </select>
                </label>

                <label>
                  <span>Your Review*</span>
                  <textarea
                    required
                    rows={5}
                    value={review}
                    onChange={(e) => setReview(e.target.value)}
                    placeholder="Tell us about your experience working with our team."
                  />
                </label>

                <button type="submit" className="btn btn--solid quote-form__submit">
                  Submit Review
                </button>
              </form>
            )}
          </div>
        </div>
      </section>
    </>
  );
}
