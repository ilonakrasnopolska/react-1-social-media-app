import Classes from "./CreateNewChat.module.css";
import React from "react";
import UserSearchDropdown from "./UserSearchDropdown/UserSearchDropdown";
import {useInputHandlers} from "../../../../../../../hooks/useInputHandlers";
import {updateSearchUserText} from "../../../../../../../../redux/DialogsReducer/dialogs-reducer";


const CreateNewChat = ({searchUserText, filteredContacts}) => {
  const {useTextChangeHandlers} = useInputHandlers(updateSearchUserText);
  return (
    <div className={Classes.box}>
      <h3 className={Classes.title}>Create a new chat:</h3>
      <input
        id='create-chat'
        className={Classes.input}
        value={searchUserText}
        onChange={useTextChangeHandlers}
        type="text"
        placeholder="Find user..."/>
      {searchUserText.length > 0 && (
        <UserSearchDropdown inShowUserList={true} filteredContacts={filteredContacts} />
      )}
    </div>
  );
}

export default CreateNewChat;
