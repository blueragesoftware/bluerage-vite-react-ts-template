import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react'

export function Home() {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>My awesome mini app</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding">
        <div className="ion-text-center">
          <h1 className="ion-text-bold">Welcome to my app!</h1>
        </div>
      </IonContent>
    </IonPage>
  )
} 