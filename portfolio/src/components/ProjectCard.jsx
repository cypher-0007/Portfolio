import { TechBadge } from './TechBadge';

export function ProjectCard({ project, onClick }) {
  const statusClass = project.statusType === 'live' ? 'status-live' : project.statusType === 'hackathon' ? 'status-hackathon' : 'status-progress';

  return (
    <button className="project-card" type="button" onClick={() => onClick(project)} aria-label={`Open ${project.name} project preview`}>
      <span className="project-card-top">
        <span className="project-name">{project.name}</span>
        <span className={`project-status ${statusClass}`}>{project.status}</span>
      </span>
      <span className="project-tech" aria-label="Technology stack" role="list">
        {project.tech.map((technology) => <span role="listitem" key={technology}><TechBadge name={technology} /></span>)}
      </span>
      <span className="project-description">{project.description}</span>
      <span className="project-card-footer"><span className="click-hint">Open project preview</span></span>
    </button>
  );
}
