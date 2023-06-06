import React, {useState,useEffect} from 'react';
import io from 'socket.io-client';
import { socket } from '../../App';
import { useStateValue } from '../../context/StateProvider';


const ChatWindow = ()=>{

    const [chats, setChats] = useState([]);
    const [{chatToDisplay},dispatch] = useStateValue();

    useEffect(()=>{
        socket.on('server:render-chats',(data)=>{
            console.log(data);
            const filteredData = data.filter(item => item.from_id === chatToDisplay);
            console.log('fileteredData',filteredData);
            console.log('chatToDisplay',chatToDisplay);
            setChats(filteredData);
        });
    })



    return (
        <div>
            <div>
                <h4>{chatToDisplay}</h4>
            </div>
            <div>
                {chats.map((chat)=>{
                    return (
                        <div key={chat.pk} style={{marginBottom:'20px'}}>
                            <p style={{fontSize:'10px',margin:'0'}}>{chat.date_time}</p>
                            <p style={{margin:'0'}}>{chat.msg_body}</p>
                        </div>

                    )
                })
                    
                }
                <p></p>
            </div>
        </div>
    )
};

export default ChatWindow;