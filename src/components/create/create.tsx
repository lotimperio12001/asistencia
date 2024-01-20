import React, { useState } from "react";
import { Form, Button} from 'semantic-ui-react';
import axios  from "axios";

export default function Create(){
    const [name, setName] = useState("");
    const [lastnemname, setLastname] = useState("");

    console.log(name);
    console.log(lastnemname);

    const corsAnywhere = 'https://cors-anywhere.herokuapp.com/';
    const myUrl = 'http://40.75.120.104/apiweb';

    const sendDataToAPI = () =>{
        axios.post(corsAnywhere+myUrl, 
            {name,
            lastnemname })
    }
    return(
        <div>
            <Form>
                <Form.Field>
                    <label>Nombre</label>
                    <input name="name" onChange={(e)=>setName(e.target.value)} placeholder="Nombre"/>
                </Form.Field>
                <Form.Field>
                    <label>Apellido</label>
                    <input name="lastname" onChange={(e)=>setLastname(e.target.value)} placeholder="Apellido"/>
                </Form.Field>
                <Button type="submit" onclick={sendDataToAPI}>Enviar</Button>
            </Form>
        </div>
    );
}