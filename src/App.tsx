import { useState } from 'react'
import { Button } from '@/lib/components/ui/button'
import { Card } from '@/lib/components/ui/card'
import ParticlesBackground from '@/layout/ParticlesBackground'
import NoiseBackground from '@/layout/NoiseBackground'

function App() {
  const [count, setCount] = useState(0)

  return (
    <section
      id='center'
      className='dark max-h-full h-full relative bg-zinc-800'
    >
      <div
        style={{
          minHeight: '100vh',
          color: 'white',
          backgroundColor: '#1a1a1a',
        }}
      >
        <ParticlesBackground />
        <NoiseBackground />

        <main
          style={{
            position: 'relative',
            zIndex: 2,
            padding: '2rem',
            textAlign: 'center',
          }}
        >
          <Card>
            <h1 className='text-black dark:text-white py-4 border-b-2 border-zinc-900'>
              Get ready to build!
            </h1>
            <Button onClick={() => setCount(count + 1)}>
              Click me: {count}
            </Button>
          </Card>
        </main>
      </div>
    </section>
  )
}

export default App
