function NewsletterForm() {
  return (
    <form className="mx-auto mt-8 flex max-w-xl flex-col gap-3 sm:flex-row">
      <label className="sr-only" htmlFor="newsletter-email">
        Correo electronico
      </label>
      <input
        id="newsletter-email"
        type="email"
        placeholder="Tu correo electronico"
        className="min-h-11 flex-1 border border-[#e0d1d1]/35 bg-transparent px-4 text-sm text-white outline-none placeholder:text-[#e0d1d1]/45 focus:border-[#f0b8b8]"
      />
      <button
        type="submit"
        className="min-h-11 bg-[#f0b8b8] px-8 text-xs font-semibold uppercase tracking-[0.14em] text-[#631111] transition hover:bg-white"
      >
        Suscribirme
      </button>
    </form>
  )
}

export default NewsletterForm
