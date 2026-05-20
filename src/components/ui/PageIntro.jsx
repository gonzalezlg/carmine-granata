function PageIntro({ eyebrow, title, description }) {
  return (
    <section className="mx-auto max-w-6xl px-6 py-20">
      <p className="mb-4 text-sm font-semibold uppercase tracking-[0.18em] text-[#7f1d1d]">
        {eyebrow}
      </p>
      <h1 className="max-w-3xl text-4xl font-semibold leading-tight text-stone-950 md:text-6xl">
        {title}
      </h1>
      {description ? (
        <p className="mt-6 max-w-2xl text-lg leading-8 text-stone-700">
          {description}
        </p>
      ) : null}
    </section>
  )
}

export default PageIntro
