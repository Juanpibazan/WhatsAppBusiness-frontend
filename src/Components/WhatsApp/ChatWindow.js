import React, {useState,useEffect} from 'react';
import io from 'socket.io-client';
import { socket } from '../../App';
import { useStateValue } from '../../context/StateProvider';


const ChatWindow = ()=>{

    const [receivedChats, setReceivedChats] = useState([]);
    const [sentChats, setSentChats] = useState([]);
    const [{chatToDisplay},dispatch] = useStateValue();

    useEffect(()=>{
        socket.on('server:render-chats',(data)=>{
            console.log('Both types of chats',data.sentChats);
            const filteredReceivedData = data.receivedChats.filter(item => item.from_id === chatToDisplay);
            const filteredSentData = data.sentChats.filter(item => item.to_id === chatToDisplay);
            console.log('filteredReceivedData',filteredReceivedData);
            console.log('chatToDisplay',chatToDisplay);
            setReceivedChats(filteredReceivedData);
            setSentChats(filteredSentData);
        });
    })



    return (
        <div>
            <div>
                <h4>{chatToDisplay}</h4>
            </div>
            <div style={{display:'flex',justifyContent:'space-between'}}>
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

        </div>
    )
};

export default ChatWindow;