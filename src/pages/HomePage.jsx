import { useCallback, useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import CtaPanel from '../components/ui/CtaPanel'
import ExperienceCard from '../components/ui/ExperienceCard'
import FloatingWhatsApp from '../components/ui/FloatingWhatsApp'
import NewsletterForm from '../components/ui/NewsletterForm'
import SectionHeader from '../components/ui/SectionHeader'
import WineCard from '../components/ui/WineCard'
import bodegaHistoriaImage from '../assets/home/bodega-historia.png'
import experienciaAlmuerzoImage from '../assets/home/experiencia-almuerzo.png'
import experienciaAtardecerImage from '../assets/home/experiencia-atardecer.png'
import experienciaDegustacionImage from '../assets/home/experiencia-degustacion.png'
import heroVinedosImage from '../assets/home/hero-vinedos.png'
import vinoAltaGamaImage from '../assets/home/vino-alta-gama.png'
import vinoNicolasGranataImage from '../assets/home/vino-nicolas-granata.png'
import vinoOlivosImage from '../assets/home/vino-olivos.png'
import vinoReservaFamiliaImage from '../assets/home/vino-reserva-familia.png'

const wines = [
  {
    title: 'Nicolas Granata',
    category: 'La herencia en cada copa',
    description: 'Vino de autor que expresa la esencia pura del terroir andino.',
    imageVariant: 'bottle',
    imageSrc: vinoNicolasGranataImage,
  },
  {
    title: 'Carmine Granata Alta Gama',
    category: 'Complejidad y caracter',
    description: 'Profundidad y estructura definidas por el paso del tiempo en roble.',
    imageVariant: 'cellar',
    imageSrc: vinoAltaGamaImage,
  },
  {
    title: 'Carmine Granata Olivos',
    category: 'Tradicion mendocina',
    description: 'La frescura de la tierra y la elegancia clasica de Mendoza.',
    imageVariant: 'vineyard',
    imageSrc: vinoOlivosImage,
  },
  {
    title: 'Reserva de Familia',
    category: 'Edicion limitada',
    description: 'Seleccion especial de partidas pequenas con identidad propia.',
    imageVariant: 'building',
    imageSrc: vinoReservaFamiliaImage,
  },
]

const experiences = [
  {
    title: 'Almuerzo de la Tierra',
    category: 'Gastronomia',
    imageVariant: 'dinner',
    imageSrc: experienciaAlmuerzoImage,
  },
  {
    title: 'Degustacion de Autor',
    category: 'Cava',
    imageVariant: 'cellar',
    imageSrc: experienciaDegustacionImage,
  },
  {
    title: 'Atardecer en el Vinedo',
    category: 'Recorrido',
    imageVariant: 'walk',
    imageSrc: experienciaAtardecerImage,
  },
]

function HomePage() {
  return (
    <div className="bg-[#120d0d] text-[#e0d1d1]">
      <HeroSection />
      <StorySection />
      <WinesSection />
      <ExperiencesSection />
      <ActionSection />
      <NewsletterSection />
      <FloatingWhatsApp />
    </div>
  )
}

function HeroSection() {
  return (
    <section className="relative flex min-h-[92svh] items-center justify-center overflow-hidden md:min-h-screen">
      <img
        src={heroVinedosImage}
        alt="Vinedos al atardecer"
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div className="absolute inset-0 bg-[#120d0d]/35" />
      <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-[#120d0d] to-transparent" />

      <div className="relative z-10 mx-auto max-w-5xl px-5 pt-20 text-center">
        <h1 className="font-serif text-5xl italic leading-tight text-white md:text-7xl lg:text-8xl">
          Un legado en cada botella
        </h1>
        <p className="mt-6 text-xs font-semibold uppercase tracking-[0.48em] text-[#e0d1d1] md:text-sm">
          Pasion por el vino desde 1920
        </p>
        <a
          href="#vinos"
          className="mt-8 inline-flex border border-[#e0d1d1]/70 px-8 py-3 text-[11px] font-semibold uppercase tracking-[0.18em] text-white transition hover:bg-white hover:text-[#120d0d]"
        >
          Conoce nuestros vinos
        </a>
      </div>
    </section>
  )
}

function StorySection() {
  return (
    <section className="mx-auto grid max-w-[980px] gap-10 px-6 py-16 md:grid-cols-[1.15fr_0.85fr] md:items-center md:gap-16 md:py-24 lg:min-h-[620px] lg:py-14 lg:px-0">
      <div className="aspect-[4/5] w-full overflow-hidden lg:aspect-[5/4]">
        <img
          src={bodegaHistoriaImage}
          alt="Fachada de la bodega"
          className="h-full w-full object-cover"
        />
      </div>

      <div className="md:max-w-sm">
        <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[#a18072]">
          Nuestra historia
        </p>
        <h2 className="font-serif mt-5 text-3xl italic leading-tight text-white md:text-4xl">
          Bodega Carmine Granata
        </h2>
        <p className="mt-6 text-sm leading-7 text-[#e0d1d1]/72 md:text-[13px]">
          Se encuentra ubicada en la provincia de Mendoza, en Lujan de Cuyo,
          considerada entre las mejores del mundo por nuestro excelente, dedicado
          y unico capital del vino en el mundo.
        </p>
        <Link
          to="/bodega"
          className="mt-8 inline-flex border-b border-[#f0b8b8] pb-1 text-[11px] font-semibold uppercase tracking-[0.14em] text-[#f0b8b8]"
        >
          Explorar la bodega
        </Link>
      </div>
    </section>
  )
}

function WinesSection() {
  const carouselRef = useRef(null)
  const scrollTimeoutRef = useRef(null)
  const activeWineIndexRef = useRef(0)
  const [activeWineIndex, setActiveWineIndex] = useState(0)
  const carouselWines = [wines[wines.length - 1], ...wines, wines[0]]

  const scrollToCarouselItem = useCallback((index, behavior = 'smooth') => {
    const carousel = carouselRef.current
    const card = carousel?.children[index]

    if (!carousel || !card) {
      return
    }

    carousel.scrollTo({
      left: card.offsetLeft - carousel.offsetLeft,
      behavior,
    })
  }, [])

  const scrollToWine = useCallback(
    (index) => {
      setActiveWineIndex(index)
      scrollToCarouselItem(index + 1)
    },
    [scrollToCarouselItem],
  )

  useEffect(() => {
    const animationFrame = requestAnimationFrame(() => {
      scrollToCarouselItem(1, 'auto')
    })

    return () => {
      cancelAnimationFrame(animationFrame)
      clearTimeout(scrollTimeoutRef.current)
    }
  }, [scrollToCarouselItem])

  useEffect(() => {
    activeWineIndexRef.current = activeWineIndex
  }, [activeWineIndex])

  useEffect(() => {
    const autoplayInterval = window.setInterval(() => {
      const nextIndex = (activeWineIndexRef.current + 1) % wines.length

      scrollToWine(nextIndex)
    }, 4500)

    return () => {
      window.clearInterval(autoplayInterval)
    }
  }, [scrollToWine])

  function handleWineScroll() {
    const carousel = carouselRef.current

    if (!carousel) {
      return
    }

    const children = Array.from(carousel.children)
    const scrollPosition = carousel.scrollLeft
    const closestItemIndex = children.reduce((closestIndex, child, index) => {
      const childPosition = child.offsetLeft - carousel.offsetLeft
      const closestPosition = children[closestIndex].offsetLeft - carousel.offsetLeft

      return Math.abs(childPosition - scrollPosition) <
        Math.abs(closestPosition - scrollPosition)
        ? index
        : closestIndex
    }, 0)

    const nextIndex =
      closestItemIndex === 0
        ? wines.length - 1
        : closestItemIndex === carouselWines.length - 1
          ? 0
          : closestItemIndex - 1

    setActiveWineIndex(nextIndex)

    clearTimeout(scrollTimeoutRef.current)
    scrollTimeoutRef.current = setTimeout(() => {
      if (closestItemIndex === 0) {
        scrollToCarouselItem(wines.length, 'auto')
      }

      if (closestItemIndex === carouselWines.length - 1) {
        scrollToCarouselItem(1, 'auto')
      }
    }, 120)
  }

  return (
    <section id="vinos" className="bg-[#1b1414] py-20 md:py-24 lg:flex lg:min-h-[620px] lg:items-center lg:py-14">
      <div className="mx-auto w-full max-w-7xl px-5 lg:px-8">
        <SectionHeader
          eyebrow="Seleccion premium"
          title="Nuestros Vinos"
          actionLabel="Ver coleccion completa"
        />

        <div
          ref={carouselRef}
          className="-mx-5 flex snap-x snap-mandatory gap-6 overflow-x-auto scroll-smooth px-5 pb-2 [scrollbar-width:none] md:mx-0 md:px-0 [&::-webkit-scrollbar]:hidden"
          onScroll={handleWineScroll}
        >
          {carouselWines.map((wine, index) => (
            <div
              key={`${wine.title}-${index}`}
              className="min-w-[78%] snap-center sm:min-w-[48%] md:min-w-[calc((100%-3rem)/3)] md:snap-start lg:min-w-[260px]"
            >
              <WineCard {...wine} />
            </div>
          ))}
        </div>

        <div className="mt-8 flex justify-center gap-2">
          {wines.map((wine, index) => (
            <button
              key={wine.title}
              type="button"
              aria-label={`Ver categoria ${wine.title}`}
              className={`h-1.5 w-1.5 rounded-full transition ${index === activeWineIndex ? 'bg-[#f0b8b8]' : 'bg-[#e0d1d1]/30'}`}
              onClick={() => scrollToWine(index)}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

function ExperiencesSection() {
  return (
    <section className="py-20 md:py-24 lg:flex lg:min-h-[620px] lg:items-center lg:py-14">
      <div className="mx-auto w-full max-w-7xl px-5 lg:px-8">
        <SectionHeader
          eyebrow="Vivir el terroir"
          title="Experiencias que trascienden"
          actionLabel="Conoce nuestras experiencias"
        />

        <div className="grid gap-6 md:grid-cols-3 lg:mx-auto lg:max-w-5xl">
          {experiences.map((experience) => (
            <ExperienceCard key={experience.title} {...experience} />
          ))}
        </div>
      </div>
    </section>
  )
}

function ActionSection() {
  return (
    <section className="bg-[#1b1414] py-20 md:py-24">
      <div className="mx-auto grid max-w-7xl gap-4 px-5 md:grid-cols-2 lg:px-8">
        <CtaPanel
          icon={<span className="text-xl">□</span>}
          title="Planea tu Visita"
          description="Reserva un lugar en nuestro terroir para una experiencia sensorial unica e inolvidable."
          actionLabel="Reservar ahora"
        />
        <CtaPanel
          icon={<span className="text-xl">◇</span>}
          title="Tienda Online"
          description="Lleva la esencia de la Cordillera a tu mesa. Envio exclusivo a todo el pais y el mundo."
          actionLabel="Comprar vinos"
        />
      </div>
    </section>
  )
}

function NewsletterSection() {
  return (
    <section className="px-5 py-20 text-center md:py-24">
      <h2 className="font-serif text-4xl italic leading-tight text-white">
        Suscribase a nuestra Newsletter
      </h2>
      <p className="mx-auto mt-4 max-w-xl text-sm leading-6 text-[#e0d1d1]/70">
        Conoce eventos especiales, lanzamientos exclusivos para recibir novedades
        sobre nuestras etiquetas, eventos privados y la vida en el vinedo.
      </p>
      <NewsletterForm />
    </section>
  )
}

export default HomePage
