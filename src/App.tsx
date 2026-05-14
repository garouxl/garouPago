import { useState } from 'react'
import { Button } from '@/lib/components/ui/button'

function App() {
  const [count, setCount] = useState(0)

  return (
    <section id='center'>
      <h1 className='text-9xl py-4 border-b-2 border-amber-600'>Get start</h1>
      <Button onClick={() => setCount(count + 1)}>Click me: {count}</Button>
    </section>
  )
}

export default App
