import React from "react";
import { Link } from "react-router-dom";
import fbLogo from '../img/fb.png';
import igLogo from '../img/ig.png';

const Footer = ()=>{
    return (
        <div style={{position:'absolute',bottom:0,right:0,left:0}}>
            <div style={{display:'flex',justifyContent:'center'}}>
                <Link target="_blank" to='https://facebook.com/FinFittWeightLossBolivia'>
                    <img style={{width:'50px',height:'50px'}} src={fbLogo} />
                </Link>
                <Link target="_blank" to='https://www.instagram.com/fingrassbolivia'>
                    <img style={{width:'50px',height:'50px'}} src={igLogo} />
                </Link>

            </div>
        </div>
    )
};
export default Footer;