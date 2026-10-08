export function Header() {
  return (
    <header className="header">
      <div className="wrap">
        <nav className="nav" aria-label="Main navigation">
          <a href="#top" className="mark" aria-label="Isaac's portfolio home">isaac.dev<span aria-hidden="true">/</span></a>
          <div className="nav-links">
            <a href="#top">Home</a><a href="#about">About</a><a href="#work">Portfolio</a><a href="#contact">Contact</a>
          </div>
        </nav>
      </div>
    </header>
  );
}
