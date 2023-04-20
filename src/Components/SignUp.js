import React, {useState,useEffect} from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

import { useStateValue } from '../context/StateProvider';


const SignUp = ()=>{
    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');
    const [fullName, setFullName] = useState('');
    const navigate = useNavigate();

    const register = async (fullName,email,password)=>{
        const response = await axios({
            method:'post',
            url:'https://finfitt-test.azurewebsites.net/db/users',
            data:{
                fullName,
                email,
                password
            },
            headers:{
                "Content-Type":"application/json",
                "Access-Control-Allow-Origin": "*",
                "Access-Control-Allow-Methods": 'HEAD, GET, POST, PUT, PATCH, DELETE',
                "Access-Control-Allow-Headers": 'Origin, Content-Type, X-Auth-Token'
            }
        });
        console.log(response);
        if(response.status===200){
            alert('Usuario registrado');
            return navigate('/whatsapp-adm');
        }
    };

    return (
        <div>
            <h2 style={{color:'#000'}}>Registrarse</h2>
            <div>
                <label>Nombre Completo</label>
                <br/>
                <input type='text' value={fullName} onChange={(e)=>setFullName(e.target.value)} />
                <br/>
                <label>Email</label>
                <br/>
                <input type='email' value={email} onChange={(e)=>setEmail(e.target.value)} />
                <br />
                <label>Password</label>
                <br/>
                <input type='password' value={password} onChange={(e)=>setPassword(e.target.value)} />
                <br/>
                <button onClick={()=>register(fullName,email,password)}>Registrarse</button>
            </div>
        </div>

    )
};

export default SignUp;