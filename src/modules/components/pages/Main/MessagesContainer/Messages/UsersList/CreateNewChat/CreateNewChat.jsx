import Classes from "./CreateNewChat.module.css";
import React from "react";
import UserSearchDropdown from "./UserSearchDropdown/UserSearchDropdown";
import {useInputHandlers} from "../../../../../../../hooks/useInputHandlers";
import {updateSearchUserText} from "../../../../../../../../redux/DialogsReducer/dialogs-reducer";


const CreateNewChat = ({searchUserText, filteredContacts, t}) => {
  const {useTextChangeHandlers} = useInputHandlers(updateSearchUserText);
  return (
    <div className={Classes.box}>
      <input
        id='create-chat'
        className={Classes.input}
        value={searchUserText}
        onChange={useTextChangeHandlers}
        type="text"
        placeholder={t('FindUser')}/>
      {searchUserText.length > 0 && (
        <UserSearchDropdown inShowUserList={true} filteredContacts={filteredContacts} t={t}/>
      )}
    </div>
  );
}

export default CreateNewChat;
