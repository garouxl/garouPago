const NoiseBackground = () => {
  return (
    <>
      <div
        className='absolute top-0 left-0 bottom-0 right-0 z-1'
        style={{
          background: `radial-gradient(rgb(6 8 18 / 40%) 0%, rgba(38, 64, 20, 0.12) 40%, transparent 70%), url(/noise.svg)`,
          filter: 'contrast(0) brightness(10%)',
        }}
      />
    </>
  )
}

export default NoiseBackground

NoiseBackground.displayName = 'NoiseBackground'
