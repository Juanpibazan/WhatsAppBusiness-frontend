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
    const fromNumber = "104335012654762";
    const token = 'EAAI8wS4HjcIBAKM29FIhRjZBt9GNDsvpDtZAqPRbL5irq5xKqjUj9D9o4XpUXLxGRJDo7I1wQc42fgQMUZCo2uEyvuUZBw9VcB5FSpE9ZBtEbZCYqSSZBfKWNjRkzhlF7hJeKl3GusEt9EkI9kGfCnvgJMgnMiVO2D5V6qCqNmjMAZDZD';

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
                <label style={{color:'#fff'}}>Ingresa el numero de WhatsApp por favor:</label>
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