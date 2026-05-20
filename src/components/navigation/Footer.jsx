import { Link } from 'react-router-dom'

const footerGroups = [
  {
    title: 'Explorar',
    items: [
      { label: 'Home', path: '/' },
      { label: 'La Bodega', path: '/bodega' },
      { label: 'Nuestros Vinos', path: '/vinos' },
      { label: 'Experiencias', path: '/experiencias' },
      { label: 'Contacto', path: '/contacto' },
    ],
  },
  {
    title: 'Politicas',
    items: [
      { label: 'Terminos y condiciones', path: '#' },
      { label: 'Privacidad', path: '#' },
      { label: 'Sustentabilidad', path: '#' },
    ],
  },
]

function Footer() {
  return (
    <footer className="bg-[#120d0d] text-[#e0d1d1]">
      <div className="mx-auto grid max-w-7xl gap-10 px-5 py-16 md:grid-cols-[1.6fr_1fr_1fr_1fr] lg:px-8">
        <div>
          <p className="text-lg font-semibold uppercase tracking-wide text-white">
            Carmine Granata
          </p>
          <p className="mt-4 max-w-xs text-sm leading-6 text-[#e0d1d1]/70">
            Bodega boutique. El cuidado en la tierra habla en cada botella.
          </p>
        </div>

        {footerGroups.map((group) => (
          <FooterColumn key={group.title} title={group.title} items={group.items} />
        ))}

        <div>
          <h2 className="text-xs font-semibold uppercase tracking-[0.16em] text-white">
            Contacto
          </h2>
          <p className="mt-4 text-sm text-[#e0d1d1]/70">Mendoza, Argentina</p>
          <div className="mt-5 flex gap-3 text-sm text-white">
            <span>IG</span>
            <span>FB</span>
            <span>YT</span>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-7xl flex-col gap-3 px-5 py-6 text-[11px] uppercase tracking-[0.14em] text-[#e0d1d1]/45 md:flex-row md:items-center md:justify-between lg:px-8">
          <p>© 2026 Bodega Carmine Granata. Todos los derechos reservados.</p>
          <p>Pasion al vino desde 1920.</p>
        </div>
      </div>
    </footer>
  )
}

function FooterColumn({ title, items }) {
  return (
    <div>
      <h2 className="text-xs font-semibold uppercase tracking-[0.16em] text-white">
        {title}
      </h2>
      <ul className="mt-4 space-y-3 text-sm text-[#e0d1d1]/70">
        {items.map((item) => (
          <li key={item.label}>
            <Link className="transition hover:text-white" to={item.path}>
              {item.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Footer
