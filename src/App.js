import React, {useEffect, useState} from 'react';
import {Routes, Route, useLocation} from 'react-router-dom';

import logo from './logo.svg';
import fondo from './img/fondo.jpg';
import fondo2 from './img/frontal-mujer-cinta.jpg';
import fondo3 from './img/joven-frontal.jpg';
import fondo4 from './img/gainedWeightWoman.jpg';
import './App.css';
import Header from './Components/Header';
import WhatsAppAdm from './Components/WhatsApp/WhatsAppAdm';
import WelcomeMessage from './Components/WhatsApp/WelcomeMessage';
import CityInstructions from './Components/WhatsApp/CityInstructions';
import { useStateValue } from './context/StateProvider';
import Home from './Components/Home';
import Footer from './Components/Footer';

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

  


  return (
    <div className="App" style={location.pathname==='/whatsapp-adm' ? {backgroundImage:`url(${fondo})`,backgroundRepeat:'no-repeat',backgroundSize:'cover'} : (location.pathname==='/welcomeMsg' ? {backgroundImage:`url(${fondo2})`,backgroundRepeat:'no-repeat',backgroundSize:'cover'} : (location.pathname==='/' ? {backgroundImage:`url(${fondo4})`,backgroundRepeat:'no-repeat',backgroundSize:'cover'} : {backgroundImage:`url(${fondo3})`,backgroundRepeat:'no-repeat',backgroundSize:'cover'}))}>
      <Header />
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/whatsapp-adm'  element={<WhatsAppAdm />} />
        <Route path='/welcomeMsg' element={<WelcomeMessage />} />
        <Route path='/cityInstructions' element={<CityInstructions />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
