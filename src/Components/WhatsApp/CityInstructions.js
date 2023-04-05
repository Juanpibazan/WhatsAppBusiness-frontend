import React, {useState, useEffect} from 'react';
import axios from 'axios';
import {Link, useLocation} from 'react-router-dom';

import {departments} from '../../templateMsgs/cities';
import { sendDeptFirstMsg } from '../../functions/mainFunctions';
import { lpzMsgs, sczMsgs, cbbaMsgs, otherMsgs } from '../../templateMsgs/cityMsgs';

const CityInstructions = ()=>{
    const [selectedDept, setSelectedDept]= useState('');
    const [toNumber, setToNUmber]= useState('');
    const fromNumber = "105607215755407";
    const token = 'EAAU4PYUSKJ8BANZCZCvIp7EdZCLR1dmerJ5h7n5GApU4TwRfxF8H2Y27Vz3mSvH15JdCjH1KNCrijskY0y3VLkFeRZByGmaaRr3ZCXAWWeggP3rvUf4H5gRKHtRD7ZALEtXO9X5rxFmuM3QBvyaazuZBcCBZB9F0WT12VjLnP6FJqxHY6BID8Y19X1MZBegVdLKt3h2N5moaMKAZDZD';

    const location = useLocation();
    useEffect(()=>{
        console.log(location);
    },[])

    const sendCityMsg = async (from,to,token,selectedDept)=>{
        if(selectedDept==='La Paz'){
            await sendDeptFirstMsg(from,to,token,lpzMsgs.first);
        } else if(selectedDept==='Santa Cruz'){
            await sendDeptFirstMsg(from,to,token,sczMsgs.first);
        } else if(selectedDept==='Cochabamba'){
            await sendDeptFirstMsg(from,to,token,cbbaMsgs.first);
        } else{
            await sendDeptFirstMsg(from,to,token,otherMsgs.first);
        }
    }

    return (
        <div>
            <h2 style={{color:'#019d4d'}}>Instrucciones para entrega/delivery por ciudad</h2>    
            <div style={{gap:'10px'}}>
                <label style={{fontWeight:'bold',color:'#019d4d'}}>Selecciona el departamento al que quieres enviar las instrucciones de entrega/delivery:</label>
                <br /><br />
                <select style={{textAlign:'center'}} onChange={(e)=>setSelectedDept(e.target.value)}>
                    {departments.map((department)=>{
                        return (
                            <option key={department.id} value={department.name}>{department.name}</option>
                        )
                    })}
                </select>
                <br /><br/>
                <label style={{fontWeight:'bold',color:'#019d4d'}}>Introduce el numero de whatsapp:</label>
                <br /><br/>
                <input type='text' placeholder='WhatsApp #' value={toNumber} onChange={(e)=>setToNUmber(e.target.value)} />
                <br /><br/>
                <div className='btns-container'>
                    <Link className='go-whapp-adm' to='/whatsapp-adm'>Administrador WhatsApp</Link>
                    <button className='send-btn' onClick={()=>sendCityMsg(fromNumber,toNumber,token,selectedDept)}>Enviar</button>
                </div>

            </div>
        </div>
    )
};

export default CityInstructions;