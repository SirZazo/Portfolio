const skillGroups = [
  {
    title: 'Lenguajes',
    items: ['Python', 'C', 'C++', 'Java', 'SQL', 'Shell Script'],
  },
  {
    title: 'Herramientas',
    items: ['Pandas', 'Pymoo', 'Git', 'Linux', 'Jupyter', 'Jenkins'],
  },
  {
    title: 'Áreas',
    items: [
      'Optimización multiobjetivo',
      'Algoritmos genéticos',
      'Análisis de datos',
      'Sistemas',
      'Arquitectura de computadores',
    ],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="section container">
      <div className="section-heading">
        <p className="eyebrow">Stack</p>
        <h2>Tecnologías y áreas que dominas</h2>
      </div>

      <div className="grid cards-3">
        {skillGroups.map((group) => (
          <article key={group.title} className="card">
            <h3>{group.title}</h3>
            <div className="tag-group">
              {group.items.map((item) => (
                <span key={item} className="tag">
                  {item}
                </span>
              ))}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
