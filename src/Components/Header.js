import React, { useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';

import Logo from '../img/finfittLogo.jpg';
import menu from '../img/blue-menu.png';

import { useStateValue } from '../context/StateProvider';
import { actionTypes } from '../context/reducer';

const Header = ()=>{
    const [{backImage,user}, dispatch] = useStateValue();
    const location = useLocation();
    const navigate = useNavigate();
    useEffect(()=>{
        
        console.log('showing backimage from context: ',backImage);
    },[location]);

    const logOut = ()=>{
        dispatch({
            type:actionTypes.SET_USER,
            user: null
        });
        localStorage.removeItem('user');
        alert('Log Out exitoso');
        return navigate('/login');
        window.location('http://localhost:3000/');
    };
    return (
        <div>
            <nav className='nav-bar'>
                <div onClick={()=>window.location='/'} className='logo-container'>
                    <img width='100px' height='100px' style={{borderRadius:'50%',cursor:'pointer'}} src={Logo} />
                </div>
                <div className='navlist-container'>
                    <div className='menu-container'>
                        <img width='40px' height='40px' src={menu} />
                    </div>
                    <ul className='nav-list'>
                        <li><Link style={ {color:'#fff'}} to='/'>Inicio</Link></li>
                        <li><Link style={{color:'#fff'}} to='/'>Producto</Link></li>
                        <li><Link style={{color:'#fff'}} to='/'>Nosotros</Link></li>
                        <li><Link style={{color:'#fff'}} to='/'>Contacto</Link></li>
                        {user && (
                            <div>
                                <li style={{marginTop:'20px',marginBottom:'35px'}}><Link style={{backgroundColor:'#019d4d',border:'2px solid #000',padding:'10px 15px',borderRadius:'12px',boxShadow:'0px 3px 0px #000'}} to='/whatsapp-adm'>Modo Admin</Link></li>
                                <li><Link style={{backgroundColor:'#3e64fa',border:'2px solid #000',padding:'10px 15px',borderRadius:'12px',boxShadow:'0px 3px 0px #000'}} onClick={()=>logOut()}>Log Out</Link></li>
                            </div>
                            )}
                        {!user && <li><Link style={{backgroundColor:'#3e64fa',border:'2px solid #000',padding:'10px 15px',borderRadius:'12px',boxShadow:'0px 3px 0px #000'}} to='/login'>Iniciar sesión</Link></li>}
                    </ul>

                </div>
            </nav>
        </div>
    )
};

export default Header;