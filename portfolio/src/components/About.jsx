import { skills } from '../data/projects';
import { TechBadge } from './TechBadge';

export function About() {
  return (
    <section id="about" className="about" aria-labelledby="about-title">
      <div className="wrap about-grid">
        <div className="about-content">
          <h2 id="about-title">About me</h2>
          <p>I study Computer Science at Michael Okpara University of Agriculture, Umudike.</p>
          <p>Since March I&apos;ve been doing my industrial training at Abia Tech Hub in Umuahia, where I learned frontend and backend development and shipped FarmRoute.</p>
          <p>I&apos;m now moving to React and building projects that solve local problems and could grow into real products.</p>
        </div>
        <div className="about-panel">
          <h3>What I work with</h3>
          <p>The tools I use to ship.</p>
          <ul className="skills-list">
            {skills.map((skill, i) => (
              <li key={i}><TechBadge name={skill} /></li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
