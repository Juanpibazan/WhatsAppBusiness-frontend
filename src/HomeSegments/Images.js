import React, {useState, useEffect} from 'react';
import { RxAvatar } from 'react-icons/rx';
import { BsArrowLeftCircleFill, BsArrowRightCircleFill } from 'react-icons/bs'





const Images = ({images})=>{

    const [slide, setSlide] = useState(0);

    const nextSlide = ()=>{
        slide===images.length-1 ? setSlide(0) : setSlide(slide+1);
    }
    const previousSlide = ()=>{
        slide===0 ? setSlide(images.length-1) : setSlide(slide-1);
    }

    useEffect(()=>{
        setTimeout(()=>{
            nextSlide()
        },5000)
    });

    return (
        <div id='images'>
            <h1 style={{textAlign:'center',marginBottom:'50px'}}>Metas reales...cuerpos reales</h1>
            <div className='images-container'>
                <BsArrowLeftCircleFill className='arrow arrow-left'  onClick={previousSlide} />
                {images.map((image, index)=>{
                    return (
                        <div key={index} className={index===slide ? 'slide' : 'slide slide-hidden'}>
                            <img style={{width:'100%',height:'100%'}} src={image.src} />
                        </div>
                    )
                })}
                {/*<div>
                    <img style={{width:'100%',height:'200px'}} src={metas_reales} />
                </div>*/}
                <BsArrowRightCircleFill className='arrow arrow-right' onClick={nextSlide} />

            </div>
            <span className='indicators'>
            {images.map((_,index)=>{
                    return (
                        <button key={index} className={index===slide ? 'indicator' : 'indicator indicator-inactive'} onClick={()=>setSlide(index)} ></button>
                    )
                })}
            </span>

        </div>
    )
};

export default Images;