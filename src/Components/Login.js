import React, {useState,useEffect} from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

import { actionTypes } from '../context/reducer';
import { useStateValue } from '../context/StateProvider';


const Login = ()=>{
    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');
    const navigate = useNavigate();
    const [{user}, dispatch] = useStateValue();

    const signin = async (email,password)=>{
        const response = await axios({
            method:'post',
            url:'https://finfitt-test.azurewebsites.net/db/users/login',
            data:{
                email,
                password
            },
            headers:{
                "Content-Type":"application/json",
                "Access-Control-Allow-Origin": "*",
                "Access-Control-Allow-Methods": 'HEAD, GET, POST, PUT, PATCH, DELETE',
                "Access-Control-Allow-Headers": 'Origin,  X-Requested-With, Content-Type, X-Auth-Token'
            }
        });
        console.log(response.data);
        if(response.status===200){
            dispatch({
                type: actionTypes.SET_USER,
                user: response.data.email
            });
            localStorage.setItem('user',JSON.stringify(response.data.email));
            alert('Bienvenid@');
            return navigate('/whatsapp-adm');
        }
    };

    return (
        <div>
            <h2 style={{color:'#fff',marginTop:'50px'}}>Iniciar Sesión</h2>
            <div className='login-container'>
                <label style={{color:'#fff'}}>Email</label>
                <br/>
                <input type='email' value={email} onChange={(e)=>setEmail(e.target.value)} />
                <br />
                <label style={{color:'#fff'}}>Password</label>
                <br/>
                <input type='password' value={password} onChange={(e)=>setPassword(e.target.value)} />
                <br/>
                <button className='login-btn' onClick={()=>signin(email,password)}>Iniciar sesión</button>
            </div>
        </div>

    )
};

export default Login;