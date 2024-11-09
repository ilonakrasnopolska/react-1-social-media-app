import Classes from "./UserSearchDropdown.module.css";
import React from "react";
import {NavLink} from "react-router-dom";
import {useDispatch} from "react-redux";
import {startConversation, selectUser} from "../../../../../../../redux/DialogsReducer/dialogs-reducer";


const UserSearchDropdown = ({filteredContacts}) => {
  const dispatch = useDispatch();
  const onStartChat = (contact) => {
    dispatch(selectUser({ userId: contact.userId }));
    dispatch(startConversation(contact))
  }

  return (
    <ul className={Classes.dropdown}>
        {filteredContacts.length === 0 ? (
          <li className={Classes.contact}>No users found</li>
        ) : (
          filteredContacts.map(contact => (
            <li key={contact.userId} className={Classes.contact}>
                <NavLink to={`/messages/${contact.userId}`}>
                  <button onClick={() => onStartChat(contact)} className={Classes.button}>
                    <img className={Classes.avatar} src={contact.avatar} alt="Avatar"/>
                    <span className={Classes.name}>{contact.name}</span>
                  </button>
                </NavLink>
            </li>
          ))
        )}
    </ul>

  );
}

export default UserSearchDropdown;
