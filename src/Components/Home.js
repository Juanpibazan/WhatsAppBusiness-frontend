import React from 'react';
import { PopupButton } from 'react-calendly';


const Home = ()=>{
    return (
        <div>
            <div className='calendly-container'>
                <PopupButton url='https://calendly.com/finfitt-distribuidor-autorizado'
                rootElement={document.getElementById('root')}
                text='Desea Agendarse?'
                />
            </div>

        </div>
    )
};

export default Home;