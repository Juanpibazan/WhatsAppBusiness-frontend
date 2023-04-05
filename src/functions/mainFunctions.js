import axios from "axios";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { lpzMsgs } from "../templateMsgs/cityMsgs";

export const sendWelcomeMessage =  async (from,to,token)=>{
    //await sendFirstMessage(from,to,token)
    const response = await axios({
        method:"post",
        url: `https://graph.facebook.com/v16.0/${from}/messages?access_token=${token}`,
        data:{
            messaging_product: "whatsapp",
            recipient_type: "individual",
            /*context: {
            "message_id": message_id
            },*/
            to: to,
            type: "interactive",
            interactive:{
                type:"list",
                header:{
                    type: "text",
                    text: "Buenas."
                    /*type:"image",
                    image:{
                        link:"https://whappbusinessstorage.blob.core.windows.net/finfitt/finfittWelcome.JPG"
                    }*/
                },
                body:{
                    text:"De donde nos contacta?"
                    },
                footer:{
                        text:"Por favor presiona el botón 'Selecciona la ciudad'."
                    },
                action:{
                        button:"Selecciona la ciudad",
                        sections:[
                            {
                                title:"Ciudades",
                                rows:[{
                                    id:"LPZ",
                                    title:"La Paz"
                                },
                                {
                                    id:"SCZ",
                                    title:"Santa Cruz"
                                },
                                {
                                    id:"CBBA",
                                    title:"Cochabamba"
                                },
                                {
                                    id:"CHQ",
                                    title:"Chuquisaca"
                                },
                                {
                                    id:"TJA",
                                    title:"Tarija"
                                },
                                {
                                    id:"PO",
                                    title:"Potosi"
                                },
                                {
                                    id:"OR",
                                    title:"Oruro"
                                },
                                {
                                    id:"BE",
                                    title:"Beni"
                                },
                                {
                                    id:"PA",
                                    title:"Pando"
                                },
                                {
                                    id:"MAS5",
                                    title:"Otras"
                                }
    
                            ]
                            }
                        ]
                    }
                                    
            }},
            headers:{
                "Content-Type": "application/json"
                //,"Authorization": `Bearer ${token}`
            }
        });
        //await sendImage(from,to,token);
        console.log('This is the response: ', response);
        if (response.status===200){
            alert('Mensaje enviado correctamente');
        }
}

const sendImage = async (from,to,token)=>{
    await axios({
            method:"post",
            url: `https://graph.facebook.com/v16.0/${from}/messages?access_token=${token}`,
            data:{
                messaging_product: "whatsapp",
                to: to,
                type: "image",
                image:{
                    link:"https://whappbusinessstorage.blob.core.windows.net/finfitt/finfittWelcome.jpeg"
                }
            },
            headers:{
                "Content-Type": "application/json"
                //,"Authorization": `Bearer ${token}`
            }
        })
    };

export const sendFirstMessage = async (from,to,token)=>{
    const response = await axios({
        method:"post",
        url:`https://graph.facebook.com/v16.0/${from}/messages?access_token=${token}`,
        data:{
            messaging_product: "whatsapp",
            to: to,
            type: "text",
            text: {
            preview_url: false,
            body: `List@ Para Perder PESO, MEDIDAS Y TALLAS? 

Le explico: Nuestro producto tiene como principio activo *Sibutramina de 4ta generación de 15 mg* bajo el nombre comercial de *Fingrass* del laboratorio Novophar. 
Es un medicamento usado para tratar el sobrepeso y obesidad, aumenta la sensación de saciedad rápidamente, evitando que se ingieran alimentos en exceso y facilitando así la pérdida de peso. 
Así mismo aumenta la termogénesis, contribuyendo para la *pérdida de peso y volumen.*
            
Este medicamento NO contiene laxantes ni diuréticos por lo que No tiene Efecto Rebote 
            
NO es requisito hacer dieta ni ejercicios para ver resultados pero los mismo pueden potenciar el tiempo del tratamiento.
            
Se Reduce 2 kilos por semana y entre 6 a 10 kilos al mes en promedio al mes. 
            
Beneficios:
    ✅ Acelera el Metabolismo
    ✅ Inhibe el apetito
    ✅ Reduce la Ansiedad
    ✅ Quema Grasa
    ✅ Aporta Energía
    ✅ Evita Asimilación de la grasa ingerida.
    🚫 No tiene EFECTO REBOTE. 
    🚫 No tiene ningún efecto secundario 
    🚫 No son laxantes ni diuréticos como los demás productos. 
            
❌ CONTRAINDICADO para personas embarazadas y en período de lactancia❗
            
⚠️ PRODUCTO ORIGINAL ⚠️
            
El costo del tratamiento para un mes le sale *340 Bs*
Cada paquete contiene 30 cápsulas. (El tiempo de tratamiento es depende de cuando debe bajar) 
            
Hacemos seguimiento semanal online con endocrinólogos para garantizar resultados. 
            
Somos los *únicos distribuidores autorizados en Bolivia* hace 9 años.
Contamos con todos los registros correspondientes a la fecha incluidos agemed (regulador de medicamentos en Bolivia).
            
    🔹Entregas personales en La Paz. 
    🔹 Delivery en Santa Cruz y Cochabamba. 🏍️
    🔹 Se hacen envíos diarios a toda Bolivia. 📦🛫🚚
`
            }

        },
        headers:{
            "Content-Type": "application/json"
            //,"Authorization": `Bearer ${token}`
        }
    });
    if(response.status===200){
        alert('Mensaje enviado correctamente!');
    }
    };

export const sendDeptFirstMsg = async (from,to,token,cityMsg)=>{
    const response = await axios({
        method:"post",
        url:`https://graph.facebook.com/v16.0/${from}/messages?access_token=${token}`,
        data:{
            messaging_product: "whatsapp",
            to: to,
            type: "text",
            text: {
            preview_url: false,
            body: cityMsg
            }
        },
        headers:{
            "Content-Type": "application/json"
        }
        
    });
    if(response.status===200){
        alert('Mensaje enviado correctamente');
    }
};

export const sendGreetingMsg = async (from,to,token)=>{
 const response = await axios({
    method:'post',
    url:`https://graph.facebook.com/v16.0/${from}/messages?access_token=${token}`,
    data:{
        messaging_product: "whatsapp",
            to: to,
            type: "text",
            text: {
            preview_url: false,
            body: `Buenas.
Gracias por comunicarte con Finfitt Weight Loss Bolivia`
            }
    },
    headers:{
        "Content-Type": "application/json"
    }
 });
 console.log(response);
 if(response.status===200){
    const response2 = await sendImage(from,to,token);
    alert('Mensaje enviado correctamente!');
 }
};
