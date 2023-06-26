import React, {useState,useEffect} from 'react';
import ProductImg from '../img/sibutramina.jpg';


const Product = ()=>{
    return (
        <div id='product'>
            <h1>Fingrass</h1>
            <h2>Sibutramina de 4ta generación de 15 mg</h2>
            <div>
                <img src={ProductImg} />
            </div>
            <p>Es un medicamento usado para tratar el sobrepeso y obesidad. Aumenta la sensación de saciedad rápidamente, evitando que se ingieran alimentos en exceso y facilitando así la pérdida de peso. Así mismo aumenta la termogénesis, contribuyendo para la pérdida de peso y volumen. 
            
            Se Reduce 2 kilos por semana y entre 6 a 10 kilos al mes en promedio al mes.<br />
                        
            ✅ Acelera el Metabolismo<br />
            ✅ Inhibe el apetito<br />
            ✅ Reduce la Ansiedad<br />
            ✅ Quema Grasa<br />
            ✅ Aporta Energía<br />
            ✅ Evita Asimilación de la grasa ingerida.<br />
            🚫 No tiene EFECTO REBOTE.<br />
            🚫 No tiene ningún efecto secundario.<br /> 
            🚫 No son laxantes ni diuréticos como los demás productos.<br />
            🚫 No es requisito hacer dieta ni ejercicios para ver resultados (los mismo pueden potenciar el tiempo del tratamiento).</p>
        </div>
    )
};

export default Product;