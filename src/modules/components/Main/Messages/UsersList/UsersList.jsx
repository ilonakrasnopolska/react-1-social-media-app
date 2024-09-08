import Classes from "./UsersList.module.css";
import React from "react";
import DialogUser from "./DialogUser/DialogUser";


const UsersList = (props) => {
  let usersElements = props.users.map(el =>
    <DialogUser url={el.url} name={el.name} src={el.avatar} key={el.id} />)
  return (
    <section className="users section">
        <ul className={Classes.list}>
          {usersElements}
        </ul>
    </section>
  )
}

export default UsersList;
