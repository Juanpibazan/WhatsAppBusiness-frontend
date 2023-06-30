import React, {useState,useEffect} from 'react';
import axios from 'axios';
import dateAndTime from 'date-and-time';
import { useNavigate } from 'react-router-dom';
import {Chart} from 'react-chartjs-2';
import {Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend,Filler} from 'chart.js/auto';
ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend,Filler);

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
        //chart();
    }

    const currentDT = new Date();

    //const canvas = document.getElementById('chart');
    /*const chart = ()=> {
        //const canvasContext = document.getElementById('chart').getContext('2d');

            new Chart(document.getElementById('chart'),{
                type: 'bar',
                data:{
                    labels:dataByCity.map(row=>row.Ciudad),
                    datasets:[
                        {
                            label:'Ventas por Ciudad',
                            data: dataByCity.map(row=>row.Cantidad_Vendida)
                        }
                    ]
                }
            });
        };*/

    const chartbyCityData = {
        labels:dataByCity.map(row=>row.Ciudad),
        datasets:[
            {
                label:'Ventas por Ciudad',
                data: dataByCity.map(row=>row.Cantidad_Vendida)
            }
        ]
    };

    const chartbyClientData = {
        labels:dataByClient.map(row=>row.Cliente),
        datasets:[
            {
                label:'Ventas por Cliente',
                data: dataByClient.map(row=>row.Cantidad_Vendida)
            }
        ]
    };

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
                <div>
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
            <Chart className='chart' type='bar' data={chartbyCityData} />
            </div>
            )}
            {level==='cliente' && (
                <div>
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
                <Chart className='chart' type='bar' data={chartbyClientData} />
                </div>
            )}
                
            </div>
            
        </div>
    )
};

export default Stats;