import Classes from "./ChatBubble.module.css";
import React from "react";
import {useDispatch, useSelector} from "react-redux";
import {deleteMessage} from "../../../../../../redux/DialogsReducer/dialogs-reducer";

const ChatBubble = ({chatId, messageId}) => {
  const dispatch = useDispatch();
  const chats = useSelector(state => state.dialogs.chats);
  const currentChat = chats.find(chat => chat.chatId === chatId);
  const message = currentChat.messages.find(message => message.id === messageId);

  const onDeleteMessage = (chatId, messageId) => {
    const confirmDelete = window.confirm(`Are you sure you want to delete the message?`);
    if (confirmDelete) {
      dispatch(deleteMessage({ chatId, messageId }));
    }
  }

  return (
    <li className={Classes.chatItem}>
      <div className={Classes.messageWrapper}>
        <div className={Classes.messageContent}>
          <img className={Classes.avatar} src={message.avatar} alt="avatar"/>
          <div className={Classes.messageInfo}>
            <span>{message.name}</span>
            <div className={Classes.textContent}>
              <span>{message.message}</span>
              <span className={Classes.data}>{message.time}</span>
            </div>
          </div>
        </div>
        <div className={Classes.delete_btn}>
          <button onClick={()=>{onDeleteMessage(chatId, message.id)}}>Delete</button>
        </div>
      </div>
    </li>
  )
}

export default ChatBubble;
