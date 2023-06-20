import React, {useState, useEffect} from 'react';
import { RxAvatar } from 'react-icons/rx';

const Testimonials = ()=>{
    return (
        <div id='testimonials'>
            <h1 style={{textAlign:'center'}}>Testimonios</h1>
            <div className='testimonials-container'>
            <div style={{display:'flex',justifyContent:'space-around'}}>
                <div className='name-avatar-container' >
                    <h3>Testimonio 1</h3>
                    <div>
                        <RxAvatar style={{display:'flex',width:'100px',height:'100px',margin:0}}/>
                    </div>
                </div>
                <div style={{display:'flex',alignItems:'center',verticalAlign:'middle',lineHeight:'100%',width:'50%'}}>
                    <p >Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                    </div>
            </div>
            <div style={{display:'flex',justifyContent:'space-around'}}>
                <div className='name-avatar-container' >
                    <h3>Testimonio 2</h3>
                    <div>
                        <RxAvatar style={{display:'flex',width:'100px',height:'100px'}}/>
                    </div>
                </div>
                <div style={{display:'flex',alignItems:'center',verticalAlign:'middle',lineHeight:'100%',width:'50%'}}>
                    <p >Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                    </div>
            </div>
            <div style={{display:'flex',justifyContent:'space-around'}}>
                <div className='name-avatar-container' >
                    <h3>Testimonio 3</h3>
                    <div>
                        <RxAvatar style={{display:'flex',width:'100px',height:'100px'}}/>
                    </div>
                </div>
                <div style={{display:'flex',alignItems:'center',verticalAlign:'middle',lineHeight:'100%',width:'50%'}}>
                    <p >Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                    </div>
            </div>
            </div>
        </div>
    )
};

export default Testimonials;