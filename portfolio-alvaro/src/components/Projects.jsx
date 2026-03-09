const projects = [
  {
    title: 'Optimización multiobjetivo de residuos',
    description:
      'Modelo en Python para optimizar localización, tamaño y uso de instalaciones mediante algoritmos evolutivos.',
    stack: ['Python', 'Pymoo', 'Pandas', 'Matplotlib'],
  },
  {
    title: 'Sampling de soluciones viables',
    description:
      'Método personalizado para generar individuos válidos desde el inicio, respetando capacidades y cobertura de demanda.',
    stack: ['Python', 'Lógica de restricciones', 'Algoritmos'],
  },
  {
    title: 'Web corporativa de transporte',
    description:
      'Réplica y mejora de interfaz web para rutas y horarios con foco en claridad visual y experiencia de usuario.',
    stack: ['HTML', 'CSS', 'JavaScript', 'Vite'],
  },
];

export default function Projects() {
  return (
    <section id="projects" className="section container">
      <div className="section-heading">
        <p className="eyebrow">Proyectos</p>
        <h2>Lo que mejor habla de ti</h2>
      </div>

      <div className="grid cards-3">
        {projects.map((project) => (
          <article key={project.title} className="card project-card">
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
              <a href="#contact">GitHub</a>
              <a href="#contact">Caso de estudio</a>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
