import { useEffect, useRef } from 'react';

export function Modal({ project, onClose }) {
  const closeRef = useRef(null);

  useEffect(() => {
    if (!project) return undefined;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    closeRef.current?.focus();
    function onKeyDown(event) {
      if (event.key === 'Escape') onClose();
    }
    document.addEventListener('keydown', onKeyDown);
    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener('keydown', onKeyDown);
    };
  }, [project, onClose]);

  if (!project) return null;
  const hasLiveSite = project.url && project.statusType === 'live';
  const canEmbed = hasLiveSite && project.embeddable !== false;

  return (
    <div className="modal-overlay" onMouseDown={(event) => event.target === event.currentTarget && onClose()}>
      <section className="modal-content" role="dialog" aria-modal="true" aria-labelledby="modal-title">
        <button ref={closeRef} className="modal-close" onClick={onClose} aria-label="Close preview">x</button>
        <h2 className="visually-hidden" id="modal-title">{project.name} preview</h2>
        {canEmbed ? (
          <iframe className="modal-iframe" src={project.url} title={`${project.name} live site preview`} loading="lazy" allow="fullscreen" referrerPolicy="strict-origin-when-cross-origin" />
        ) : hasLiveSite ? (
          <div className="preview-blocked">
            <p className="blocked-kicker">Live preview unavailable</p>
            <h3>{project.name} blocks embedded previews</h3>
            <p>The site sends a browser security rule that prevents it from opening inside this window. Use the button below to view the live site.</p>
          </div>
        ) : (
          <div className="preview-unavailable">
            <span className="preview-mark" aria-hidden="true">{project.name.slice(0, 1)}</span>
            <h3>{project.name}</h3>
            <p>{project.description}</p>
            <ul className="preview-tech">{project.tech.map((technology) => <li key={technology}>{technology}</li>)}</ul>
            <span className="preview-status">{project.status}</span>
          </div>
        )}
        {hasLiveSite && <a className="floating-live-link" href={project.url} target="_blank" rel="noopener noreferrer">Visit live website</a>}
      </section>
    </div>
  );
}
