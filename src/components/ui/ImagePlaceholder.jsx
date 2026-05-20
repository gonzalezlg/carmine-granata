function ImagePlaceholder({ variant = 'vineyard', className = '', label }) {
  return (
    <div
      className={`placeholder-image placeholder-${variant} ${className}`}
      aria-label={label}
      role={label ? 'img' : undefined}
    />
  )
}

export default ImagePlaceholder
