import { useCallback, useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import CtaPanel from '../components/ui/CtaPanel'
import ExperienceCard from '../components/ui/ExperienceCard'
import NewsletterSection from '../components/ui/NewsletterSection'
import SectionHeader from '../components/ui/SectionHeader'
import WineCard from '../components/ui/WineCard'
import { WHATSAPP_URL } from '../config/contact'
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
      <WinesSection />
      <ExperiencesSection />
      <StorySection />
      <ActionSection />
      <NewsletterSection
        title="Suscribase a nuestra Newsletter"
        description="Conoce eventos especiales, lanzamientos exclusivos para recibir novedades sobre nuestras etiquetas, eventos privados y la vida en el vinedo."
        placeholder="Tu correo electronico"
        buttonLabel="Suscribirme"
      />
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
        <Link
          to="/vinos"
          className="mt-8 inline-flex border border-[#e0d1d1]/70 px-8 py-3 text-[11px] font-semibold uppercase tracking-[0.18em] text-white transition hover:bg-white hover:text-[#120d0d]"
        >
          Conoce nuestros vinos
        </Link>
      </div>
    </section>
  )
}

function StorySection() {
  return (
    <section className="mx-auto grid max-w-7xl gap-10 px-5 py-16 md:grid-cols-[1.15fr_0.85fr] md:items-center md:gap-16 md:py-24 lg:min-h-[620px] lg:px-8 lg:py-14">
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
  const carouselItemIndexRef = useRef(wines.length)
  const [activeWineIndex, setActiveWineIndex] = useState(0)
  const carouselWines = [...wines, ...wines, ...wines]
  const firstRealWineIndex = wines.length
  const hasDesktopSlider = wines.length > 4

  const scrollToCarouselItem = useCallback((index, behavior = 'smooth') => {
    const carousel = carouselRef.current
    const card = carousel?.children[index]

    if (!carousel || !card) {
      return
    }

    const previousScrollBehavior = carousel.style.scrollBehavior
    const shouldAlignToStart = window.matchMedia('(min-width: 768px)').matches
    const cardPosition = card.offsetLeft - carousel.offsetLeft
    const scrollPosition = shouldAlignToStart
      ? cardPosition
      : cardPosition - (carousel.clientWidth - card.clientWidth) / 2

    if (behavior === 'auto') {
      carousel.style.scrollBehavior = 'auto'
    }

    carousel.scrollTo({
      left: scrollPosition,
      behavior,
    })

    if (behavior === 'auto') {
      requestAnimationFrame(() => {
        carousel.style.scrollBehavior = previousScrollBehavior
      })
    }
  }, [])

  const scrollToWine = useCallback(
    (index) => {
      carouselItemIndexRef.current = firstRealWineIndex + index
      setActiveWineIndex(index)
      scrollToCarouselItem(firstRealWineIndex + index)
    },
    [firstRealWineIndex, scrollToCarouselItem],
  )

  const advanceWineCarousel = useCallback(() => {
    const nextItemIndex = carouselItemIndexRef.current + 1
    const nextIndex = (activeWineIndexRef.current + 1) % wines.length

    carouselItemIndexRef.current = nextItemIndex
    setActiveWineIndex(nextIndex)
    scrollToCarouselItem(nextItemIndex)
  }, [scrollToCarouselItem])

  useEffect(() => {
    const animationFrame = requestAnimationFrame(() => {
      scrollToCarouselItem(firstRealWineIndex, 'auto')
    })

    return () => {
      cancelAnimationFrame(animationFrame)
      clearTimeout(scrollTimeoutRef.current)
    }
  }, [firstRealWineIndex, scrollToCarouselItem])

  useEffect(() => {
    activeWineIndexRef.current = activeWineIndex
  }, [activeWineIndex])

  useEffect(() => {
    const autoplayInterval = window.setInterval(() => {
      advanceWineCarousel()
    }, 4500)

    return () => {
      window.clearInterval(autoplayInterval)
    }
  }, [advanceWineCarousel])

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

    const nextIndex = closestItemIndex % wines.length

    carouselItemIndexRef.current = closestItemIndex
    setActiveWineIndex(nextIndex)

    clearTimeout(scrollTimeoutRef.current)
    scrollTimeoutRef.current = setTimeout(() => {
      if (closestItemIndex < firstRealWineIndex) {
        const resetIndex = closestItemIndex + wines.length

        carouselItemIndexRef.current = resetIndex
        scrollToCarouselItem(resetIndex, 'auto')
      }

      if (closestItemIndex >= firstRealWineIndex + wines.length) {
        const resetIndex = closestItemIndex - wines.length

        carouselItemIndexRef.current = resetIndex
        scrollToCarouselItem(resetIndex, 'auto')
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
          actionTo="/vinos"
        />

        <div
          ref={carouselRef}
          className={`-mx-5 flex snap-x snap-mandatory gap-6 overflow-x-auto scroll-smooth px-5 pb-2 [scrollbar-width:none] md:mx-0 md:px-0 [&::-webkit-scrollbar]:hidden ${
            hasDesktopSlider
              ? ''
              : 'lg:grid lg:grid-cols-4 lg:overflow-visible lg:snap-none lg:scroll-auto'
          }`}
          onScroll={handleWineScroll}
        >
          {carouselWines.map((wine, index) => (
            <div
              key={`${wine.title}-${index}`}
              className={`min-w-[78%] snap-center sm:min-w-[48%] md:min-w-[calc((100%-3rem)/3)] md:snap-start ${
                hasDesktopSlider
                  ? 'lg:min-w-[260px]'
                  : `${index < firstRealWineIndex || index >= firstRealWineIndex + wines.length ? 'lg:hidden' : ''} lg:min-w-0 lg:snap-none`
              }`}
            >
              <WineCard {...wine} />
            </div>
          ))}
        </div>

        <div className={`mt-8 flex justify-center gap-2 ${wines.length > 4 ? '' : 'lg:hidden'}`}>
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
          actionTo="/experiencias"
        />

        <div className="grid gap-6 md:grid-cols-3">
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
          actionHref={WHATSAPP_URL}
        />
        <CtaPanel
          icon={<span className="text-xl">◇</span>}
          title="Tienda Online"
          description="Lleva la esencia de la Cordillera a tu mesa. Envio exclusivo a todo el pais y el mundo."
          actionLabel="Comprar vinos"
          actionHref={WHATSAPP_URL}
        />
      </div>
    </section>
  )
}

export default HomePage
