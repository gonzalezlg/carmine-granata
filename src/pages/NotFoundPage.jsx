import { Link } from 'react-router-dom'

function NotFoundPage() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-20">
      <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#7f1d1d]">
        404
      </p>
      <h1 className="mt-4 text-4xl font-semibold text-stone-950">
        Pagina no encontrada
      </h1>
      <Link
        to="/"
        className="mt-8 inline-flex rounded-md bg-[#7f1d1d] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[#651616]"
      >
        Volver al inicio
      </Link>
    </section>
  )
}

export default NotFoundPage
