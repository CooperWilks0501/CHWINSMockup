import { useState, type FormEvent } from "react";

type Props = {
  heading?: string;
  showSubject?: boolean;
};

export function QuoteForm({ heading = "Request a Free Quote", showSubject = false }: Props) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [sent, setSent] = useState(false);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    // Mockup-only: this just shows the success state.
    // Wire to a real form handler (Resend, Formspree, etc.) before launch.
    setSent(true);
  }

  if (sent) {
    return (
      <div className="quote-form">
        <h3>{heading}</h3>
        <div className="quote-form__success">
          Thanks, {name || "we got it"}. Someone from our team will be in touch shortly at {email || "the email you provided"}.
        </div>
        <button
          type="button"
          className="btn btn--outline quote-form__submit"
          onClick={() => {
            setSent(false);
            setName("");
            setEmail("");
            setPhone("");
            setSubject("");
            setMessage("");
          }}
        >
          Send Another
        </button>
      </div>
    );
  }

  return (
    <form className="quote-form" onSubmit={handleSubmit}>
      <h3>{heading}</h3>

      <label>
        <span>Name*</span>
        <input
          type="text"
          required
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Your full name"
        />
      </label>

      <label>
        <span>Email*</span>
        <input
          type="email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="you@example.com"
        />
      </label>

      <label>
        <span>Phone*</span>
        <input
          type="tel"
          required
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          placeholder="(555) 555-5555"
        />
      </label>

      {showSubject && (
        <label>
          <span>Subject</span>
          <input
            type="text"
            value={subject}
            onChange={(e) => setSubject(e.target.value)}
            placeholder="What can we help with?"
          />
        </label>
      )}

      <label>
        <span>How can we help?</span>
        <textarea
          rows={4}
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Tell us a bit about what coverage you're looking for."
        />
      </label>

      <button type="submit" className="btn btn--solid quote-form__submit">
        Submit
      </button>
    </form>
  );
}
