function CtaPanel({ icon, title, description, actionLabel, actionHref }) {
  return (
    <article className="border border-white/5 bg-[#231b1b] px-8 py-12 text-center">
      <div className="mx-auto flex h-8 w-8 items-center justify-center text-[#f0b8b8]">
        {icon}
      </div>
      <h3 className="font-serif mt-5 text-3xl italic text-white">{title}</h3>
      <p className="mx-auto mt-4 max-w-xs text-sm leading-6 text-[#e0d1d1]/70">
        {description}
      </p>
      <a
        href={actionHref}
        target={actionHref?.startsWith('http') ? '_blank' : undefined}
        rel={actionHref?.startsWith('http') ? 'noreferrer' : undefined}
        className="mt-6 inline-flex border-b border-[#f0b8b8] pb-1 text-[11px] font-semibold uppercase tracking-[0.14em] text-[#f0b8b8]"
      >
        {actionLabel}
      </a>
    </article>
  )
}

export default CtaPanel
