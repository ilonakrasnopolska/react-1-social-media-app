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

  // Отображать список только если есть текст в поле поиска
  const shouldDisplayUserList = searchUserText.length > 0;

  return (
    <div className={Classes.box}>
      <form className={Classes.form}>
        <input className={Classes.input}
               value={searchUserText}
               onChange={onTextChange}
               type="text"
               placeholder="Find user..."/>
      </form>
      {shouldDisplayUserList && (
        <UserSearchDropdown inShowUserList={shouldDisplayUserList}
                            filteredContacts={filteredContacts} />
      )}
    </div>
  );
}

export default CreateNewChat;
