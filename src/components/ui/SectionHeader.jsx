function SectionHeader({ eyebrow, title, actionLabel }) {
  return (
    <div className="mb-8 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
      <div>
        <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[#a18072]">
          {eyebrow}
        </p>
        <h2 className="font-serif mt-2 text-3xl italic leading-tight text-white md:text-4xl">
          {title}
        </h2>
      </div>

      {actionLabel ? (
        <a
          href="#"
          className="w-fit border-b border-[#f0b8b8] pb-1 text-[11px] font-semibold uppercase tracking-[0.14em] text-[#f0b8b8]"
        >
          {actionLabel}
        </a>
      ) : null}
    </div>
  )
}

export default SectionHeader
