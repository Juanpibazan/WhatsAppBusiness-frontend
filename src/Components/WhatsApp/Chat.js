import React, {useState,useEffect} from 'react';
import io from 'socket.io-client';
import { socket } from '../../App';
import ChatCard from './ChatCard';
import ChatWindow from './ChatWindow';
import axios from 'axios';

const Chat = ()=>{

    const [chatNames, setChatNames] = useState([]);
    const [chats, setChats] = useState([]);

    const fetchChats= async ()=>{
        const {data} = await axios({
            method:'get',
            url:'https://finfitt-test.azurewebsites.net/db/distinctFromIDs'
        });
        console.log(data);
        setChatNames(data);
    };

    useEffect(()=>{
        fetchChats()
    },[]);

    /*socket.on('server:render-chats',(data)=>{
        console.log(data);
        setChats(data);
    });*/

    return (
        <div style={{backgroundColor:'#fff',display:'flex',justifyContent:'space-around'}}>
            <div>
                List of chats
                {chatNames.map((chat)=>{
                    return(
                        <div key={chat.from_id}>
                            <ChatCard chat={chat}  />
                        </div>
                    )

                })}
                
            </div>
            <div style={{width:'70%'}}>
                Chat window
                        <div >
                            <ChatWindow />
                        </div>
            </div>
        </div>
    )
};

export default Chat;