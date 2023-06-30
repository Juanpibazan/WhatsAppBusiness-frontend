import React, {useState,useEffect} from 'react';
import axios from 'axios';
import dateAndTime from 'date-and-time';
import { useNavigate } from 'react-router-dom';

const Stats = ()=>{

    const [dataByCity, setDataByCity] = useState([]);
    const [dataByClient, setDataByClient] = useState([]);
    const [oldDate,setOldDate] = useState('');
    const [youngDate,setYoungDate] = useState('');
    const [level,setLevel] = useState('ciudad');
    const navigate = useNavigate();

    const getDataGroupedByCity = async ()=>{
        try{
            const response = await axios({
                method:'post',
                url:'https://finfitt-test.azurewebsites.net/db/stats/groupbycity',
                data:{
                    oldDate,
                    youngDate
                },
                headers:{
                    "Content-Type":"application/json",
                    "Access-Control-Allow-Origin": "*",
                    "Access-Control-Allow-Methods": 'HEAD, GET, POST, PUT, PATCH, DELETE',
                    "Access-Control-Allow-Headers": 'Origin,  X-Requested-With, Content-Type, X-Auth-Token'
                }
            });
            if(response.status===200){
                console.log(response.data);
                setDataByCity(response.data);
            }
        } catch(err){
            console.log('Error: ',err);
        }

    };

    const getDataGroupedByClient = async ()=>{
        try{
            const response = await axios({
                method:'post',
                url:'https://finfitt-test.azurewebsites.net/db/stats/groupbyclient',
                data:{
                    oldDate,
                    youngDate
                },
                headers:{
                    "Content-Type":"application/json",
                    "Access-Control-Allow-Origin": "*",
                    "Access-Control-Allow-Methods": 'HEAD, GET, POST, PUT, PATCH, DELETE',
                    "Access-Control-Allow-Headers": 'Origin,  X-Requested-With, Content-Type, X-Auth-Token'
                }
            });
            if(response.status===200){
                console.log(response.data);
                setDataByClient(response.data);
            }
        } catch(err){
            console.log('Error: ',err);
        }

    };

    /*useEffect(()=>{
        getDataGroupedByCity();
    },[])*/

    const getData= ()=>{
        getDataGroupedByCity();
    }

    const currentDT = new Date();

    return (
        <div id='stats'>
            <div>
                <h4 style={{color:'#fff'}}>Seleccione el rango de fechas pars su informe</h4>
                <input type='date' min='2023-01-01'  max={dateAndTime.format(currentDT,'YYY-MM-DD')} value={oldDate} onChange={(e)=>setOldDate(e.target.value)} />
                <input type='date' min='2023-01-01'  max={dateAndTime.format(currentDT,'YYY-MM-DD')} value={dateAndTime.parse(youngDate,'YYYY-MM-DD')>=dateAndTime.parse(oldDate,'YYYY-MM-DD') ? youngDate : ''} onChange={(e)=>{dateAndTime.parse(e.target.value,'YYYY-MM-DD')>=dateAndTime.parse(oldDate,'YYYY-MM-DD') ? setYoungDate( e.target.value) : alert('La segunda fecha debe ser mayor a la primera')}} />
                <select value={level} onChange={(e)=>setLevel(e.target.value)}>
                    <option disabled={true}>Seleccione el nivel de granularidad</option>
                    <option>ciudad</option>
                    <option>cliente</option>
                </select>
            </div><br/>
            <button className='back-btn' onClick={()=>navigate('/order')}>Volver </button>
            <button className='generate-btn' onClick={level==='ciudad' ? getData : getDataGroupedByClient}>Generar informe</button>
            <div style={{marginTop:'1rem'}}>
            { level==='ciudad' && (
                <table className='table-container'>
                <th>Ciudad</th>
                <th>Cantidad Vendida</th>
                <tbody>
                {dataByCity.map((data, index)=>{
                    return (
                        <tr key={index}>
                            <td>{data.Ciudad}</td>
                            <td>{data.Cantidad_Vendida}</td>
                        </tr>
                    )
                })}
                </tbody>
            </table>
            )}
            {level==='cliente' && (
                <table className='table-container'>
                    <th>Ciudad</th>
                    <th>Cliente</th>
                    <th>Cantidad Vendida</th>
                    <tbody>
                    {dataByClient.map((data, index)=>{
                        return (
                            <tr key={index}>
                                <td>{data.Ciudad}</td>
                                <td>{data.Cliente}</td>
                                <td>{data.Cantidad_Vendida}</td>
                            </tr>
                        )
                    })}
                    </tbody>
                </table>
            )}
                
            </div>
        </div>
    )
};

export default Stats;