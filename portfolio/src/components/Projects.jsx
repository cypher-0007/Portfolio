import { useState } from 'react';
import { projects } from '../data/projects';
import { ProjectCard } from './ProjectCard';
import { Modal } from './Modal';

export function Projects() {
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <section id="work" className="projects" aria-labelledby="projects-title">
      <div className="wrap">
        <header className="section-heading">
          <div><p className="section-kicker">Selected work / 2024—26</p><h2 id="projects-title">Projects</h2></div>
          <p className="sec-lead">Each one starts with a real problem I&apos;ve seen around me.</p>
        </header>
        <div className="projects-grid" role="list">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} onClick={setSelectedProject} />
          ))}
        </div>
      </div>
      <Modal project={selectedProject} onClose={() => setSelectedProject(null)} />
    </section>
  );
}
