import contactHeroImage from '../assets/contacto/contacto-equipo-bodega.png'
import visitVineyardImage from '../assets/contacto/contacto-vinedos.png'

const contactItems = [
  {
    icon: 'tel',
    label: '+54 261 123-4567',
    href: 'tel:+542611234567',
  },
  {
    icon: 'mail',
    label: 'info@carminegranata.com',
    href: 'mailto:info@carminegranata.com',
  },
]

const socialItems = [
  {
    icon: 'message',
    label: 'WhatsApp',
    href: 'https://wa.me/542611234567',
  },
  {
    icon: 'camera',
    label: 'Instagram',
    href: 'https://www.instagram.com/',
  },
]

function ContactoPage() {
  return (
    <div className="bg-[#130d0e] text-[#dfcdca]">
      <ContactHero />
      <ContactSection />
      <VisitSection />
    </div>
  )
}

function ContactHero() {
  return (
    <section className="relative flex min-h-[560px] items-center justify-center overflow-hidden pt-20 sm:min-h-[620px] lg:min-h-[520px]">
      <img
        src={contactHeroImage}
        alt="Equipo de la bodega reunido en la cava"
        className="absolute inset-0 h-full w-full object-cover object-center"
      />
      <div className="absolute inset-0 bg-[linear-gradient(180deg,_rgba(18,13,13,0.46),_rgba(18,13,13,0.82)),radial-gradient(ellipse_at_50%_42%,_rgba(0,0,0,0.08)_0%,_rgba(0,0,0,0.58)_76%)]" />

      <div className="relative z-10 mx-auto max-w-4xl px-6 text-center">
        <h1 className="font-serif text-5xl font-semibold leading-none text-[#f2e7e4] sm:text-7xl lg:text-7xl">
          Hablemos.
        </h1>
        <p className="mx-auto mt-7 max-w-[310px] font-serif text-lg leading-7 text-[#eadbd7] sm:max-w-3xl sm:text-xl lg:text-[21px]">
          Cada botella cuenta una historia de siglos. Permitanos guiarlo a
          traves de nuestra herencia en Mendoza.
        </p>
      </div>
    </section>
  )
}

function ContactSection() {
  return (
    <section className="bg-[#171010] px-5 py-16 sm:py-20 lg:px-8 lg:py-24">
      <div className="mx-auto grid max-w-7xl gap-14 md:grid-cols-[1.05fr_0.95fr] md:items-stretch lg:grid-cols-[1.25fr_0.85fr] lg:gap-16">
        <ContactForm />
        <ContactDetails />
      </div>
    </section>
  )
}

function ContactForm() {
  return (
    <form className="h-full border border-[#3c2423] bg-[#211515] px-6 py-10 sm:px-10 sm:py-12 lg:flex lg:flex-col lg:px-12 lg:py-6">
      <div className="grid gap-9 lg:grid-cols-2 lg:gap-8">
        <FormField label="Nombre" placeholder="Su nombre completo" />
        <FormField label="Email" placeholder="su@email.com" type="email" />
      </div>

      <div className="mt-10 lg:mt-6 lg:flex-1">
        <FormField
          label="Mensaje"
          placeholder="Escriba su consulta aqui..."
          textarea
        />
      </div>

      <div className="mt-10 flex justify-center lg:mt-6">
        <button
          type="submit"
          className="min-h-12 w-full max-w-[270px] whitespace-nowrap bg-[#ffaba6] px-8 text-[11px] font-bold uppercase tracking-[0.24em] text-[#4a2020] transition hover:bg-[#ffd0cb] focus:outline-none focus:ring-2 focus:ring-[#ffaba6]/50 focus:ring-offset-2 focus:ring-offset-[#211515] lg:min-h-10 lg:text-[10px]"
        >
          Enviar Mensaje
        </button>
      </div>
    </form>
  )
}

function FormField({ label, placeholder, type = 'text', textarea = false }) {
  const inputClass =
    'w-full border-0 border-b border-[#d08e89] bg-transparent px-0 pb-4 font-serif text-base font-semibold text-[#f2e7e4] placeholder:text-[#dfcdca]/82 focus:border-[#ffaba6] focus:outline-none focus:ring-0 lg:pb-3 lg:text-sm'

  return (
    <label className="block lg:h-full">
      <span className="text-[11px] font-bold uppercase tracking-[0.16em] text-[#c9aaa4] lg:text-[10px]">
        {label}
      </span>
      {textarea ? (
        <textarea
          className={`${inputClass} mt-6 min-h-[104px] resize-none lg:mt-4 lg:h-[calc(100%-34px)] lg:min-h-[72px]`}
          placeholder={placeholder}
        />
      ) : (
        <input
          className={`${inputClass} mt-6 lg:mt-4`}
          type={type}
          placeholder={placeholder}
        />
      )}
    </label>
  )
}

function ContactDetails() {
  return (
    <div className="md:flex md:h-full md:min-h-full md:flex-col md:justify-between md:pt-2 lg:pt-0">
      <InfoBlock title="Ubicacion">
        <p>
          Calle de los Vinedos 1234,
          <br />
          Lujan de Cuyo, Mendoza,
          <br />
          Argentina. CP 5507.
        </p>
      </InfoBlock>

      <InfoBlock title="Contacto" className="mt-12 md:mt-0">
        <div className="space-y-5">
          {contactItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="flex items-center gap-5 transition hover:text-[#ffaba6]"
            >
              <ContactIcon name={item.icon} />
              <span>{item.label}</span>
            </a>
          ))}
        </div>
      </InfoBlock>

      <InfoBlock title="Siga Nuestra Historia" className="mt-12 md:mt-0">
        <div className="flex gap-9">
          {socialItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="group text-center text-[11px] font-bold text-[#dfcdca]/58 transition hover:text-[#ffaba6]"
              target="_blank"
              rel="noreferrer"
            >
              <span className="mx-auto flex h-12 w-12 items-center justify-center rounded-lg border border-[#74504b] text-[#dfcdca] transition group-hover:border-[#ffaba6] group-hover:text-[#ffaba6]">
                <ContactIcon name={item.icon} />
              </span>
              <span className="mt-2 block">{item.label}</span>
            </a>
          ))}
        </div>
      </InfoBlock>
    </div>
  )
}

function InfoBlock({ title, children, className = '' }) {
  return (
    <section className={className}>
      <h2 className="font-serif text-4xl font-semibold leading-tight text-[#ffaba6] sm:text-5xl lg:text-[34px]">
        {title}
      </h2>
      <div className="mt-7 font-serif text-lg font-semibold leading-8 text-[#dfcdca]/86 lg:mt-5 lg:text-base lg:leading-7">
        {children}
      </div>
    </section>
  )
}

function VisitSection() {
  return (
    <section className="relative min-h-[520px] overflow-hidden lg:min-h-[320px]">
      <img
        src={visitVineyardImage}
        alt="Viñedos de Mendoza con la cordillera de los Andes"
        className="absolute inset-0 h-full w-full object-cover object-center"
      />
      <div className="absolute inset-0 bg-[linear-gradient(180deg,_rgba(18,13,13,0.12),_rgba(18,13,13,0.64)),radial-gradient(ellipse_at_52%_44%,_transparent_0%,_rgba(0,0,0,0.4)_78%)]" />

      <div className="relative z-10 mx-auto flex min-h-[520px] max-w-7xl items-center px-5 py-20 lg:min-h-[320px] lg:px-8 lg:py-10">
        <div className="w-full max-w-[395px] bg-[#2a1d1c]/92 px-7 py-10 shadow-2xl shadow-black/20 backdrop-blur-sm sm:px-9 lg:max-w-[360px] lg:px-7 lg:py-7">
          <h2 className="font-serif text-4xl font-semibold leading-tight text-[#f2e7e4] sm:text-5xl lg:text-4xl">
            Visite la Finca
          </h2>
          <p className="mt-5 font-serif text-base font-semibold leading-7 text-[#eadbd7]/90 lg:mt-3 lg:text-sm lg:leading-6">
            Descubra el alma de nuestra tierra en el corazon de Lujan de Cuyo.
          </p>
          <a
            href="https://www.google.com/maps"
            target="_blank"
            rel="noreferrer"
            className="mt-9 inline-flex items-center gap-3 text-[11px] font-bold uppercase tracking-[0.22em] text-[#ffaba6] transition hover:text-[#ffd0cb] lg:mt-6 lg:text-[10px]"
          >
            Indicaciones de mapa
            <svg
              aria-hidden="true"
              className="h-4 w-4"
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              <path d="M7 17 17 7" />
              <path d="M7 7h10v10" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  )
}

function ContactIcon({ name }) {
  const commonProps = {
    'aria-hidden': true,
    className: 'h-5 w-5',
    fill: 'none',
    stroke: 'currentColor',
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
    strokeWidth: 2,
    viewBox: '0 0 24 24',
  }

  if (name === 'tel') {
    return (
      <svg {...commonProps}>
        <path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.4 19.4 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1.9.3 1.7.6 2.5a2 2 0 0 1-.5 2.1L8 9.5a16 16 0 0 0 6.5 6.5l1.2-1.2a2 2 0 0 1 2.1-.5c.8.3 1.6.5 2.5.6a2 2 0 0 1 1.7 2Z" />
      </svg>
    )
  }

  if (name === 'mail') {
    return (
      <svg {...commonProps}>
        <rect width="20" height="16" x="2" y="4" rx="2" />
        <path d="m22 7-10 6L2 7" />
      </svg>
    )
  }

  if (name === 'message') {
    return (
      <svg {...commonProps}>
        <path d="M21 15a4 4 0 0 1-4 4H8l-5 3V7a4 4 0 0 1 4-4h10a4 4 0 0 1 4 4Z" />
        <path d="M8 9h8" />
        <path d="M8 13h5" />
      </svg>
    )
  }

  return (
    <svg {...commonProps}>
      <circle cx="12" cy="12" r="9" />
      <circle cx="12" cy="12" r="3" />
      <path d="M12 3v6" />
      <path d="M12 15v6" />
      <path d="m4.2 7.5 5.2 3" />
      <path d="m14.6 13.5 5.2 3" />
      <path d="m19.8 7.5-5.2 3" />
      <path d="m9.4 13.5-5.2 3" />
    </svg>
  )
}

export default ContactoPage
