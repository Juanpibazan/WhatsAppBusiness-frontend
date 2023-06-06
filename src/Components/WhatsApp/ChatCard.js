import React, {useState,useEffect} from 'react';
import io from 'socket.io-client';
import { socket } from '../../App';

import { actionTypes } from '../../context/reducer';
import { useStateValue } from '../../context/StateProvider';


const ChatCard = ({chat})=>{

    const [selectedChat,setSelectedChat] = useState('');
    if(selectedChat!==''){
        console.log(selectedChat);
    }
    const [{chatToDisplay},dispatch] = useStateValue();

    /*useEffect(()=>{
        dispatch({
            type:actionTypes.SET_CHAT_TO_DISPLAY,
            chatToDisplay: selectedChat
        });
        localStorage.setItem('chatToDisplay',JSON.stringify(selectedChat));

    },[selectedChat]);*/

    const emitEvent= (id)=>{
        dispatch({
            type:actionTypes.SET_CHAT_TO_DISPLAY,
            chatToDisplay: id
        });
        localStorage.setItem('chatToDisplay',JSON.stringify(selectedChat));
        socket.emit('client:select-chat');
        return setSelectedChat(id);
    }

  

    return (
        <div>
            <h4 style={{cursor:'pointer'}} onClick={()=>emitEvent(chat.from_id)}>{chat.from_id}</h4>
        </div>
    )
};

export default ChatCard;