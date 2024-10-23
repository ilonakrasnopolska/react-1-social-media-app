import Classes from "./UsersList.module.css";
import React from "react";
import DialogUser from "./DialogUser/DialogUser";
import { useSelector } from 'react-redux';


const UsersList = () => {
  const users = useSelector(state => state.dialogs.users);
  const usersElements = users.map(el =>
    <DialogUser userId={el.userId} key={el.userId}/>)
  return (
    <section className="users section">
      <ul className={Classes.list}>
        {usersElements}
      </ul>
    </section>
  )
}

export default UsersList;
