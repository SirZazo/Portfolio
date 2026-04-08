const projects = [
  {
    title: 'Optimización multiobjetivo de residuos',
    description:
      'Modelo en Python para optimizar localización, tamaño y uso de instalaciones mediante algoritmos evolutivos.',
    stack: ['Python', 'Pymoo', 'Pandas', 'Matplotlib'],
    github:
      'https://github.com/SirZazo/Modelo-de-optimizaci-n-multiobjetivo-para-la-gesti-n-de-residuos',
    status: 'Finalizado',
    statusClass: 'done',
  },
  {
    title: 'Web corporativa de transporte',
    description:
      'Aplicación web full-stack desarrollada con Flutter Web, backend en FastAPI y base de datos PostgreSQL para gestión de rutas y horarios.',
    stack: ['Flutter', 'Dart', 'FastAPI', 'PostgreSQL'],
    github: 'https://github.com/SirZazo/hermanos-alvarez',
    status: 'En desarrollo',
    statusClass: 'progress',
  },
];

export default function Projects() {
  return (
    <section id="projects" className="section container">
      <div className="section-heading">
        <p className="eyebrow">Proyectos</p>
        <h2>En qué estoy trabajando</h2>
      </div>

      <div className="grid cards-3">
        {projects.map((project) => (
          <article key={project.title} className="card project-card">
            
            <span className={`project-status ${project.statusClass}`}>
              {project.status}
            </span>

            <h3>{project.title}</h3>
            <p>{project.description}</p>

            <div className="tag-group">
              {project.stack.map((item) => (
                <span key={item} className="tag">
                  {item}
                </span>
              ))}
            </div>

            <div className="project-links">
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
              >
                GitHub
              </a>
            </div>

          </article>
        ))}
      </div>
    </section>
  );
}