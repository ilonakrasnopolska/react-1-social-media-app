import Classes from "./CreateNewChat.module.css";
import React from "react";
import {useDispatch, useSelector} from "react-redux";
import {updateSearchUserText} from "../../../../../../redux/DialogsReducer/dialogs-reducer";
import UserSearchDropdown from "./UserSearchDropdown/UserSearchDropdown";


const CreateNewChat = () => {
  const dispatch = useDispatch();
  const searchUserText = useSelector(state => state.dialogs.searchUserText);
  const contacts = useSelector(state => state.dialogs.contacts);

  const onTextChange = (e) => {
    const text = e.target.value;
    dispatch(updateSearchUserText(text));
  };

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
