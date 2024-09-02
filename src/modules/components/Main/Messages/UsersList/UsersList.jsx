import Classes from "./UsersList.module.css";
import React from "react";
import DialogUser from "./DialogUser/DialogUser";
import {users} from "../../../../helpers/MessagesData";

let usersElements = users.map(el =>
  <DialogUser url={el.url} name={el.name} src={el.avatar} key={el.id} />)

const UsersList = () => {
  return (
    <section className="users section">
        <ul className={Classes.list}>
          {usersElements}
        </ul>
    </section>
  )
}

export default UsersList;
