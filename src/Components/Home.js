import React from 'react';
import { PopupButton } from 'react-calendly';


const Home = ()=>{
    return (
        <div>
            <div className='calendly-container'>
                <PopupButton url='https://calendly.com/coding_is_giving'
                rootElement={document.getElementById('root')}
                text='Desea Agendarse?'
                />
            </div>

        </div>
    )
};

export default Home;