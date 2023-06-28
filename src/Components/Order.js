import React, {useState,useEffect} from 'react';

const Order = ()=>{
    return (
        <div id='order'>
            <div>
                <label>Ingrese el numero del cliente</label><br />
                <input type='text' />
                <label>Ingrese la cantidad vendida</label><br />
                <input type='text' />
                <label>Seleccione la ciudad</label><br />
                <select>
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
                </select>
                <label>Seleccione la logistica para esta venta</label><br />
                <select>
                    <option>Engtrega Personal</option>
                    <option>Delivery</option>
                    <option>Envio</option>
                </select>
                <button>Guardar</button>
            </div>
        </div>
    )
};

export default Order;