import Classes from "./NewMessage.module.css";
import React from "react";
import {SendMessageIcon} from "../../../../../../assets/SVG-icons";
import {sendMessageActionCreator,updateNewMessageTextActionCreator} from "../../../../../../redux/state"

const NewMessage = (props) => {
  console.log(props)
  let newMessageElement = React.createRef();

  let sendMessage = (event) => {
    event.preventDefault();
    props.dispatch(sendMessageActionCreator(props.chatId));
  };

  let onMessageChange = () => {
    let text = newMessageElement.current.value;
    props.dispatch(updateNewMessageTextActionCreator(text));
  };
  return (
    <div className={Classes.container}>
      <form className={Classes.form} action="" method="POST">
        <textarea ref={newMessageElement}
                  value={props.newMessageText}
                  onChange={onMessageChange}
                  className={Classes.textarea}
                  placeholder="Type your message here..." />
        <button onClick={sendMessage} className={Classes.button}>
          <SendMessageIcon />
        </button>
      </form>
    </div>
  )
}

export default NewMessage;
