import Classes from "./UserSearchDropdown.module.css";
import React from "react";
import {NavLink} from "react-router-dom";


const UserSearchDropdown = ({filteredContacts}) => {

  const onStartChat = (event) => {
    event.preventDefault();
  }

  return (
    <ul className={Classes.dropdown}>
        {filteredContacts.length === 0 ? (
          <li className={Classes.contact}>No users found</li>
        ) : (
          filteredContacts.map(contact => (
            <li key={contact.userId} className={Classes.contact}>
                <NavLink to={`/messages/${contact.userId}`}>
                  <button onClick={onStartChat} className={Classes.button}>
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
