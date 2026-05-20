import { useEffect, useMemo, useState } from 'react'
import Particles, { initParticlesEngine } from '@tsparticles/react'
import { loadSlim } from '@tsparticles/slim'
import { type ISourceOptions } from '@tsparticles/engine'

export const ParticlesBackground = () => {
  const [init, setInit] = useState(false)
  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine)
    }).then(() => {
      setInit(true)
    })
  }, [])

  const options: ISourceOptions = useMemo(
    () => ({
      background: {
        color: '#272833',
      },
      fpsLimit: 240,
      interactivity: {
        events: {
          onClick: { enable: true, mode: 'push' },
          onHover: { enable: true, mode: 'grab' },
        },
        modes: {
          push: { quantity: 4 },
          repulse: { distance: 200, duration: 0.4 },
        },
      },
      particles: {
        color: { value: '#BCBDEC' },
        links: {
          color: '#7F78AD',
          distance: 150,
          enable: true,
          opacity: 0.5,
          width: 2,
        },
        move: {
          direction: 'none',
          enable: true,
          outModes: { default: 'bounce' },
          random: false,
          speed: 1,
          straight: false,
        },
        number: {
          density: { enable: true, area: 1080 },
          value: 150,
        },
        opacity: {
          value: { min: 0.1, max: 0.5 },
          animation: {
            enable: true,
            speed: 0.1,
            minimumValue: 0.1,
          },
        },
        shape: {
          type: 'circle',
        },
        size: {
          value: { min: 1, max: 3 },
          random: { enable: true },
        },
      },
      detectRetina: true,
    }),
    [],
  )

  return (
    <div className='App'>
      {init && <Particles id='tsparticles' options={options} />}
    </div>
  )
}
