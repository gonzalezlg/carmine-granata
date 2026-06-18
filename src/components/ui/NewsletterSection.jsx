import { useId } from 'react'

function NewsletterSection({
  title,
  description,
  placeholder,
  buttonLabel,
  onSubmit,
}) {
  const emailInputId = useId()

  return (
    <section className="bg-[#120d0d] px-5 py-20 text-center sm:py-24 lg:px-8">
      <div className="mx-auto max-w-4xl border border-[#3a2726] bg-[#171212]/70 px-6 py-14 shadow-[0_-1px_0_rgba(255,171,166,0.35)] sm:px-10 lg:px-20">
        <h2 className="font-serif text-3xl font-normal leading-tight text-[#f2e7e4] sm:text-4xl">
          {title}
        </h2>
        <p className="mx-auto mt-5 max-w-xl font-serif text-sm leading-7 text-[#ddc0bd]/80 sm:text-base">
          {description}
        </p>

        <form
          className="mx-auto mt-10 flex max-w-2xl flex-col gap-5 sm:flex-row sm:items-end"
          onSubmit={onSubmit}
        >
          <label className="flex-1 text-left" htmlFor={emailInputId}>
            <span className="sr-only">Correo electronico</span>
            <input
              id={emailInputId}
              name="email"
              type="email"
              autoComplete="email"
              required
              placeholder={placeholder}
              className="w-full border-0 border-b border-[#574240] bg-transparent px-0 pb-3 font-serif text-base text-[#f2e7e4] placeholder:text-[#ddc0bd]/58 focus:border-[#ffaba6] focus:outline-none focus:ring-0"
            />
          </label>
          <button
            type="submit"
            className="min-h-11 bg-[#ffaba6] px-8 text-[10px] font-bold uppercase tracking-[0.22em] text-[#4a2020] transition hover:bg-[#ffd0cb]"
          >
            {buttonLabel}
          </button>
        </form>
      </div>
    </section>
  )
}

export default NewsletterSection
