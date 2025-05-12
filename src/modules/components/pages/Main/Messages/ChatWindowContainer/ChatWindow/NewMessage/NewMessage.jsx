import Classes from "./NewMessage.module.css";
import React from "react";
import {SendMessageIcon} from "../../../../../../../../assets/SVG-icons";
import {updateNewMessageText} from '../../../../../../../../redux/DialogsReducer/dialogs-reducer';
import {useInputHandlers} from "../../../../../../../hooks/useInputHandlers";
import {useDialogsActions} from "../../../../../../../hooks/useDialogsActions";


const NewMessage = ({userId, newMessageText, t}) => {
  const {handleSendMessage} = useDialogsActions();
  const {useTextChangeHandlers, handleKeyDown} =
    useInputHandlers(updateNewMessageText, (e) => handleSendMessage(e, userId));

  return (
    <div className={Classes.container}>
      <form className={Classes.form}
            onSubmit={(e) => handleSendMessage(e, userId)}>
        <textarea
          name="message"
          value={newMessageText}
          onChange={useTextChangeHandlers}
          onKeyDown={handleKeyDown}
          className={Classes.textarea}
          placeholder={t('TypeMessage')}/>
        <button className={Classes.button} disabled={!newMessageText}>
          <SendMessageIcon/>
        </button>
      </form>
    </div>
  )
}

export default NewMessage;
