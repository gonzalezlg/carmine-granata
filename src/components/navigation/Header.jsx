import { useState } from 'react'
import { NavLink } from 'react-router-dom'

const navigationItems = [
  { label: 'Home', path: '/' },
  { label: 'La Bodega', path: '/bodega' },
  { label: 'Nuestros Vinos', path: '/vinos' },
  { label: 'Experiencias', path: '/experiencias' },
  { label: 'Contacto', path: '/contacto' },
]

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="absolute inset-x-0 top-0 z-50 border-b border-white/10 bg-[#120d0d]/90 text-[#e0d1d1] backdrop-blur-sm">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 lg:px-8">
        <NavLink
          to="/"
          className="text-lg font-semibold uppercase tracking-wide text-[#f0b8b8]"
          onClick={() => setIsMenuOpen(false)}
        >
          Carmine Granata
        </NavLink>

        <nav className="hidden items-center gap-7 text-[11px] font-semibold uppercase tracking-[0.12em] lg:flex">
          {navigationItems.map((item) => (
            <NavLink
              key={item.label}
              to={item.path}
              className={({ isActive }) =>
                isActive
                  ? 'border-b border-[#f0b8b8] pb-1 text-white'
                  : 'pb-1 text-[#e0d1d1]/80 transition hover:text-white'
              }
            >
              {item.label}
            </NavLink>
          ))}
        </nav>

        <button
          type="button"
          className="flex h-8 w-8 flex-col items-center justify-center gap-1.5 lg:hidden"
          aria-label="Abrir navegacion"
          aria-expanded={isMenuOpen}
          onClick={() => setIsMenuOpen((current) => !current)}
        >
          <span className="h-px w-4 bg-[#e0d1d1]" />
          <span className="h-px w-4 bg-[#e0d1d1]" />
        </button>
      </div>

      {isMenuOpen ? (
        <nav className="border-t border-white/10 bg-[#120d0d] px-5 py-5 lg:hidden">
          <div className="flex flex-col gap-4 text-xs font-semibold uppercase tracking-[0.14em]">
            {navigationItems.map((item) => (
              <NavLink
                key={item.label}
                to={item.path}
                className="text-[#e0d1d1]/85"
                onClick={() => setIsMenuOpen(false)}
              >
                {item.label}
              </NavLink>
            ))}
          </div>
        </nav>
      ) : null}
    </header>
  )
}

export default Header
