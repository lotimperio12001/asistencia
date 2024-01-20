import React from 'react';
import { IonItem,  IonLabel } from '@ionic/react';

import { User } from './../models/user.model';

const UserItem : React.FC <{user: User}>  = ({user}) => {
    return (
        //<>
        <IonItem>            
            <IonLabel>
                <img src={user.img}/>
                <h2>{user.name}</h2>
                <h2>{user.maker}</h2>
                
            </IonLabel>
        </IonItem>
    );
}

export default UserItem;