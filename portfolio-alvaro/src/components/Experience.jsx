const experience = [
  'Experiencia en soporte y operaciones técnicas en entorno profesional.',
  'Uso de herramientas como Jenkins, Jira, GitLab, Artifactory, Sonar y Nagios.',
  'Despliegues y tareas administrativas en sistemas Windows y Ubuntu.',
  'Trabajo orientado a incidencias, seguimiento y resolución de problemas.',
];

export default function Experience() {
  return (
    <section id="experience" className="section container">
      <div className="section-heading">
        <p className="eyebrow">Experiencia</p>
        <h2>Entorno real de trabajo técnico</h2>
      </div>

      <article className="card experience-card">
        <div className="experience-header">
          <div>
            <h3>NTT Data</h3>
            <p className="muted">Operaciones técnicas / sistemas</p>
          </div>
          <span className="pill">Experiencia profesional</span>
        </div>

        <ul className="experience-list">
          {experience.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </article>
    </section>
  );
}
