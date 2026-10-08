export function Contact() {
  return (
    <section id="contact" className="contact" aria-labelledby="contact-title">
      <div className="wrap">
        <h2 id="contact-title">Need a website or web app?</h2>
        <p className="sec-lead">Tell me what you&apos;re building and I&apos;ll reply with how I can help.</p>
        <a className="contact-email" href="mailto:you@example.com">you@example.com</a>
        <div className="contact-links">
          <a className="btn btn-ghost" href="https://github.com/your-username" target="_blank" rel="noopener noreferrer">GitHub</a>
          <a className="btn btn-ghost" href="https://wa.me/234XXXXXXXXXX" target="_blank" rel="noopener noreferrer">WhatsApp</a>
        </div>
      </div>
    </section>
  );
}