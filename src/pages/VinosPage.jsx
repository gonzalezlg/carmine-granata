import { useEffect, useState } from 'react'
import NewsletterSection from '../components/ui/NewsletterSection'
import vino1Image from '../assets/nuestrosVinos/vino1.png'
import vino2Image from '../assets/nuestrosVinos/vino2.png'
import vino3Image from '../assets/nuestrosVinos/vino3.png'
import vino4Image from '../assets/nuestrosVinos/vino4.png'
import heroImage from '../assets/nuestrosVinos/vinos-hero.png'

const filters = [
  'Todos',
  'Nicolas Granata',
  'Carmine Granata Alta Gama',
  'Carmine Granata Clasicos',
  'Francisco Granata',
]

const wines = [
  {
    title: 'Malbec Gran Reserva',
    family: 'Nicolas Granata',
    image: vino1Image,
    description:
      'Profundo, elegante y persistente. Una seleccion de parcelas que expresa la identidad de Mendoza.',
    technicalSheet: {
      vintage: '2021',
      varietal: '100% Malbec',
      origin: 'Gualtallary, Valle de Uco, Mendoza',
      altitude: '1.250 msnm',
      aging: '14 meses en barricas de roble frances',
      alcohol: '14.5%',
      serviceTemperature: '16 a 18 C',
      tastingNotes:
        'Color rojo violaceo profundo. Aromas de ciruela madura, mora, violetas y especias dulces. En boca es concentrado, con taninos firmes y un final largo de gran elegancia.',
      pairing:
        'Carnes rojas grilladas, cordero patagonico, pastas rellenas y quesos estacionados.',
    },
  },
  {
    title: 'Cabernet Sauvignon',
    family: 'Carmine Granata Alta Gama',
    image: vino2Image,
    description:
      'Estructura firme, fruta negra y crianza medida para una copa de caracter sereno.',
    technicalSheet: {
      vintage: '2020',
      varietal: '100% Cabernet Sauvignon',
      origin: 'Agrelo, Lujan de Cuyo, Mendoza',
      altitude: '980 msnm',
      aging: '12 meses en barricas de roble frances y americano',
      alcohol: '14.2%',
      serviceTemperature: '16 a 18 C',
      tastingNotes:
        'Rojo rubi intenso. Presenta notas de cassis, pimiento asado, grafito y tabaco suave. Entrada amplia, paladar estructurado y taninos pulidos.',
      pairing:
        'Bife de chorizo, carnes braseadas, risotto de hongos y platos con hierbas aromaticas.',
    },
  },
  {
    title: 'Torrontes del Valle',
    family: 'Francisco Granata',
    image: vino3Image,
    description:
      'Aromatico y luminoso, con frescura de altura y final delicadamente floral.',
    technicalSheet: {
      vintage: '2023',
      varietal: '100% Torrontes',
      origin: 'Cafayate, Valles Calchaquies, Salta',
      altitude: '1.700 msnm',
      aging: 'Sin paso por madera, conservado sobre lias finas',
      alcohol: '13.1%',
      serviceTemperature: '8 a 10 C',
      tastingNotes:
        'Amarillo palido con reflejos verdosos. Nariz floral de jazmin, azahar y piel de citricos. Boca fresca, expresiva y equilibrada, con final aromatico persistente.',
      pairing:
        'Empanadas saltenas, cocina asiatica suave, pescados blancos y ensaladas frescas.',
    },
  },
  {
    title: 'Merlot Seleccion',
    family: 'Carmine Granata Clasicos',
    image: vino4Image,
    description:
      'Textura suave, taninos redondos y una expresion clasica para acompanar la mesa.',
    technicalSheet: {
      vintage: '2022',
      varietal: '100% Merlot',
      origin: 'Maipu, Mendoza',
      altitude: '760 msnm',
      aging: '8 meses en roble frances de segundo uso',
      alcohol: '13.8%',
      serviceTemperature: '15 a 17 C',
      tastingNotes:
        'Rojo granate brillante. Aromas de frutos rojos maduros, chocolate amargo y sutil vainilla. Boca amable, taninos sedosos y final equilibrado.',
      pairing:
        'Pastas con salsas suaves, carnes blancas, vegetales asados y tablas de quesos semiduros.',
    },
  },
]

function VinosPage() {
  const [activeFilter, setActiveFilter] = useState(filters[0])
  const [selectedWine, setSelectedWine] = useState(null)

  const visibleWines =
    activeFilter === 'Todos'
      ? wines
      : wines.filter((wine) => wine.family === activeFilter)

  useEffect(() => {
    function handleKeyDown(event) {
      if (event.key === 'Escape') {
        setSelectedWine(null)
      }
    }

    if (selectedWine) {
      document.addEventListener('keydown', handleKeyDown)
      document.body.style.overflow = 'hidden'
    }

    return () => {
      document.removeEventListener('keydown', handleKeyDown)
      document.body.style.overflow = ''
    }
  }, [selectedWine])

  return (
    <div className="bg-[#120d0d] text-[#ece0df]">
      <VinosHero />
      <FilterBar activeFilter={activeFilter} onFilterChange={setActiveFilter} />
      <WineGallery wines={visibleWines} onWineSelect={setSelectedWine} />
      <NewsletterSection
        title="Unete a nuestra Cofradia"
        description="Recibe acceso exclusivo a lanzamientos limitados y preventas de cosechas historicas."
        placeholder="Tu correo electronico"
        buttonLabel="Suscribirse"
      />
      <WineDetailModal wine={selectedWine} onClose={() => setSelectedWine(null)} />
    </div>
  )
}

function VinosHero() {
  return (
    <section className="relative flex min-h-[560px] items-center justify-center overflow-hidden pt-20 sm:min-h-[620px] lg:min-h-[520px]">
      <img
        src={heroImage}
        alt="Cava de vinos Carmine Granata"
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div className="absolute inset-0 bg-[linear-gradient(180deg,_rgba(18,13,13,0.16)_0%,_rgba(18,13,13,0.58)_50%,_#120d0d_100%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_35%,_rgba(255,180,172,0.08)_0%,_rgba(18,13,13,0.08)_34%,_rgba(0,0,0,0.76)_88%)]" />

      <div className="relative z-10 mx-auto max-w-3xl px-6 text-center">
        <h1 className="font-serif text-5xl font-semibold leading-none text-[#f6ecea] sm:text-7xl lg:text-7xl">
          Nuestros Vinos
        </h1>
        <p className="mx-auto mt-6 max-w-2xl font-serif text-base italic leading-7 text-[#ddc0bd]/88 sm:text-lg sm:leading-8">
          Nacidos en el silencio de los Andes, criados en la oscuridad de
          nuestra cava. Una historia escrita en cada copa.
        </p>
      </div>
    </section>
  )
}

function FilterBar({ activeFilter, onFilterChange }) {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false)

  function handleFilterSelect(filter) {
    onFilterChange(filter)
    setIsDropdownOpen(false)
  }

  return (
    <section className="relative z-40 bg-[#120d0d]/92 py-4 backdrop-blur-xl lg:py-3">
      <div className="mx-auto max-w-7xl overflow-visible px-5 lg:overflow-x-auto lg:px-8 lg:[scrollbar-width:none] lg:[&::-webkit-scrollbar]:hidden">
        <div className="relative mx-auto max-w-sm lg:hidden">
          <button
            type="button"
            className="flex min-h-11 w-full items-center justify-between rounded-[15px] border border-[#7b4d49]/70 bg-[#1b1414]/85 px-5 text-left text-[10px] font-bold uppercase tracking-[0.2em] text-[#ffaba6]"
            aria-expanded={isDropdownOpen}
            onClick={() => setIsDropdownOpen((current) => !current)}
          >
            <span>{activeFilter}</span>
            <span
              aria-hidden="true"
              className={`text-sm leading-none transition ${isDropdownOpen ? 'rotate-180' : ''}`}
            >
              v
            </span>
          </button>

          {isDropdownOpen ? (
            <div className="absolute left-0 right-0 top-[calc(100%+8px)] z-40 overflow-hidden rounded-[15px] border border-[#7b4d49]/70 bg-[#171010] shadow-2xl shadow-black/30">
              {filters.map((filter) => {
                const isActive = filter === activeFilter

                return (
                  <button
                    key={filter}
                    type="button"
                    className={`block min-h-11 w-full px-5 text-left text-[10px] font-bold uppercase tracking-[0.18em] transition ${
                      isActive
                        ? 'bg-[#ffaba6]/10 text-[#ffaba6]'
                        : 'text-[#ddc0bd]/78 hover:bg-[#241817] hover:text-[#ffaba6]'
                    }`}
                    onClick={() => handleFilterSelect(filter)}
                  >
                    {filter}
                  </button>
                )
              })}
            </div>
          ) : null}
        </div>

        <div className="hidden min-w-max gap-4 lg:flex lg:justify-center lg:gap-6">
          {filters.map((filter) => {
            const isActive = filter === activeFilter

            return (
              <button
                key={filter}
                type="button"
                className={`min-h-9 min-w-[140px] border px-5 text-[10px] font-bold uppercase leading-tight tracking-[0.22em] transition sm:min-w-[190px] lg:min-h-7 lg:min-w-0 lg:whitespace-nowrap lg:rounded-[15px] lg:px-5 lg:font-semibold lg:!text-[8px] lg:tracking-[0.12em] ${
                  isActive
                    ? 'border-[#ffaba6] bg-[#ffaba6]/10 text-[#ffaba6]'
                    : 'border-[#7b4d49]/55 text-[#ddc0bd]/76 hover:border-[#ffaba6]/80 hover:text-[#ffaba6]'
                }`}
                onClick={() => onFilterChange(filter)}
              >
                {filter}
              </button>
            )
          })}
        </div>
      </div>
    </section>
  )
}

function WineGallery({ wines, onWineSelect }) {
  return (
    <section className="bg-[#120d0d] px-5 pb-16 pt-0 sm:pb-20 sm:pt-0 lg:px-8 lg:pb-24 lg:pt-0">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-7 sm:grid-cols-2 md:grid-cols-3 md:gap-6 lg:grid-cols-4 lg:gap-6">
          {wines.map((wine) => (
            <WineCard
              key={wine.title}
              wine={wine}
              onSelect={() => onWineSelect(wine)}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

function WineCard({ wine, onSelect }) {
  return (
    <button
      type="button"
      className="group relative min-h-[430px] overflow-hidden border border-white/10 bg-[#1b1414] text-left outline-none transition duration-500 hover:border-[#ffaba6]/60 focus-visible:border-[#ffaba6] focus-visible:ring-2 focus-visible:ring-[#ffaba6]/35 sm:min-h-[470px] md:aspect-[4/5] md:min-h-0 lg:aspect-[3/4]"
      onClick={onSelect}
      aria-label={`Ver ficha tecnica de ${wine.title}`}
    >
      <img
        src={wine.image}
        alt={`${wine.title} de la linea ${wine.family}`}
        className="absolute inset-0 h-full w-full object-cover transition duration-700 group-hover:scale-105"
      />
      <div className="absolute inset-0 bg-[linear-gradient(180deg,_rgba(0,0,0,0.05)_0%,_rgba(0,0,0,0.08)_42%,_rgba(0,0,0,0.82)_100%)]" />
      <div className="absolute inset-x-0 bottom-0 p-7 backdrop-blur-[2px] sm:p-8 md:p-4 lg:p-6">
        <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#ffaba6] md:text-[8px] md:tracking-[0.14em] lg:text-[9px] lg:tracking-[0.16em]">
          {wine.family}
        </p>
        <h2 className="mt-3 font-serif text-3xl font-semibold leading-tight text-[#f6ecea] sm:text-4xl md:text-2xl lg:text-3xl">
          {wine.title}
        </h2>
        <p className="mt-4 max-w-sm text-sm leading-6 text-[#ddc0bd]/0 transition duration-500 group-hover:text-[#ddc0bd]/82 md:mt-3 md:text-[11px] md:leading-5 lg:text-xs lg:leading-5">
          {wine.description}
        </p>
        <span className="mt-5 inline-flex border-b border-[#ffaba6]/60 pb-1 text-[10px] font-semibold uppercase tracking-[0.18em] text-[#ffaba6] transition duration-500 group-hover:border-[#ffaba6] group-hover:text-[#ffd2cf]">
          Ver ficha
        </span>
      </div>
    </button>
  )
}

function WineDetailModal({ wine, onClose }) {
  if (!wine) {
    return null
  }

  const technicalItems = [
    ['varietal', 'Variedad', wine.technicalSheet.varietal],
    ['vintage', 'Cosecha', wine.technicalSheet.vintage],
    ['origin', 'Origen', wine.technicalSheet.origin],
    ['altitude', 'Altitud', wine.technicalSheet.altitude],
    ['aging', 'Crianza', wine.technicalSheet.aging],
    ['alcohol', 'Alcohol', wine.technicalSheet.alcohol],
    ['service', 'Servicio', wine.technicalSheet.serviceTemperature],
  ]

  return (
    <div
      className="fixed inset-0 z-[80] flex items-center justify-center bg-[#080505]/82 px-4 py-5 backdrop-blur-md sm:px-6"
      role="presentation"
      onClick={onClose}
    >
      <article
        className="relative flex max-h-[86vh] w-full max-w-4xl flex-col overflow-hidden border border-[#7b4d49]/45 bg-[#171010] shadow-2xl shadow-black/55 md:h-[86vh]"
        role="dialog"
        aria-modal="true"
        aria-labelledby="wine-modal-title"
        onClick={(event) => event.stopPropagation()}
      >
        <button
          type="button"
          className="absolute right-3 top-3 z-10 border border-[#a58b88]/35 bg-[#120d0d]/72 px-3 py-1.5 text-[9px] font-semibold uppercase tracking-[0.16em] text-[#ece0df] backdrop-blur-md transition hover:border-[#ffaba6] hover:text-[#ffaba6] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#ffaba6]/35 sm:right-4 sm:top-4"
          onClick={onClose}
        >
          Cerrar
        </button>

        <div className="min-h-0 flex-1 overflow-y-auto [scrollbar-color:#7b4d49_#171010] [scrollbar-width:thin] md:overflow-hidden [&::-webkit-scrollbar]:w-2 [&::-webkit-scrollbar-track]:bg-[#171010] [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-thumb]:bg-[#7b4d49]/70 [&::-webkit-scrollbar-thumb:hover]:bg-[#ffaba6]/70">
          <div className="grid gap-0 md:h-full md:min-h-0 md:grid-cols-[0.86fr_1.14fr]">
            <div className="relative min-h-[280px] border-b border-white/10 bg-[#120d0d] md:h-full md:min-h-0 md:border-b-0 md:border-r md:border-white/10">
              <img
                src={wine.image}
                alt={`${wine.title} de la linea ${wine.family}`}
                className="absolute inset-0 h-full w-full object-cover md:object-contain md:p-8 lg:p-10"
              />
              <div className="absolute inset-0 bg-[linear-gradient(180deg,_rgba(0,0,0,0.05)_0%,_rgba(18,13,13,0.32)_48%,_rgba(18,13,13,0.88)_100%)]" />
            </div>

            <div className="px-5 py-8 sm:px-8 sm:py-10 md:h-full md:min-h-0 md:overflow-y-auto md:[scrollbar-color:#7b4d49_#171010] md:[scrollbar-width:thin] md:[&::-webkit-scrollbar]:w-2 md:[&::-webkit-scrollbar-track]:bg-[#171010] md:[&::-webkit-scrollbar-thumb]:rounded-full md:[&::-webkit-scrollbar-thumb]:bg-[#7b4d49]/70 md:[&::-webkit-scrollbar-thumb:hover]:bg-[#ffaba6]/70">
              <p className="text-[10px] font-bold uppercase tracking-[0.24em] text-[#ffaba6]">
                {wine.family}
              </p>
              <h2
                id="wine-modal-title"
                className="mt-3 font-serif text-4xl font-semibold leading-tight text-[#f6ecea] sm:text-5xl"
              >
                {wine.title}
              </h2>
              <p className="mt-5 font-serif text-base leading-8 text-[#ddc0bd]/84">
                {wine.description}
              </p>

              <ul className="mt-8 space-y-4">
                {technicalItems.map(([icon, label, value]) => (
                  <li
                    key={label}
                    className="grid grid-cols-[34px_minmax(0,1fr)] gap-4 border-b border-white/10 pb-4 last:border-b-0"
                  >
                    <div className="flex h-8 w-8 items-center justify-center rounded-full border border-[#ffaba6]/26 bg-[#241817]/72 text-[#ffaba6]">
                      <TechnicalIcon type={icon} />
                    </div>
                    <div>
                      <p className="text-[9px] font-bold uppercase tracking-[0.2em] text-[#ffaba6]/82">
                        {label}
                      </p>
                      <p className="mt-1 font-serif text-sm leading-6 text-[#f2e7e4]/90">
                        {value}
                      </p>
                    </div>
                  </li>
                ))}
              </ul>

              <div className="mt-8 space-y-6">
                <section>
                  <h3 className="font-serif text-2xl text-[#f6ecea]">
                    Notas de cata
                  </h3>
                  <p className="mt-3 text-sm leading-7 text-[#ddc0bd]/78">
                    {wine.technicalSheet.tastingNotes}
                  </p>
                </section>

                <section>
                  <h3 className="font-serif text-2xl text-[#f6ecea]">
                    Maridaje sugerido
                  </h3>
                  <p className="mt-3 text-sm leading-7 text-[#ddc0bd]/78">
                    {wine.technicalSheet.pairing}
                  </p>
                </section>
              </div>
            </div>
          </div>
        </div>

        <div className="flex shrink-0 justify-center border-t border-white/10 bg-[#1d1515]/96 px-5 py-5 sm:px-7">
          <button
            type="button"
            className="inline-flex items-center gap-4 border-b border-[#ffaba6]/70 pb-2 font-serif text-base text-[#ece0df] transition hover:text-[#ffaba6] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#ffaba6]/35 sm:text-xl"
          >
            Ficha tecnica
            <span aria-hidden="true" className="text-xl leading-none">
              -&gt;
            </span>
          </button>
        </div>
      </article>
    </div>
  )
}

function TechnicalIcon({ type }) {
  const commonProps = {
    'aria-hidden': true,
    className: 'h-4 w-4',
    fill: 'none',
    stroke: 'currentColor',
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
    strokeWidth: 1.6,
    viewBox: '0 0 24 24',
  }

  if (type === 'varietal') {
    return (
      <svg {...commonProps}>
        <path d="M12 20c.1-5.7-.7-9.7-4-13.8" />
        <path d="M11.4 15.4c-2.8.1-4.8-1.1-5.8-3.6 2.6-.6 4.7.5 5.8 3.6Z" />
        <path d="M10.6 10.9c2.8-.4 5-2.1 6-4.8-2.9-.2-5.2 1.5-6 4.8Z" />
        <circle cx="15.8" cy="14" r="1.5" />
        <circle cx="18.2" cy="14.5" r="1.5" />
        <circle cx="16.8" cy="16.8" r="1.5" />
      </svg>
    )
  }

  if (type === 'vintage') {
    return (
      <svg {...commonProps}>
        <path d="M7 4.5h10" />
        <path d="M8.5 3v3M15.5 3v3" />
        <rect x="5" y="6" width="14" height="14" rx="2" />
        <path d="M5 10h14" />
        <path d="M8.5 13h2M13.5 13h2M8.5 16h2" />
      </svg>
    )
  }

  if (type === 'origin') {
    return (
      <svg {...commonProps}>
        <path d="M12 21s6-5.5 6-11a6 6 0 0 0-12 0c0 5.5 6 11 6 11Z" />
        <circle cx="12" cy="10" r="2.2" />
      </svg>
    )
  }

  if (type === 'altitude') {
    return (
      <svg {...commonProps}>
        <path d="m3 19 6.2-10 4 6 2.2-3.3L21 19H3Z" />
        <path d="M9.2 9 11 12l1.2-1.7" />
      </svg>
    )
  }

  if (type === 'aging') {
    return (
      <svg {...commonProps}>
        <path d="M7.5 4.8c2.9-.9 6.1-.9 9 0 1 4.6 1 9.8 0 14.4-2.9.9-6.1.9-9 0-1-4.6-1-9.8 0-14.4Z" />
        <path d="M7 8.5c3.3.6 6.7.6 10 0M7 15.5c3.3-.6 6.7-.6 10 0M7 12h10" />
        <path d="M10 4.7c-.5 4.7-.5 9.9 0 14.6M14 4.7c.5 4.7.5 9.9 0 14.6" />
      </svg>
    )
  }

  if (type === 'alcohol') {
    return (
      <svg {...commonProps}>
        <path d="M8 4h8l-1 7.2a3 3 0 0 1-6 0L8 4Z" />
        <path d="M9 9h6" />
        <path d="M12 14v5" />
        <path d="M9.5 20h5" />
      </svg>
    )
  }

  return (
    <svg {...commonProps}>
      <path d="M12 3v10" />
      <path d="M9 6h6" />
      <path d="M9 10h6" />
      <path d="M15 16.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
      <path d="M12 13.5v3" />
    </svg>
  )
}

export default VinosPage
