import Classes from "./NewMessage.module.css";
import React from "react";
import {SendMessageIcon} from "../../../../../../assets/SVG-icons";
import {sendMessageActionCreator, updateNewMessageTextActionCreator} from "../../../../../../redux/DialogsReducer/dialogs-reducer"

const NewMessage = (props) => {
  const sendMessage = (event) => {
    event.preventDefault();
    props.dispatch(sendMessageActionCreator(props.chatId));
  };

  const onMessageChange = (e) => {
    const text = e.target.value;
    props.dispatch(updateNewMessageTextActionCreator(text));
  };
  return (
    <div className={Classes.container}>
      <form className={Classes.form} action="" method="POST">
        <textarea
          value={props.newMessageText}
          onChange={onMessageChange}
          className={Classes.textarea}
          placeholder="Type your message here..."/>
        <button onClick={sendMessage} className={Classes.button}>
          <SendMessageIcon/>
        </button>
      </form>
    </div>
  )
}

export default NewMessage;
