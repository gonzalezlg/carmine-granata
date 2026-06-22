import { Link } from 'react-router-dom'

const heroImage =
  'https://lh3.googleusercontent.com/aida-public/AB6AXuBieLgUIcoQmNQFxXGwzPNjVfQ7Dz19Oq4i3fmtQ_qCcWjKmlmMvK0PuRpjp_n2aqg23SHCMyERae59o9LajKL2BEsTsUrCi35hLGaeCLmV1zfDR26PgneU4Ho0nX6N19RbtsnRizAPOchvc4HqC7w6Zv5wbvfcdGbeAVWTjnSukhnMPalOtN13jN1Zhp2-BUBin1oNR2CZkKvz6DxD68MPjOuWe81KCisUZVoNyt78sqo_h_CTnhV4ge2UjtF3AD7P4yTg0j0T4hk'

const landImage =
  'https://lh3.googleusercontent.com/aida-public/AB6AXuC7tsBwzhtA72r5wpD5gLlYZO0rLoZ0ITp3PnEB0cWJ_KNAzSDXFLHSKzMieOiyLtgkYdXCd4G74krB4WE_SUZMapryTLPb_KEoe57EJsiXyvjEQjhfh0tJ5i1zgcGn_rbNbXAVgyymOkH7YRo9yui-oZlSorYAaw6wIdxgPz_zj9j_dOecKygRMzaO7Sv0mev_6bIJeY5a8aaxmPiHjXIqm3F4tlIL8bsggGsxMg7XASaFjDGHn-GqqQWsPXOW62-LaLN_SNRrXC8'

const terroirImage =
  'https://lh3.googleusercontent.com/aida-public/AB6AXuAzaPqobiaIf5o5DtlrBZM3-UeC4yM3lpn3rXxwv56SpAQyvcEGhVbvyFeBktCgHy2Kw9toQURB0aSZ8oBc5XCfkB7EZKIXpY4KSeCOAtab48-ju7J9IhiMJZd1UqGtVXTpV7x-cFhO_Nf-zdg7CZZvETIX0gsRj9hpzY9Fj3MO08NjCUEo1Oii_ky1bxeA9RO-VyRnpWDKsOooLhPHVDXPQOno5TpqUmmgJnmsrg3yV69LFKAynJ-BK2fBqILvk3gxc9sPWjHsMeU'

const team = [
  {
    name: 'Marcos Vallini',
    role: 'Enologo Principal',
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuA5qj_n0rny1u9x1re_WlGRv20PF563w2krm6Hn0C6VAH5op9rVsv-gpLd4vJjlDoLhog3BAwvWwgC_QFGZ8I5122ge9doX-EqAzwlFhfKTNIaftzDfzfy-3o9ggFmjwjIUaO6_s62LLxjrMwJ7kpMm6qgguw3417jx86V5zH5CJ_sD6zERwPGfbklLMMJHyWX9TqnRKwSzHigTGzlJ3-OJI5uEcvcQU6BNKmOA7mGZDArQK-UfZq6h0_nnRtBpoBf7zBCG4PUcolU',
    description:
      'Visionario de la altura, dedicado a capturar la frescura mineral de Gualtallary.',
  },
  {
    name: 'Elena Santoro',
    role: 'Directora de Viticultura',
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuBclpuiNNjhcExjvjt9_OPMuTsD3o-s4fnQ5jDxR1mkUbwQCDR5qNrkKWfApr30q74tBg2ANaVNHXoWesYePPeMXHgQMqbzNPoGfa2wXRQ8M2h7SDtDUD0fxcjSXKEetITySRLSqaCXTQ-5ihTUM8An8OP3VuwZ7OxU18TW8-6QMa5V_i-d4oD_W9bQIO3j3H68QMzb2a8uK7KGBdneqqOJnN_LbD6SQdkt4vPKDg0WM6wDHis9qkUK-UWEXGui3WB5Bf4pTtmBj0w',
    description:
      'Experta en suelos calcareos, lidera la transicion hacia practicas biodinamicas.',
  },
  {
    name: 'Roberto Andreani',
    role: 'Maestro de Barricas',
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuAbTapZQlyFYcpClTi2h9PD9l_VI_CiDOVLdSebW1I4agfru6I8VYhBBuQHJxBKtqH4izWGmmjUfgemEeP-ZdENK6V60aJ4MnJKZ0zVR2bADloRKb67M719OxcAwV2R4hmFfqWbUjy0Lx8GtR-JY7qx0jyztNum-VhcDDFtITZ4lssyWIgEBkY9Nr47tC9iD5MwfaRmAOT_M_qQx8EQIFRKS9YdkfvKrRnBUo7D3r585JqrGeyfcE0b8yl_HWgLL5eTgHy9_2FZnZo',
    description:
      'Cuatro decadas custodiando el sueno de nuestros mejores Malbecs en roble frances.',
  },
]

const timeline = [
  {
    year: '1920',
    title: 'Fundacion',
    description: 'Don Alessandro planta las primeras vides traidas de Italia.',
    icon: 'vine',
  },
  {
    year: '1950',
    title: 'Expansion',
    description: 'Cruzamos fronteras por primera vez, llegando a las mesas de Europa.',
    icon: 'barrel',
  },
  {
    year: '1990',
    title: 'Innovacion',
    description: 'Riego por goteo y viticultura de precision para leer cada parcela.',
    icon: 'irrigation',
  },
  {
    year: '2024',
    title: 'Global',
    description: 'Referentes de sustentabilidad y calidad andina.',
    icon: 'sustainable',
  },
]

function BodegaPage() {
  return (
    <div className="bg-[#120d0d] text-[#ece0df]">
      <BodegaHero />
      <OriginSection />
      <HistorySection />
      <TeamSection />
      <InvitationSection />
    </div>
  )
}

function BodegaHero() {
  return (
    <section className="relative flex min-h-[560px] items-center justify-center overflow-hidden pt-20 sm:min-h-[620px] lg:min-h-[520px]">
      <img
        src={heroImage}
        alt="Vinedos al atardecer frente a una bodega de piedra"
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div className="absolute inset-0 bg-[linear-gradient(180deg,_rgba(18,13,13,0.12)_0%,_rgba(18,13,13,0.54)_45%,_#120d0d_100%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_24%,_transparent_0%,_rgba(18,13,13,0.18)_36%,_rgba(18,13,13,0.9)_86%)]" />

      <div className="relative z-10 mx-auto max-w-[320px] px-5 text-center sm:max-w-2xl lg:hidden">
        <h1 className="font-serif text-4xl font-medium leading-tight text-[#f6ecea] sm:text-5xl">
          Nuestra Esencia
        </h1>
        <p className="mx-auto mt-5 font-serif text-sm leading-7 text-[#ddc0bd]/84 sm:text-base sm:leading-8">
          En el corazon de los Andes cultivamos mas que vides; cultivamos una
          herencia que trasciende el tiempo.
        </p>
      </div>

      <div className="relative z-10 mx-auto hidden max-w-3xl px-6 text-center lg:block">
        <h1 className="font-serif text-6xl font-medium leading-none text-[#f6ecea]">
          Nuestra Esencia
        </h1>
        <p className="mx-auto mt-6 max-w-2xl font-serif text-lg leading-8 text-[#ddc0bd]/88">
          En el corazon de los Andes cultivamos mas que vides; cultivamos una
          herencia que trasciende el tiempo.
        </p>
      </div>
    </section>
  )
}

function OriginSection() {
  return (
    <section className="bg-[#171212] px-5 py-24 sm:py-32 lg:px-8 lg:py-20">
      <div className="mx-auto max-w-7xl">
        <div className="space-y-20 lg:hidden">
          <article className="grid gap-10 sm:grid-cols-2 sm:items-center">
            <div className="order-2 sm:order-1">
              <SectionLabel>El origen</SectionLabel>
              <h2 className="mt-5 font-serif text-4xl font-normal leading-tight text-[#f2e7e4] sm:text-[42px]">
                El Respeto por la Tierra
              </h2>
              <p className="mt-6 font-serif text-sm leading-7 text-[#ddc0bd]/84 sm:text-base sm:leading-8">
                Nuestra filosofia se basa en la minima intervencion y el maximo
                respeto por el ciclo natural. Entendemos que el vino se hace en
                el vinedo, y nuestro papel es ser guardianes de este ecosistema
                privilegiado.
              </p>
              <div className="mt-7 h-px w-20 bg-[#ffaba6]/38" />
            </div>

            <div className="order-1 relative sm:order-2">
              <div className="overflow-hidden rounded-sm">
                <img
                  src={landImage}
                  alt="Manos sosteniendo tierra mendocina"
                  className="aspect-[4/5] h-full w-full object-cover sm:aspect-[4/3]"
                />
              </div>
              <div className="absolute -bottom-6 left-4 border border-white/10 bg-[#241e1e]/55 p-5 backdrop-blur-xl sm:-bottom-7 sm:-left-5 sm:p-6">
                <p className="font-serif text-4xl italic leading-none text-[#ece0df]/16 [-webkit-text-stroke:0.5px_rgba(236,224,223,0.35)] sm:text-5xl">
                  1,200m
                </p>
                <p className="mt-2 text-[9px] font-semibold uppercase tracking-[0.2em] text-[#ddc0bd]/72 sm:text-[10px]">
                  Altitud promedio
                </p>
              </div>
            </div>
          </article>

          <article className="grid gap-10 sm:grid-cols-2 sm:items-center">
            <div className="overflow-hidden rounded-sm">
              <img
                src={terroirImage}
                alt="Vinedos de altura con la Cordillera de los Andes"
                className="aspect-[4/5] h-full w-full object-cover sm:aspect-[4/3]"
              />
            </div>

            <div>
              <SectionLabel>El terroir</SectionLabel>
              <h2 className="mt-5 font-serif text-4xl font-normal leading-tight text-[#f2e7e4] sm:text-[42px]">
                La Altura de Mendoza
              </h2>
              <p className="mt-6 font-serif text-sm leading-7 text-[#ddc0bd]/84 sm:text-base sm:leading-8">
                La amplitud termica y la pureza del agua de deshielo confieren a
                nuestras uvas una intensidad unica. Cada parcela es un
                microclima que solo el tiempo permite revelar.
              </p>
              <button
                type="button"
                className="mt-8 border border-[#a58b88]/35 px-7 py-3 text-[10px] font-semibold uppercase tracking-[0.22em] text-[#ece0df] transition hover:border-[#ffaba6] hover:text-[#ffaba6]"
              >
                Explorar el mapa
              </button>
            </div>
          </article>
        </div>

        <div className="hidden items-center gap-20 lg:grid lg:grid-cols-2">
          <div>
            <SectionLabel>El origen</SectionLabel>
            <h2 className="mt-5 font-serif text-5xl font-normal leading-tight text-[#f2e7e4]">
              El Respeto por la Tierra
            </h2>
            <p className="mt-7 max-w-lg font-serif text-base leading-8 text-[#ddc0bd]/82">
              Nuestra filosofia se basa en la minima intervencion y el maximo
              respeto por el ciclo natural. Entendemos que el vino se hace en el
              vinedo, y nuestro papel es ser guardianes de este ecosistema
              privilegiado.
            </p>
            <div className="mt-8 h-px w-24 bg-[#ffaba6]/38" />
          </div>

          <div className="relative ml-auto w-full max-w-[460px]">
            <div className="aspect-[4/3] overflow-hidden rounded-sm">
              <img
                src={landImage}
                alt="Manos sosteniendo tierra mendocina"
                className="h-full w-full object-cover transition duration-700 hover:scale-105"
              />
            </div>
            <div className="absolute -bottom-8 -left-8 border border-white/10 bg-[#241e1e]/50 p-7 backdrop-blur-xl">
              <p className="font-serif text-6xl italic leading-none text-[#ece0df]/16 [-webkit-text-stroke:0.5px_rgba(236,224,223,0.35)]">
                1,200m
              </p>
              <p className="mt-2 text-[10px] font-semibold uppercase tracking-[0.2em] text-[#ddc0bd]/72">
                Altitud promedio
              </p>
            </div>
          </div>
        </div>

        <div className="mt-24 hidden items-center gap-20 lg:grid lg:grid-cols-2">
          <div className="w-full max-w-[460px] overflow-hidden rounded-sm">
            <div className="aspect-[4/3]">
            <img
              src={terroirImage}
              alt="Vinedos de altura con la Cordillera de los Andes"
              className="h-full w-full object-cover transition duration-700 hover:scale-105"
            />
            </div>
          </div>

          <div>
            <SectionLabel>El terroir</SectionLabel>
            <h2 className="mt-5 font-serif text-5xl font-normal leading-tight text-[#f2e7e4]">
              La Altura de Mendoza
            </h2>
            <p className="mt-7 max-w-lg font-serif text-base leading-8 text-[#ddc0bd]/82">
              La amplitud termica y la pureza del agua de deshielo confieren a
              nuestras uvas una intensidad unica. Cada parcela es un microclima
              que solo el tiempo permite revelar.
            </p>
            <button
              type="button"
              className="mt-8 border border-[#a58b88]/35 px-8 py-3 text-[11px] font-semibold uppercase tracking-[0.22em] text-[#ece0df] transition hover:border-[#ffaba6] hover:text-[#ffaba6]"
            >
              Explorar el mapa
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

function HistorySection() {
  return (
    <section className="bg-[#201a1a] px-5 py-24 sm:py-32 lg:px-8 lg:py-20">
      <div className="mx-auto max-w-7xl">
        <div className="hidden text-center lg:block">
          <SectionLabel>Nuestra historia</SectionLabel>
          <h2 className="mt-5 font-serif text-5xl font-normal leading-tight text-[#f2e7e4]">
            Cien anos de legado
          </h2>
        </div>

        <div className="relative mt-20 hidden lg:block">
          <div className="absolute left-0 top-[112px] h-px w-full bg-[#ffaba6]/24" />
          <div className="relative z-10 grid grid-cols-4 gap-10 text-center">
            {timeline.map((item) => (
              <article key={item.year} className="flex flex-col items-center">
                <p className="font-serif text-6xl text-[#ffaba6]/72">
                  {item.year}
                </p>
                <div className="mt-6 flex h-14 w-14 items-center justify-center rounded-full border border-[#ffaba6]/38 bg-[#201a1a] shadow-[0_0_0_7px_#201a1a]">
                  <WineTimelineIcon type={item.icon} />
                </div>
                <h3 className="mt-7 font-serif text-2xl text-[#f2e7e4]">
                  {item.title}
                </h3>
                <div className="mt-4 h-px w-8 bg-[#ffaba6]/28" />
                <p className="mt-4 max-w-[230px] font-serif text-sm leading-6 text-[#ddc0bd]/72">
                  {item.description}
                </p>
              </article>
            ))}
          </div>
        </div>

        <div className="lg:hidden">
          <div className="text-center">
            <SectionLabel>Nuestra historia</SectionLabel>
            <h2 className="mt-5 font-serif text-4xl font-normal leading-tight text-[#f2e7e4] sm:text-[42px]">
              Cien anos de legado
            </h2>
          </div>

          <div className="relative mt-16">
            <div className="absolute bottom-0 left-7 top-0 w-px bg-[linear-gradient(180deg,transparent_0%,rgba(255,171,166,0.34)_8%,rgba(255,171,166,0.34)_92%,transparent_100%)] sm:left-1/2 sm:-translate-x-1/2" />

            <div className="space-y-12 sm:space-y-16">
              {timeline.map((item, index) => {
                const isLeft = index % 2 === 0

                return (
                  <article
                    key={item.year}
                    className="relative grid grid-cols-[56px_minmax(0,1fr)] items-center gap-5 sm:grid-cols-[minmax(0,1fr)_72px_minmax(0,1fr)] sm:gap-7"
                  >
                    <div
                      className={`order-2 text-left ${
                        isLeft
                          ? 'sm:order-1 sm:text-right'
                          : 'sm:order-3 sm:text-left'
                      }`}
                    >
                      <p className="font-serif text-5xl leading-none text-[#ffaba6]/72">
                        {item.year}
                      </p>
                      <h3 className="mt-3 font-serif text-2xl text-[#f2e7e4]">
                        {item.title}
                      </h3>
                      <div
                        className={`mt-4 h-px w-10 bg-[#ffaba6]/28 ${
                          isLeft ? 'sm:ml-auto' : ''
                        }`}
                      />
                      <p
                        className={`mt-4 max-w-[300px] font-serif text-sm leading-6 text-[#ddc0bd]/72 ${
                          isLeft ? 'sm:ml-auto' : ''
                        }`}
                      >
                        {item.description}
                      </p>
                    </div>

                    <div className="order-1 z-10 flex h-14 w-14 items-center justify-center rounded-full border border-[#ffaba6]/42 bg-[#201a1a] shadow-[0_0_0_7px_#201a1a] sm:order-2 sm:mx-auto">
                      <WineTimelineIcon type={item.icon} />
                    </div>

                    <div
                      aria-hidden="true"
                      className={`hidden sm:block ${
                        isLeft ? 'sm:order-3' : 'sm:order-1'
                      }`}
                    />
                  </article>
                )
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function WineTimelineIcon({ type }) {
  const commonProps = {
    'aria-hidden': true,
    className: 'h-7 w-7 text-[#ffaba6]/82',
    fill: 'none',
    stroke: 'currentColor',
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
    strokeWidth: 1.35,
    viewBox: '0 0 32 32',
  }

  if (type === 'vine') {
    return (
      <svg {...commonProps}>
        <path d="M16 27c.2-7.4-.8-13.1-5.5-18.6" />
        <path d="M15.4 20.5c-3.8.2-6.5-1.4-7.9-4.8 3.5-.8 6.3.7 7.9 4.8Z" />
        <path d="M14.1 14.4c3.8-.6 6.9-2.9 8.2-6.6-4-.2-7.1 2.1-8.2 6.6Z" />
        <circle cx="19.2" cy="18.2" r="2.1" />
        <circle cx="22.8" cy="18.8" r="2.1" />
        <circle cx="20.9" cy="22" r="2.1" />
        <circle cx="24.4" cy="22.2" r="1.8" />
        <circle cx="22.5" cy="25.2" r="1.8" />
        <path d="M20.4 15.5c.6-1.1 1.7-1.8 3-1.9" />
      </svg>
    )
  }

  if (type === 'barrel') {
    return (
      <svg {...commonProps}>
        <path d="M9.2 6.3c4.4-1.4 9.2-1.4 13.6 0 1.5 6.3 1.5 13.1 0 19.4-4.4 1.4-9.2 1.4-13.6 0-1.5-6.3-1.5-13.1 0-19.4Z" />
        <path d="M8.3 10.2c5 .9 10.4.9 15.4 0M8.1 21.8c5.2-.9 10.6-.9 15.8 0M8 16h16" />
        <path d="M12 6.1c-.8 6.5-.8 13.3 0 19.8M20 6.1c.8 6.5.8 13.3 0 19.8" />
        <circle cx="16" cy="16" r="1.2" />
      </svg>
    )
  }

  if (type === 'irrigation') {
    return (
      <svg {...commonProps}>
        <path d="M5 9.5h10.5c2.8 0 5 2.2 5 5v1.2" />
        <path d="M8 6.5v6M5 7.7h6" />
        <path d="M20.5 15.7c-2.1 3-3.5 4.8-3.5 7a3.5 3.5 0 0 0 7 0c0-2.2-1.4-4-3.5-7Z" />
        <path d="M7.5 25.5c1.4-4.8 3.8-8.4 7.4-10.8M7.7 19.8c2.4-.1 4 .8 5 2.7M9.8 15.7c2.2-.1 3.8.8 4.8 2.5" />
      </svg>
    )
  }

  return (
    <svg {...commonProps}>
      <circle cx="16" cy="16" r="10.5" />
      <path d="M5.8 15.1c4.1 1 7 3.2 8.7 6.8M12.3 6.1c2.6 2.2 4.1 5.2 4.4 9M25.3 13c-4.8.1-8.8 1.7-11.7 4.8" />
      <path d="M21.7 9.1c-.1 3.7-1.9 6.1-5.5 7.2-.5-3.5 1.3-5.9 5.5-7.2Z" />
      <path d="M16.1 16.4c2.1 1.5 3.6 3.7 4.3 6.4" />
    </svg>
  )
}

function TeamSection() {
  return (
    <section className="bg-[#120d0d] px-5 py-24 sm:py-32 lg:px-8 lg:py-20">
      <div className="mx-auto max-w-7xl">
        <div className="hidden lg:block">
          <div className="mb-20 max-w-3xl">
            <SectionLabel>Maestros hacedores</SectionLabel>
            <h2 className="mt-5 font-serif text-5xl font-normal leading-tight text-[#f2e7e4]">
              El Alma del Equipo
            </h2>
            <p className="mt-7 font-serif text-base leading-8 text-[#ddc0bd]/78">
              Unidos por la pasion y el rigor tecnico, nuestro equipo de
              enologia interpreta cada cosecha como una obra de arte irrepetible.
            </p>
          </div>

          <div className="mx-auto grid max-w-[900px] gap-10 md:grid-cols-3">
            {team.map((person) => (
              <article key={person.name} className="group mx-auto w-full max-w-[260px]">
                <div className="aspect-[4/5] overflow-hidden rounded-sm grayscale transition duration-700 group-hover:grayscale-0">
                  <img
                    src={person.image}
                    alt={person.name}
                    className="h-full w-full object-cover"
                  />
                </div>
                <h3 className="mt-4 font-serif text-2xl text-[#f2e7e4] transition group-hover:text-[#ffaba6]">
                  {person.name}
                </h3>
                <p className="mt-2 text-[10px] font-semibold uppercase tracking-[0.22em] text-[#ddc0bd]/72">
                  {person.role}
                </p>
                <p className="mt-3 font-serif text-xs leading-5 text-[#ddc0bd]/72">
                  {person.description}
                </p>
              </article>
            ))}
          </div>
        </div>

        <div className="lg:hidden">
          <div className="mb-14 max-w-xl">
            <SectionLabel>Maestros hacedores</SectionLabel>
            <h2 className="mt-5 font-serif text-4xl font-normal leading-tight text-[#f2e7e4] sm:text-[42px]">
              El Alma del Equipo
            </h2>
            <p className="mt-6 font-serif text-sm leading-7 text-[#ddc0bd]/78 sm:text-base sm:leading-8">
              Unidos por la pasion y el rigor tecnico, nuestro equipo de
              enologia interpreta cada cosecha como una obra de arte irrepetible.
            </p>
          </div>

          <div className="grid gap-12 sm:grid-cols-3">
            {team.map((person) => (
              <article key={person.name} className="group">
                <div className="aspect-[4/5] overflow-hidden rounded-sm grayscale transition duration-700 group-hover:grayscale-0">
                  <img
                    src={person.image}
                    alt={person.name}
                    className="h-full w-full object-cover"
                  />
                </div>
                <h3 className="mt-4 font-serif text-2xl text-[#f2e7e4] transition group-hover:text-[#ffaba6]">
                  {person.name}
                </h3>
                <p className="mt-2 text-[10px] font-semibold uppercase tracking-[0.2em] text-[#ddc0bd]/72">
                  {person.role}
                </p>
                <p className="mt-3 font-serif text-xs leading-5 text-[#ddc0bd]/72">
                  {person.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

function InvitationSection() {
  return (
    <section className="bg-[#171212] px-5 py-24 text-center sm:py-32 lg:flex lg:min-h-[320px] lg:items-center lg:px-8 lg:py-20">
      <div className="mx-auto max-w-3xl">
        <SectionLabel>La invitacion</SectionLabel>
        <h2 className="mt-5 font-serif text-4xl font-medium leading-tight text-[#f2e7e4] sm:text-[42px] lg:text-5xl">
          Descubra nuestros vinos
        </h2>
        <Link
          to="/vinos"
          className="inline-flex items-center gap-4 border-b border-[#ffaba6]/70 pb-2 font-serif text-base text-[#ece0df] transition hover:text-[#ffaba6] lg:mt-8 lg:text-2xl"
        >
          Ver la Coleccion
          <span aria-hidden="true" className="text-xl leading-none">
            →
          </span>
        </Link>
      </div>
    </section>
  )
}

function SectionLabel({ children, className = '' }) {
  return (
    <p
      className={`text-[10px] font-bold uppercase tracking-[0.24em] text-[#ffaba6] ${className}`}
    >
      {children}
    </p>
  )
}

export default BodegaPage
