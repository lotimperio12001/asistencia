import React from 'react';
import { IonContent, IonHeader, 
  IonPage, IonTitle,  
  IonToolbar, IonCard,  
  IonCardContent, IonButton,
  IonGrid, IonRow, IonCol, 
  IonInput, IonIcon } from '@ionic/react';
import { person, lockClosed, star, logIn, personAdd } from 'ionicons/icons';

import './Tab1.css';
import Create from './../components/create/create';

const Tab1: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Registro</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen color="medium" className="ion-padding">
        <IonCard>
          <br/>
          <center>
            <img alt="Imagen" src="/assets/images/login.png"/>
          </center>
          <br/>
          <IonCardContent>
            <Create/>
          </IonCardContent>
        </IonCard>        
      </IonContent>
    </IonPage>
  );
};

export default Tab1;
