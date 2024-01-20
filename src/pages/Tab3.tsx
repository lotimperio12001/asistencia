import React, { useState, useEffect } from 'react';
import { IonContent, IonHeader, IonList, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import './Tab3.css';

import { User } from './../models/user.model' ;
import UserItem from './../components/userItem'; 
import axios from 'axios';


const Tab3: React.FC = () => {

  const corsAnywhere = 'https://cors-anywhere.herokuapp.com/';
  const myUrl = 'http://40.75.120.104/apiweb';
  
  const [users, setUser] = useState <User[]> ([]);
  //return  axios.get("http://jsonplaceholder.typicode.com/users")
  const fetchData = () =>{
    return  axios.get('https://raw.githack.com/JuandresPUCE/Api_python_SQLite/main/database/guitars.json')
    //return  axios.get("http://40.75.120.104/apiweb")
    .then((response) => setUser(response.data));
  }

  useEffect(()=>{
    fetchData();
  },[]);

  
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Lista de Usuarios</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonList>
          {users.map((user, idx) => {
            return (
              <UserItem key =  {idx} user={user}/>              
            );
          })}
        </IonList>
        
      </IonContent>
    </IonPage>
  );
};

export default Tab3;
