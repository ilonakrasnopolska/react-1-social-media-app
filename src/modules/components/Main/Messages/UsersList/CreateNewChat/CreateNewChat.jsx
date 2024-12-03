import Classes from "./CreateNewChat.module.css";
import React from "react";
import UserSearchDropdown from "./UserSearchDropdown/UserSearchDropdown";
import {useDialogsHandler} from "../../../../../hooks/useDialogsHandler";
import {useSelector} from "react-redux";


const CreateNewChat = ({searchUserText}) => {
  const {onTextChange}  = useDialogsHandler();
  const contacts = useSelector(state => state.dialogs.contacts)
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
        onChange={onTextChange}
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
