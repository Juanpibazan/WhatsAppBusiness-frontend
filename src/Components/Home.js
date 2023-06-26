import React, {useState} from 'react';
import { PopupButton } from 'react-calendly';
import axios from 'axios';
//import eventsource from 'eventsource';
//import EventSource from 'eventsource';
import Testimonials from '../HomeSegments/Testimonials';
import Images from '../HomeSegments/Images';
import Product from '../HomeSegments/Product';

import cinturas_reales from '../img/cinturas_reales.jpg';
import plan_slim from '../img/plan_slim.jpg';
import metas_reales from '../img/metas_reales.jpg';

const imagesData = [
    {
        index: 0,
        src: cinturas_reales,
    },
    {
        index: 1,
        src: plan_slim,
    },
    {
        index: 2,
        src: metas_reales,
    }
];

const testimonialData = [
    {
        index: 0,
        author: 'Maria',
        body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
    },
    {
        index: 1,
        author:'Silvia',
        body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
    },
    {
        index: 2,
        author:'Julia',
        body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
    }
]

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
            <div >
                <Product />
                <Images images={imagesData}/>
                <Testimonials testimonios={testimonialData}/>
            </div>
        </div>
    )
};

export default Home;