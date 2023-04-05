import React, { useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

import Logo from '../img/finfittLogo.jpg';
import menu from '../img/blue-menu.png';

import { useStateValue } from '../context/StateProvider';

const Header = ()=>{
    const [{backImage}, dispatch] = useStateValue();
    const location = useLocation();
    useEffect(()=>{
        
        console.log('showing backimage from context: ',backImage);
    },[location]);
    return (
        <div>
            <nav className='nav-bar'>
                <div className='logo-container'>
                    <img width='100px' height='100px' style={{borderRadius:'50%'}} src={Logo} />
                </div>
                <div className='navlist-container'>
                    <div className='menu-container'>
                        <img width='40px' height='40px' src={menu} />
                    </div>
                    <ul className='nav-list'>
                        <li><Link style={location.pathname==='/whatsapp-adm' ? {color:'#0315BB'} : (location.pathname==='/cityInstructions' ? {color:'#019d4d'} : {color:'#fff'})} to='/'>Inicio</Link></li>
                        <li><Link style={location.pathname==='/whatsapp-adm' ? {color:'#0315BB'} : (location.pathname==='/cityInstructions' ? {color:'#019d4d'} : {color:'#fff'})} to='/'>Producto</Link></li>
                        <li><Link style={location.pathname==='/whatsapp-adm' ? {color:'#0315BB'} : (location.pathname==='/cityInstructions' ? {color:'#019d4d'} : {color:'#fff'})} to='/'>Nosotros</Link></li>
                        <li><Link style={location.pathname==='/whatsapp-adm' ? {color:'#0315BB'} : (location.pathname==='/cityInstructions' ? {color:'#019d4d'} : {color:'#fff'})} to='/'>Contacto</Link></li>
                    </ul>
                </div>
            </nav>
        </div>
    )
};

export default Header;