import React, {useEffect, useState} from 'react';
import {Routes, Route, useLocation} from 'react-router-dom';
import io from 'socket.io-client';

import logo from './logo.svg';
import fondo from './img/fondo.jpg';
import fondo2 from './img/frontal-mujer-cinta.jpg';
import fondo3 from './img/joven-frontal.jpg';
import fondo4 from './img/gainedWeightWoman.jpg';
import fondoOficial from './img/officialBackground.jpg';
import './App.css';
import Header from './Components/Header';
import WhatsAppAdm from './Components/WhatsApp/WhatsAppAdm';
import WelcomeMessage from './Components/WhatsApp/WelcomeMessage';
import CityInstructions from './Components/WhatsApp/CityInstructions';
import { useStateValue } from './context/StateProvider';
import Home from './Components/Home';
import Footer from './Components/Footer';
import Login from './Components/Login.js';
import SignUp from './Components/SignUp';
import Chat from './Components/WhatsApp/Chat';
import Order from './Components/Order';

export const socket = io("wss://finfitt-test.azurewebsites.net",{
  transports: ['websocket'],
  rejectUnauthorized: false,
  closeOnBeforeunload: false
});

function App() {
  const [image, setImage] = useState();
  const [{backImage}, dispatch] = useStateValue();
  const location = useLocation();
  
  useEffect(()=>{
    setImage(backImage);
  },[location]);

  useEffect(()=>{
    console.log(backImage);
  },[image]);


  socket.on("connect_error", (err)=>{
    console.log(`connect_error due to ${err.message}`);
  })



  return (
    //<div className="App" style={location.pathname==='/whatsapp-adm' ? {backgroundImage:`url(${fondo})`,backgroundRepeat:'no-repeat',backgroundSize:'cover'} : (location.pathname==='/welcomeMsg' ? {backgroundImage:`url(${fondo2})`,backgroundRepeat:'no-repeat',backgroundSize:'cover'} : (location.pathname==='/' ? {backgroundImage:`url(${fondo4})`,backgroundRepeat:'no-repeat',backgroundSize:'cover'} : {backgroundImage:`url(${fondo3})`,backgroundRepeat:'no-repeat',backgroundSize:'cover'}))}>
    <div className="App" style={{backgroundImage:`url(${fondoOficial})`,backgroundRepeat:'no-repeat',backgroundSize:'cover',backgroundPosition:'center'}}>
      <Header />
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/whatsapp-adm'  element={<WhatsAppAdm />} />
        <Route path='/welcomeMsg' element={<WelcomeMessage />} />
        <Route path='/cityInstructions' element={<CityInstructions />} />
        <Route path='/login' element={<Login/>} />
        <Route path='/signup' element={<SignUp/>} />
        <Route path='/chat' element={<Chat />} />
        <Route path='/order' element={ <Order /> }/>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
