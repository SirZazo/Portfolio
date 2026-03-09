const links = [
  { href: '#about', label: 'Sobre mí' },
  { href: '#projects', label: 'Proyectos' },
  { href: '#experience', label: 'Experiencia' },
  { href: '#skills', label: 'Stack' },
  { href: '#contact', label: 'Contacto' },
];

export default function Navbar() {
  return (
    <header className="site-header">
      <nav className="container nav">
        <a href="#top" className="brand">
          AAZ
        </a>

        <div className="nav-links">
          {links.map((link) => (
            <a key={link.href} href={link.href}>
              {link.label}
            </a>
          ))}
        </div>
      </nav>
    </header>
  );
}
