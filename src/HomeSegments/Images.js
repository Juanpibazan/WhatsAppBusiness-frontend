import React, {useState, useEffect} from 'react';
import { RxAvatar } from 'react-icons/rx';

import cinturas_reales from '../img/cinturas_reales.jpg';
import plan_slim from '../img/plan_slim.jpg';
import metas_reales from '../img/metas_reales.jpg';

const Images = ()=>{
    return (
        <div id='images'>
            <h1 style={{textAlign:'center',marginBottom:'50px'}}>Metas reales...cuerpos reales</h1>
            <div className='images-container'>
                <div>
                    <img style={{width:'100%',height:'200px'}} src={cinturas_reales} />
                </div>
                <div>
                    <img style={{width:'100%',height:'200px'}} src={plan_slim} />
                </div>
                <div>
                    <img style={{width:'100%',height:'200px'}} src={metas_reales} />
                </div>
                <div>
                    <img style={{width:'100%',height:'200px'}} src={cinturas_reales} />
                </div>
                <div>
                    <img style={{width:'100%',height:'200px'}} src={plan_slim} />
                </div>
                <div>
                    <img style={{width:'100%',height:'200px'}} src={metas_reales} />
                </div>

            </div>

        </div>
    )
};

export default Images;