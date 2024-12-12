import Classes from "./UserSearchDropdown.module.css";
import React from "react";
import {NavLink} from "react-router-dom";
import {useDialogsActions} from "../../../../../../../../hooks/useDialogsActions";


const UserSearchDropdown = ({filteredContacts}) => {
  const {handleStartChat} = useDialogsActions();

  return (
    <ul className={Classes.dropdown}>
        {filteredContacts.length === 0 ? (
          <li className={Classes.contact}>No users found</li>
        ) : (
          filteredContacts.map(contact => (
            <li key={contact.userId} className={Classes.contact}>
                <NavLink to={`/messages/${contact.userId}`}>
                  <button onClick={() => handleStartChat(contact)} className={Classes.button}>
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
