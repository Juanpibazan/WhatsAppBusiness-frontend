import React, {useEffect} from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

import SendIcon from '../../img/send.png';
import fondo from '../../img/fondo.jpg';
import { useStateValue } from '../../context/StateProvider';
import { actionTypes } from '../../context/reducer';

const WhatsAppAdm = ()=>{
    /*const location = useLocation();
    useEffect(()=>{
        console.log(location);
    },[])*/
    const [{backImage,user}, dispatch] = useStateValue();
    const navigate = useNavigate();
    useEffect(()=>{
        dispatch(
            {
                type: actionTypes.SET_BACK_IMAGE,
                backImage: fondo
            }
        );
        localStorage.setItem('backImage',JSON.stringify(fondo));
        if(user===null){
            return navigate('/login');
        }
    },[]);

    const changeWelcomeMsgBackImage = ()=>{
        dispatch({
            type: actionTypes.SET_BACK_IMAGE,
            backImage: fondo
        });
        return navigate ('/welcomeMsg');
    }
    return (
        <div className='WhatsAppAdm'>
            <h1>Administrador de mensajes de WhatsApp para FINFITT</h1>
            <div>
                <div className='operation-container' onClick={()=>{return changeWelcomeMsgBackImage()}} >
                    <div className='operation-subcontainer'>
                        <div>
                            <img width='50px' height='50px' src={SendIcon} />
                        </div>
                        <div className='operation-text-subcontainer'>
                            <h3>Operacion 1</h3>
                            <p>Enviar mensajes de bienvenida</p>
                        </div>
                    </div>
                </div>
                <div className='operation-container' onClick={()=> navigate('/cityInstructions')}>
                    <div className='operation-subcontainer'>
                        <div>
                            <img width='50px' height='50px' src={SendIcon} />
                        </div>
                        <div className='operation-text-subcontainer'>
                            <h3>Operacion 2</h3>
                            <p>Enviar instrucciones por departamento</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default WhatsAppAdm;