import React, {useState,useEffect} from 'react';
import axios from 'axios';

const Order = ()=>{

    const [phoneNumber,setPhoneNumber] = useState('+591xxxxxxxx');
    const [qty,setQty] = useState(0);
    const [city,setCity] = useState('');
    const [logistics,setLogistics] = useState('');

    const saveOrder = async ()=>{
        const response = await axios({
            method:'post',
            url:'https://finfitt-test.azurewebsites.net/db/orders',
            data:{
                phoneNumber,
                quantity: qty,
                city,
                logistics
            },
            headers:{
                "Content-Type":"application/json",
                "Access-Control-Allow-Origin": "*",
                "Access-Control-Allow-Methods": 'HEAD, GET, POST, PUT, PATCH, DELETE',
                "Access-Control-Allow-Headers": 'Origin,  X-Requested-With, Content-Type, X-Auth-Token'
            }
        });
        if(response.status==200){
            console.log('Orden guardada');
            alert('Orden guardada');
            //return navigate('/whatsapp-adm');
        }
    }
    
    return (
        <div id='order'>
            <div>
                <label>Ingrese el numero del cliente</label><br />
                <input type='text' value={phoneNumber} onChange={(e)=>setPhoneNumber(e.target.value)} /><br /><br />
                <label>Ingrese la cantidad vendida</label><br />
                <input type='text' value={qty} onChange={(e)=>setQty(e.target.value)} /><br /><br/>
                <label>Seleccione la ciudad</label><br />
                <select value={city} onChange={(e)=>setCity(e.target.value)}>
                    <option>La Paz</option>
                    <option>El Alto</option>
                    <option>Santa Cruz</option>
                    <option>Cochabamba</option>
                    <option>Potosi</option>
                    <option>Oruro</option>
                    <option>Sucre</option>
                    <option>Trinidad</option>
                    <option>Cobija</option>
                    <option>Tarija</option>
                </select><br /><br />
                <label>Seleccione la logistica para esta venta</label><br />
                <select value={logistics} onChange={(e)=>setLogistics(e.target.value)}>
                    <option>Engtrega Personal</option>
                    <option>Delivery</option>
                    <option>Envio</option>
                </select><br /><br />
                <button onClick={saveOrder}>Guardar</button>
            </div>
        </div>
    )
};

export default Order;