import React, {useState,useEffect} from 'react';

import { useStateValue } from '../context/StateProvider';


const Login = ()=>{
    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');

    return (
        <div>
            <h2 style={{color:'#000'}}>Iniciar Sesión</h2>
            <div>
                <label>Email</label>
                <br/>
                <input type='email' value={email} onChange={(e)=>setEmail(e.target.value)} />
                <br />
                <label>Password</label>
                <br/>
                <input type='password' value={password} onChange={(e)=>setPassword(e.target.value)} />
                <br/>
                <button>Iniciar sesión</button>
            </div>
        </div>

    )
};

export default Login;