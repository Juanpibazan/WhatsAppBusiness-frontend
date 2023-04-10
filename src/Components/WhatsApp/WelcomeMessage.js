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
    const token = 'EAAU4PYUSKJ8BAJjYxQlJFG1DlZByZABlspCvHoN1aZAw0SX1fmsY2urLbjdOKFJ1Mn4roIRHAGexlaHzBQgyvYABuikTGHlp432UocscX2nuGXgqwjrw7Kvnr1Ien3o4NfqYugRFKcEdpQTU7PwsRSRpZA09ndkS1JUwxQwDD6qnacph2kAbGPmkayQqY6tP4KymieX6AAZDZD';

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