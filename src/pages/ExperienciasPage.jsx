import experienciaAlmuerzoImage from '../assets/home/experiencia-almuerzo.png'
import experienciaAtardecerImage from '../assets/home/experiencia-atardecer.png'
import experienciaDegustacionImage from '../assets/home/experiencia-degustacion.png'
import NewsletterSection from '../components/ui/NewsletterSection'

const heroImage = experienciaAtardecerImage

/* const categories = [
  'Todo',
  'Degustaciones',
  'Experiencias gastronomicas',
  'Atardeceres',
] */

const guidedVisits = [
  {
    title: 'Solo Visita',
    description: 'Un recorrido historico por nuestra bodega centenaria y cava.',
    price: '$10.000',
    image: experienciaDegustacionImage,
  },
  {
    title: 'Visita Clasica',
    description: 'Degustacion de tres etiquetas seleccionadas tras el recorrido por la cava.',
    price: '$20.000',
    image: experienciaAlmuerzoImage,
  },
  {
    title: 'Visita Premium',
    description: 'Acceso exclusivo a nuestra cava privada con cata de vinos de guarda.',
    price: '$25.000',
    image: experienciaAtardecerImage,
  },
]

const foodExperiences = [
  {
    title: 'Sandwich de Focaccia + Copa',
    description:
      'Sabores mendocinos maridados con nuestra amplia seleccion de Malbec.',
    price: '$20.000',
    image: experienciaAlmuerzoImage,
  },
  {
    title: 'Picnic en los Jardines',
    description:
      'Una canasta gourmet para disfrutar entre los vinedos al atardecer.',
    price: '$30.000',
    image: experienciaAtardecerImage,
  },
]

const sensorySteps = [
  {
    number: '01',
    title: 'Vista',
    description:
      'Observe el color, la lagrima y la vivacidad de cada copa bajo la luz natural de nuestros vinedos.',
  },
  {
    number: '02',
    title: 'Olfato',
    description:
      'Descubra notas de frutos rojos, especias y el sutil tostado del roble frances en nuestras salas de barricas.',
  },
  {
    number: '03',
    title: 'Gusto',
    description:
      'La culminacion del viaje: texturas sedosas y un final persistente que cuenta la historia de nuestro terroir.',
  },
]

function ExperienciasPage() {
  return (
    <div className="bg-[#120d0d] text-[#ece0df]">
      <ExperienciasHero />
      {/* <CategoryNav /> */}
      <GuidedVisitSection />
      <FoodSection />
      <SensoryPathSection />
      <NewsletterSection
        title="Unase a Nuestra Comunidad"
        description="Sea el primero en recibir invitaciones a degustaciones privadas y lanzamientos exclusivos."
        placeholder="Su email"
        buttonLabel="Suscribirse"
      />
    </div>
  )
}

function ExperienciasHero() {
  return (
    <section className="relative flex min-h-[560px] items-end overflow-hidden pt-20 sm:min-h-[620px] lg:min-h-[520px]">
      <img
        src={heroImage}
        alt="Vinedos de Carmine Granata al atardecer"
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div className="absolute inset-0 bg-[linear-gradient(180deg,_rgba(18,13,13,0.18)_0%,_rgba(18,13,13,0.54)_48%,_#120d0d_100%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_38%,_rgba(255,180,172,0.05)_0%,_rgba(18,13,13,0.24)_36%,_rgba(0,0,0,0.78)_88%)]" />

      <div className="relative z-10 mx-auto w-full max-w-3xl px-6 pb-20 text-center lg:pb-24">
        <div>
         
          <h1 className="mt-4 font-serif text-5xl font-normal leading-none text-[#f6ecea] sm:text-6xl lg:text-7xl">
            Experiencias Sensoriales
          </h1>
          <p className="mx-auto mt-5 max-w-xl font-serif text-sm leading-7 text-[#ddc0bd]/86 sm:text-base sm:leading-8">
            Descubra la esencia de nuestra tierra a traves de los sentidos. Un
            viaje por la cava y los vinedos donde el tiempo se detiene.
          </p>
        </div>
      </div>
    </section>
  )
}

/* function CategoryNav() {
  return (
    <section className="border-y border-[#302827] bg-[#120d0d]/95 py-4">
      <nav
        className="mx-auto flex max-w-7xl gap-6 overflow-x-auto px-5 text-[9px] font-bold uppercase tracking-[0.2em] text-[#ddc0bd]/72 lg:px-8 lg:[scrollbar-width:none] lg:[&::-webkit-scrollbar]:hidden"
        aria-label="Categorias de experiencias"
      >
        {categories.map((category, index) => (
          <a
            key={category}
            href="#propuestas"
            className={`shrink-0 border-b pb-1 transition hover:text-[#ffaba6] ${
              index === 0
                ? 'border-[#ffaba6] text-[#f6ecea]'
                : 'border-transparent'
            }`}
          >
            {category}
          </a>
        ))}
      </nav>
    </section>
  )
}
 */
function GuidedVisitSection() {
  return (
    <section id="propuestas" className="bg-[#120d0d] px-5 py-20 lg:px-8 lg:py-24">
      <div className="mx-auto max-w-7xl">
        <CenteredTitle eyebrow="Propuestas" title="Visita Guiada & Degustacion" />

        <div className="mx-auto mt-14 grid max-w-6xl gap-7 md:grid-cols-3">
          {guidedVisits.map((experience) => (
            <ExperienceCard key={experience.title} experience={experience} />
          ))}
        </div>
      </div>
    </section>
  )
}

function FoodSection() {
  return (
    <section className="bg-[#120d0d] px-5 pb-20 lg:px-8 lg:pb-24">
      <div className="mx-auto max-w-7xl">
        <CenteredTitle title="Picoteo a lo Granata" />

        <div className="mx-auto mt-14 grid max-w-5xl gap-7 md:grid-cols-2">
          {foodExperiences.map((experience) => (
            <ExperienceCard
              key={experience.title}
              experience={experience}
              variant="wide"
            />
          ))}
        </div>
      </div>
    </section>
  )
}

function SensoryPathSection() {
  return (
    <section className="bg-[#201a1a] px-5 py-20 lg:px-8 lg:py-24">
      <div className="mx-auto max-w-7xl">
        <div className="text-center">
          <h2 className="font-serif text-3xl font-normal leading-tight text-[#f2e7e4] sm:text-4xl">
            El Camino de los Sentidos
          </h2>
          <div className="mx-auto mt-4 h-px w-24 bg-[#ffaba6]/45" />
        </div>

        <div className="mt-16 grid gap-12 md:grid-cols-3 md:gap-10">
          {sensorySteps.map((step) => (
            <article key={step.title} className="relative">
              <p className="pointer-events-none absolute -left-2 -top-9 font-serif text-7xl leading-none text-[#ece0df]/7 sm:text-8xl">
                {step.number}
              </p>
              <div className="relative">
                <h3 className="font-serif text-2xl font-normal text-[#f2e7e4]">
                  {step.title}
                </h3>
                <p className="mt-4 max-w-sm font-serif text-sm leading-6 text-[#ddc0bd]/76">
                  {step.description}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

function ExperienceCard({ experience, variant = 'default' }) {
  const isWide = variant === 'wide'

  return (
    <article
      className={`group relative overflow-hidden border border-white/10 bg-[#1b1414] ${
        isWide ? 'min-h-[280px] md:min-h-[260px]' : 'min-h-[390px] lg:min-h-[420px]'
      }`}
    >
      <img
        src={experience.image}
        alt={experience.title}
        className="absolute inset-0 h-full w-full object-cover transition duration-700 group-hover:scale-105"
      />
      <div className="absolute inset-0 bg-[linear-gradient(180deg,_rgba(0,0,0,0.08)_0%,_rgba(0,0,0,0.18)_38%,_rgba(0,0,0,0.86)_100%)]" />
      <div className="absolute inset-x-0 bottom-0 p-6 sm:p-7">
        <h3
          className={`font-serif font-semibold uppercase leading-[0.95] tracking-[0.08em] text-[#f6ecea] ${
            isWide ? 'max-w-md text-3xl sm:text-4xl' : 'text-3xl sm:text-4xl'
          }`}
        >
          {experience.title}
        </h3>
        <p className="mt-4 max-w-sm font-serif text-sm leading-6 text-[#ddc0bd]/82">
          {experience.description}
        </p>
        <div className="mt-6 flex items-center justify-between gap-5">
          <p className="text-xs font-bold text-[#ffaba6]">{experience.price}</p>
          <a
            href="#"
            className="border-b border-[#ffaba6]/70 pb-1 text-[9px] font-bold uppercase tracking-[0.2em] text-[#f6ecea] transition hover:text-[#ffaba6]"
          >
            {isWide ? 'Ver mas' : 'Reservar'}
          </a>
        </div>
      </div>
    </article>
  )
}

function CenteredTitle({ eyebrow, title }) {
  return (
    <div className="text-center">
      {eyebrow ? <SectionLabel>{eyebrow}</SectionLabel> : null}
      <h2 className="mt-4 font-serif text-4xl font-normal leading-tight text-[#f2e7e4] sm:text-5xl">
        {title}
      </h2>
      <div className="mx-auto mt-4 h-px w-24 bg-[#ffaba6]/45" />
    </div>
  )
}

function SectionLabel({ children }) {
  return (
    <p className="text-[10px] font-bold uppercase tracking-[0.24em] text-[#ffaba6]">
      {children}
    </p>
  )
}

export default ExperienciasPage
