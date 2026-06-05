import ImagePlaceholder from './ImagePlaceholder'

function WineCard({ title, category, description, imageVariant, imageSrc }) {
  return (
    <article>
      {imageSrc ? (
        <div className="aspect-[4/5] w-full overflow-hidden">
          <img
            src={imageSrc}
            alt={title}
            className="h-full w-full object-cover transition duration-500 hover:scale-[1.03]"
          />
        </div>
      ) : (
        <ImagePlaceholder
          variant={imageVariant}
          className="aspect-[4/5] w-full"
          label={title}
        />
      )}
      <div className="mt-4">
        <h3 className="text-sm font-semibold text-white">{title}</h3>
        <p className="mt-1 text-[10px] font-semibold uppercase tracking-[0.14em] text-[#a18072]">
          {category}
        </p>
        <p className="mt-2 text-xs leading-5 text-[#e0d1d1]/65">{description}</p>
      </div>
    </article>
  )
}

export default WineCard
