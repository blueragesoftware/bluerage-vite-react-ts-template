import { useEffect } from 'react'
import { SafeAreaLayout } from './components/SafeAreaLayout'
import { Bluerage } from './Bluerage'
import { IonApp, IonRouterOutlet } from '@ionic/react'
import { IonReactRouter } from '@ionic/react-router'
import { Route } from 'react-router-dom'
import { Home } from './pages/Home'

function App() {
  useEffect(() => {
    Bluerage.init()
  }, [])

  return (
    <SafeAreaLayout>
      <IonApp>
        <IonReactRouter>
          <IonRouterOutlet>
            <Route path="/" exact component={Home} />
          </IonRouterOutlet>
        </IonReactRouter>
      </IonApp>
    </SafeAreaLayout>
  )
}

export default App
