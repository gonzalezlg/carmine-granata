import ImagePlaceholder from './ImagePlaceholder'

function ExperienceCard({ title, category, imageVariant, imageSrc }) {
  return (
    <article className="group relative overflow-hidden">
      {imageSrc ? (
        <img
          src={imageSrc}
          alt={title}
          className="aspect-[4/5] w-full object-cover transition duration-500 group-hover:scale-[1.03]"
        />
      ) : (
        <ImagePlaceholder
          variant={imageVariant}
          className="aspect-[4/5] w-full transition duration-500 group-hover:scale-[1.03]"
          label={title}
        />
      )}
      <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-[#120d0d] via-[#120d0d]/70 to-transparent p-5">
        <p className="text-[10px] font-semibold uppercase tracking-[0.14em] text-[#e0d1d1]/75">
          {category}
        </p>
        <h3 className="font-serif mt-1 text-2xl italic leading-none text-white">
          {title}
        </h3>
      </div>
    </article>
  )
}

export default ExperienceCard
