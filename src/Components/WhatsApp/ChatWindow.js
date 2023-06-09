import React, {useState,useEffect} from 'react';
import io from 'socket.io-client';
import { socket } from '../../App';
import { useStateValue } from '../../context/StateProvider';
import { sendSingleMsg } from '../../functions/mainFunctions';


const ChatWindow = ()=>{

    const [receivedChats, setReceivedChats] = useState([]);
    const [sentChats, setSentChats] = useState([]);
    const [{chatToDisplay},dispatch] = useStateValue();
    const [msg, setMsg] = useState('');

    const phone_number_id = '104335012654762';
    const to_id = chatToDisplay;
    const token = 'EAAI8wS4HjcIBAPjJ0twYfsW0JTlPwgI0KUv22CbxdiueDVVfGi7dXgWR80Iu5QZBZBQ8KZBJrJ88vrJD2tTAbwdZBZAriVOlcgtEKaGkBKXMppK78Ys29xVAs9QRp6ZBtuljgoulEgOZBjfkSQvkMl5quZBDkQPlipSUqAsEWWZAFRgZDZD';

    useEffect(()=>{
        socket.on('server:render-chats',(data)=>{
            console.log('Both types of chats',data);
            const filteredReceivedData = data.receivedChats.filter(item => item.from_id === chatToDisplay);
            const filteredSentData = data.sentChats.filter(item => item.to_id === chatToDisplay);
            console.log('filteredReceivedData',filteredReceivedData);
            console.log('chatToDisplay',chatToDisplay);
            setReceivedChats(filteredReceivedData);
            setSentChats(filteredSentData);
        });
    });

    const sendMsg = async (from,to,token,msg_body)=>{
        const response = await sendSingleMsg(from,to,token,msg_body);
        if (response.status===200){
            alert('Mensaje enviado');
            const id = response.data.messages[0].id;
            const dataToBeSent = {id,from,to,token,msg_body};
            socket.emit('client:singleMsg-sent',dataToBeSent);
        }
    }



    return (
        <div>
            <div>
                <h4>{chatToDisplay}</h4>
            </div>
            <div style={{display:'flex',justifyContent:'space-between',overflow:'scroll'}}>
                <div>
                    {receivedChats.map((chat)=>{
                        return (
                            <div key={chat.pk} style={{marginBottom:'20px'}}>
                                <p style={{fontSize:'10px',margin:'0'}}>{chat.date_time}</p>
                                <p style={{margin:'0'}}>{chat.msg_body}</p>
                            </div>

                        )
                    })
                        
                    }
                </div>
                <div>
                    {sentChats.map((chat)=>{
                        return (
                            <div key={chat.pk} style={{marginBottom:'20px'}}>
                                <p style={{fontSize:'10px',margin:'0'}}>{chat.date_time}</p>
                                <p style={{margin:'0'}}>{chat.msg_body}</p>
                            </div>
                        )
                    })}
                </div>
            </div>
            <div style={{display:'flex',justifyContent:'right'}}>
                <div style={{display:'flex',justifyContent:'space-around'}}>
                    <textarea value={msg} onChange={(e)=>setMsg(e.target.value)} />
                    <button onClick={()=> sendMsg(phone_number_id,to_id,token,msg)}>Send</button>
                </div>
            </div>
        </div>
    )
};

export default ChatWindow;