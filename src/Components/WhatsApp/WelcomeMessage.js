import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link,useLocation } from 'react-router-dom';
//require('dotenv').config();

import { sendWelcomeMessage, sendGreetingMsg, sendFirstMessage } from '../../functions/mainFunctions';
import { useStateValue } from '../../context/StateProvider';
import { actionTypes } from '../../context/reducer';
import fondo from '../../img/flyer-finfitt.png';


const WelcomeMessage = ()=>{
    const [toNumber, setToNumber] = useState("");
    const [{backImage}, dispatch] = useStateValue();
    const fromNumber = "105607215755407";
    const token = 'EAAU4PYUSKJ8BAAVdUqwvfKqvpQlivv2wvZAn0wiahSmOl9AHI5XEZBgNip9414N55JpXCIjkPHVSGjMsgjkcER7Q7fdltnaOlj3bnrNiz2WMu4Kl6bmFpZCLZBcd7RXSkqvAPVRRrW3hMBWeZBdCbYwWvGBOZBhwDjOYk5r3QSYcJqzuW1N3IGRqFtM0qKYyg8wk7KVZAhNqQZDZD';

    useEffect(()=>{
        dispatch({
            type: actionTypes.SET_BACK_IMAGE,
            backImage:fondo
        });
        localStorage.setItem('backImage',JSON.stringify(fondo));
    },[]);
    

    return (
        <div>
            <h2>Mensajes de bienvenida para cada cliente</h2>
            <div>
                <label>Ingresa el numero de WhatsApp por favor:</label>
                <br/><br/>
                <input type='text' placeholder='Escriba numero aca' value={toNumber} onChange={(e)=>{return setToNumber(e.target.value)}} />
                <br/><br/>
                <div className='btns-container'>
                    <Link className='go-whapp-adm' to='/whatsapp-adm'>Administrador WhatsApp</Link>
                    <button className='send-btn' onClick={()=>sendGreetingMsg(fromNumber,toNumber,token)}>Enviar Saludo</button>
                    <button className='send-btn' onClick={()=>sendFirstMessage(fromNumber,toNumber,token)}>Enviar Info inicial</button>
                    <button className='send-btn' onClick={()=>sendWelcomeMessage(fromNumber,toNumber,token)}>Enviar Pregunta de Depto</button>
                </div>
            </div>
        </div>
    )
};

export default WelcomeMessage;