import React from "react";
import { Link } from "react-router-dom";
import fbLogo from '../img/fb.png';
import igLogo from '../img/ig.png';
import {PopupButton} from 'react-calendly';

const Footer = ()=>{
    return (
        <div style={{position:'relative',bottom:20,right:0,left:0}}>
            <div style={{display:'flex',justifyContent:'center',alignItems:'center',verticalAlign:'middle'}}>
                <Link target="_blank" to='https://facebook.com/Finfitt-Distribuidor-Autorizado-104706609124401'>
                    <img style={{width:'50px',height:'50px'}} src={fbLogo} />
                </Link>
                <Link target="_blank" to='https://www.instagram.com/fingrassbolivia'>
                    <img style={{width:'50px',height:'50px'}} src={igLogo} />
                </Link>
                <div className='calendly-container'>
                <PopupButton url='https://calendly.com/finfitt-distribuidor-autorizado'
                rootElement={document.getElementById('root')}
                text='Desea Agendarse?'
                />
            </div>

            </div>
        </div>
    )
};
export default Footer;