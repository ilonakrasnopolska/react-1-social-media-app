import Classes from "./CreateNewChat.module.css";
import React from "react";
import UserSearchDropdown from "./UserSearchDropdown/UserSearchDropdown";
import {useInputHandlers} from "../../../../../../../hooks/useInputHandlers";
import {updateSearchUserText} from "../../../../../../../../redux/DialogsReducer/dialogs-reducer";


const CreateNewChat = ({contacts, searchUserText}) => {
  const {useTextChangeHandlers} = useInputHandlers(updateSearchUserText);
  const filteredContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(searchUserText.toLowerCase())
  );

  const shouldDisplayUserList = searchUserText.length > 0;

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
      {shouldDisplayUserList && (
        <UserSearchDropdown inShowUserList={shouldDisplayUserList}
                            filteredContacts={filteredContacts}/>
      )}
    </div>
  );
}

export default CreateNewChat;
