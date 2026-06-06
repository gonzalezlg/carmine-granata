import { useState } from 'react'
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
  },
  {
    title: 'Cabernet Sauvignon',
    family: 'Carmine Granata Alta Gama',
    image: vino2Image,
    description:
      'Estructura firme, fruta negra y crianza medida para una copa de caracter sereno.',
  },
  {
    title: 'Torrontes del Valle',
    family: 'Francisco Granata',
    image: vino3Image,
    description:
      'Aromatico y luminoso, con frescura de altura y final delicadamente floral.',
  },
  {
    title: 'Merlot Seleccion',
    family: 'Carmine Granata Clasicos',
    image: vino4Image,
    description:
      'Textura suave, taninos redondos y una expresion clasica para acompanar la mesa.',
  },
]

function VinosPage() {
  const [activeFilter, setActiveFilter] = useState(filters[0])

  const visibleWines =
    activeFilter === 'Todos'
      ? wines
      : wines.filter((wine) => wine.family === activeFilter)

  return (
    <div className="bg-[#120d0d] text-[#ece0df]">
      <VinosHero />
      <FilterBar activeFilter={activeFilter} onFilterChange={setActiveFilter} />
      <WineGallery wines={visibleWines} />
      <WineClubSection />
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
    <section className="relative top-[65px] z-40 border-y border-[#3a3333] bg-[#120d0d]/92 py-5 backdrop-blur-xl lg:top-[73px] lg:py-3">
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
                className={`min-h-9 min-w-[140px] border px-5 text-[10px] font-bold uppercase leading-tight tracking-[0.22em] transition sm:min-w-[190px] lg:min-h-7 lg:min-w-0 lg:whitespace-nowrap lg:rounded-[15px] lg:px-5 lg:font-semibold lg:!text-[6px] lg:tracking-[0.1em] ${
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

function WineGallery({ wines }) {
  return (
    <section className="bg-[#120d0d] px-5 py-16 sm:py-20 lg:px-8 lg:py-24">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-7 sm:grid-cols-2 md:grid-cols-3 md:gap-6 lg:grid-cols-4 lg:gap-6">
          {wines.map((wine) => (
            <WineCard key={wine.title} wine={wine} />
          ))}
        </div>
      </div>
    </section>
  )
}

function WineCard({ wine }) {
  return (
    <article className="group relative min-h-[430px] overflow-hidden border border-white/10 bg-[#1b1414] sm:min-h-[470px] md:aspect-[4/5] md:min-h-0 lg:aspect-[3/4]">
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
      </div>
    </article>
  )
}

function WineClubSection() {
  return (
    <section className="bg-[#201a1a] px-5 py-20 text-center sm:py-24 lg:px-8">
      <div className="mx-auto max-w-2xl">
        <h2 className="font-serif text-4xl font-semibold leading-tight text-[#f2e7e4] sm:text-5xl">
          Unete a nuestra Cofradia
        </h2>
        <p className="mx-auto mt-5 max-w-xl font-serif text-base italic leading-7 text-[#ddc0bd]/82">
          Recibe acceso exclusivo a lanzamientos limitados y preventas de
          cosechas historicas.
        </p>

        <form className="mx-auto mt-10 flex max-w-2xl flex-col gap-5 sm:flex-row sm:items-end">
          <label className="flex-1 text-left">
            <span className="sr-only">Tu correo electronico</span>
            <input
              type="email"
              placeholder="Tu correo electronico"
              className="w-full border-0 border-b border-[#574240] bg-transparent px-0 pb-3 font-serif text-base text-[#f2e7e4] placeholder:text-[#ddc0bd]/62 focus:border-[#ffaba6] focus:outline-none focus:ring-0"
            />
          </label>
          <button
            type="submit"
            className="min-h-11 bg-[#ffaba6] px-8 text-[10px] font-bold uppercase tracking-[0.22em] text-[#4a2020] transition hover:bg-[#ffd0cb]"
          >
            Suscribirse
          </button>
        </form>
      </div>
    </section>
  )
}

export default VinosPage
