import { useEffect } from 'react'
import { SafeAreaLayout } from './components/SafeAreaLayout'
import { Bluerage } from './Bluerage'

function App() {
  useEffect(() => {
    Bluerage.init()
  }, [])

  return (
    <SafeAreaLayout>
      <div className="h-full flex items-center justify-center">
        <h1 className="text-2xl font-bold">My awesome mini app</h1>
      </div>
    </SafeAreaLayout>
  )
}

export default App
