import React, {useState} from 'react';
import { PopupButton } from 'react-calendly';
import axios from 'axios';
//import eventsource from 'eventsource';
//import EventSource from 'eventsource';


const Home = ()=>{

    /*const startSSE = async ()=>{
        const {data} = await axios({
            method:'get',
            url:'https://finfitt-test.azurewebsites.net/db/sse',
            headers:{
                "Content-Type":"application/json",
                "Access-Control-Allow-Origin":"*"
            }
        });
        return data;
    };*/

    //const eventSourceInitDict = {headers: {"Access-Control-Allow-Origin":"*"}}; 
    //const eventSource = new EventSource('https://finfitt-test.azurewebsites.net/db/sse',eventSourceInitDict);

    /*const eventSource = new EventSource('https://finfitt-test.azurewebsites.net/db/sse',{withCredentials:true});
    console.log(eventSource.withCredentials);
    eventSource.addEventListener('message', (e)=>{
        try{
            console.log(e.data);
        }
        catch(err){
            console.log(err);
        }
    });*/


    return (
        <div>
            <div className='calendly-container'>
                <PopupButton url='https://calendly.com/finfitt-distribuidor-autorizado'
                rootElement={document.getElementById('root')}
                text='Desea Agendarse?'
                />
            </div>
            <div>
            </div>

        </div>
    )
};

export default Home;