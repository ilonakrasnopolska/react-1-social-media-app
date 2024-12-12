import Classes from "./NewMessage.module.css";
import React from "react";
import {SendMessageIcon} from "../../../../../../../../../redux/assets/SVG-icons";
import {updateNewMessageText} from '../../../../../../../../../redux/DialogsReducer/dialogs-reducer';
import {useInputHandlers} from "../../../../../../../../hooks/useInputHandlers";
import {useDialogsActions} from "../../../../../../../../hooks/useDialogsActions";


const NewMessage = ({chatId, newMessageText}) => {
  const {handleSendMessage} = useDialogsActions();
  const {useTextChangeHandlers, handleKeyDown} =
    useInputHandlers(updateNewMessageText, (e) => handleSendMessage(e, chatId));

  return (
    <div className={Classes.container}>
      <form className={Classes.form}
            onSubmit={(e) => handleSendMessage(e, chatId)}>
        <textarea
          name="message"
          value={newMessageText}
          onChange={useTextChangeHandlers}
          onKeyDown={handleKeyDown}
          className={Classes.textarea}
          placeholder="Type your message here..."/>
        <button className={Classes.button}>
          <SendMessageIcon/>
        </button>
      </form>
    </div>
  )
}

export default NewMessage;