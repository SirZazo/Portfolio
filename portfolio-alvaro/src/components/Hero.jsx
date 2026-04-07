import profile from '../assets/profile.png';

export default function Hero() {
  return (
    <section id="top" className="hero section hero-grid container">
      
      <div className="hero-content">
        <p className="eyebrow">Portfolio personal</p>

        <h1>
          Álvaro Álvarez Zazo
          <span>Computer Engineer | Python & Optimization</span>
        </h1>

        <p className="lead">
          Ingeniero informático con foco en Python, optimización multiobjetivo,
          sistemas y análisis técnico de datos.
        </p>

        <div className="cta-group">
          <a className="button primary" href="#projects">
            Ver proyectos
          </a>

          <a className="button secondary" href="#contact">
            Contactar
          </a>
        </div>
      </div>

      <aside className="hero-side">
        <img
          src={profile}
          alt="Álvaro Álvarez Zazo"
          className="hero-photo"
        />

        <div className="hero-card card">
          <p className="mini-title">Perfil</p>

          <ul>
            <li>Python</li>
            <li>Optimización multiobjetivo</li>
            <li>Data / Software</li>
            <li>Linux & sistemas</li>
          </ul>
        </div>
      </aside>

    </section>
  );
}