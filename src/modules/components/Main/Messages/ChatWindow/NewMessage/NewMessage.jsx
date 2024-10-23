import Classes from "./NewMessage.module.css";
import React from "react";
import {SendMessageIcon} from "../../../../../../assets/SVG-icons";
import {useDispatch, useSelector} from "react-redux";
import { sendMessage, updateNewMessageText } from '../../../../../../redux/DialogsReducer/dialogs-reducer'; // Убедись, что путь правильный


const NewMessage = (chatId) => {
  const dispatch = useDispatch();
  const newMessageText = useSelector(state => state.dialogs.newMessageText);
  const handleSendMessage = (event) => {
    event.preventDefault();
    dispatch(sendMessage(chatId));
  };

  const onMessageChange = (e) => {
    const text = e.target.value;
    dispatch(updateNewMessageText(text));
  };
  return (
    <div className={Classes.container}>
      <form className={Classes.form} action="" method="POST">
        <textarea
          value={newMessageText}
          onChange={onMessageChange}
          className={Classes.textarea}
          placeholder="Type your message here..."/>
        <button onClick={handleSendMessage} className={Classes.button}>
          <SendMessageIcon/>
        </button>
      </form>
    </div>
  )
}

export default NewMessage;
