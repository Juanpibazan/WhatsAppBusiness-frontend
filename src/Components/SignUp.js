import React, {useState,useEffect} from 'react';
import axios from 'axios';

import { useStateValue } from '../context/StateProvider';


const SignUp = ()=>{
    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');
    const [fullName, setFullName] = useState('');

    const register = async (fullName,email,password)=>{
        console.log('hi');
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
                <button>Registrarse</button>
            </div>
        </div>

    )
};

export default SignUp;