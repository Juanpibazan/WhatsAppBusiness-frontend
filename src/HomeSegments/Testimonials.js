import React, {useState, useEffect} from 'react';
import { RxAvatar } from 'react-icons/rx';
import { BsArrowLeftCircleFill, BsArrowRightCircleFill } from 'react-icons/bs'

const Testimonials = ({testimonios})=>{

    const [current, setCurrent] = useState(0);

    const nextSlide = ()=>{
        current===testimonios.length-1 ? setCurrent(0) : setCurrent(current+1);
    }
    const previousSlide = ()=>{
        current===0 ? setCurrent(testimonios.length-1) : setCurrent(current-1);
    }

    useEffect(()=>{
        setTimeout(()=>{
            nextSlide()
        },5000)
    });

    return (
        <div id='testimonials'>
            <h1 style={{textAlign:'center'}}>Testimonios</h1>
            <div className='testimonials-container'>
                <BsArrowLeftCircleFill className='arrow arrow-left' onClick={previousSlide} />
                {testimonios.map((testimonio, index)=>{
                    return (
                        <div key={index} className={index===current ? 'testimonial' : 'testimonial testimonial-hidden'}>
                            <div className='name-avatar-container' >
                                <h3>{testimonio.author}</h3>
                                <div>
                                    <RxAvatar style={{display:'flex',width:'100px',height:'100px',margin:0}}/>
                                </div>
                            </div>
                            <div style={{display:'flex',alignItems:'center',verticalAlign:'middle',lineHeight:'100%',width:'50%'}}>
                                <p>{testimonio.body}</p>
                            </div>
                        </div>
                    )
                })}
            {/*<div style={{display:'flex',justifyContent:'space-around'}}>
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
            </div>8*/}
            <BsArrowRightCircleFill  className='arrow arrow-right' onClick={nextSlide} />
            </div>
        </div>
    )
};

export default Testimonials;