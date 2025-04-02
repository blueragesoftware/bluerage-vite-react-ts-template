import { useEffect } from 'react'
import { Bluerage } from './Bluerage'

function App() {
  useEffect(() => {
    Bluerage.init()
  }, [])
  
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <p>Lets make it fun!</p>
    </div>
  )
}

export default App
