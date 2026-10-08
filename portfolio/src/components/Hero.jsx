import { TechBadge } from './TechBadge';

export function Hero() {
  return (
    <section id="top" className="hero" aria-labelledby="hero-title">
      <div className="wrap hero-grid">
        <div className="hero-content">
          <p className="eyebrow"><span className="availability-dot" /> Computer Science Student · Umuahia, Nigeria</p>
          <h1 id="hero-title"><span>Full Stack</span><span className="hero-title-muted">Developer</span></h1>
          <p className="hero-subtitle">Isaac Tochukwu M.</p>
          <p className="lead">I build clean, useful web apps for real problems around me—from getting farm goods to market to helping students find a place to live.</p>
          <ul className="hero-tech" aria-label="Core technologies"><li><TechBadge name="JavaScript" /></li><li><TechBadge name="React" /></li><li><TechBadge name="Firebase" /></li></ul>
          <div className="hero-cta">
            <a href="#work" className="hero-link">Explore my work <span aria-hidden="true">↘</span></a>
            <a href="#contact" className="hero-link hero-link-muted">Get in touch <span aria-hidden="true">↗</span></a>
          </div>
        </div>
        <div className="hero-visual" aria-hidden="true">
          <div className="lanyard"><span>ISAAC T. M. · DEVELOPER</span></div>
          <div className="id-card">
            <div className="id-card-top"><span>ITM / 001</span><span>PORTFOLIO</span></div>
            <div className="id-portrait"><span>IT</span><i /></div>
            <div className="id-card-bottom"><strong>ISAAC<br />TOCHUKWU M.</strong><span>FULL STACK DEVELOPER<br />UMUAHIA, NIGERIA</span></div>
          </div>
          <span className="hero-side-note">BUILDING THINGS THAT HELP.</span>
        </div>
      </div>
      <a className="scroll-cue" href="#about">Scroll to explore <span aria-hidden="true">↓</span></a>
    </section>
  );
}
