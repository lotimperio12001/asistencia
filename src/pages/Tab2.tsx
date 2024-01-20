import React from 'react';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar,
  IonCard,  IonCardHeader, 
  IonCardSubtitle, IonCardContent,
  IonList, IonItem, IonInput,
  IonButton, IonIcon} from '@ionic/react';

import './Tab2.css';
import { save } from 'ionicons/icons';

import { loadingController } from "@ionic/core";
import { ChangeEvent, useState } from "react";


type FormElement = ChangeEvent<HTMLInputElement>;

interface userInfo {
	id      : string;
	name    : string;
	lastname: string;
  email   : string;
  mobile  : string;
}

const initialForm = {
	id      : "",
	name    : "",
	lastname: "",
  email   : "",
  mobile  : "",
  
};


const Tab2: React.FC = () => {

  const [form, setForm] = useState<userInfo>(initialForm);
	const handleChange = (e: FormElement) => {
		setForm({
			...form,
			[e.target.name]: e.target.value,
		});
    console.log(e.target.value);
	};

  const handleSubmit = async () => {
		if (form.id.length === 10) {
			const loading = await loadingController.create({
				cssClass: "my-custom-class",
				message: "Guardando...",
			});
      await loading.present();
			try {
				await loading.present();

				//post data api
				const requestOptions = {
					method: "POST",
					headers: { "Content-Type": "application/json" },
					body: JSON.stringify({
						id: form.id,
						name: form.name,
						lastname: form.lastname,
            email: form.email,
            mobile: form.mobile,
					}),
				};
				const response = await fetch(
					`https://api.estudioika.com/apiweb`,
					requestOptions
				);
				const data = await response.json();
				console.log(data);
				setForm(initialForm);
			} catch (error) {
				console.log(error);
			} finally {
				await loading.dismiss();
			}
		}
	};


  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Alta de Usuario</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen color="secondary" className="ion-padding">
        <IonCard>
          <IonCardHeader>
            <IonCardSubtitle>Registro de Asistencia Estudiantil</IonCardSubtitle>
          </IonCardHeader>
          <IonCardContent>        
            <form
              onSubmit={e => {
                e.preventDefault();
                handleSubmit();
              }}>

              <IonList>
                <IonItem>
                  <IonInput name="id" label="Cédula" maxlength={10} onIonChange={(e: any) =>
											handleChange(e)
										}></IonInput>
                </IonItem>
                <IonItem>
                  <IonInput label="Nombre" name="name" maxlength={50} onIonChange={(e: any) =>
											handleChange(e)
										}></IonInput>
                </IonItem>
                <IonItem>
                  <IonInput label="Apellido" name="lastname" maxlength={50} onIonChange={(e: any) =>
											handleChange(e)
										}></IonInput>
                </IonItem>
                <IonItem>
                  <IonInput label="Email" name="email" maxlength={100} type="email" onIonChange={(e: any) =>
											handleChange(e)
										}></IonInput>
                </IonItem>
                <IonItem>
                  <IonInput label="Celular" name="mobile" maxlength={10} value={form.mobile} onIonChange={(e: any) =>
											handleChange(e)
										}></IonInput>
                </IonItem>
              </IonList>
              <div className="ion-text-center ion-padding-top">
                <IonButton type="submit" color="success" expand="block" shape="round" >
                  Registrar
                  <IonIcon slot="start" icon={save}></IonIcon>
                </IonButton>
              </div>
            </form>
          </IonCardContent>
        </IonCard>
      
      </IonContent>
    </IonPage>
  );
};

export default Tab2;
