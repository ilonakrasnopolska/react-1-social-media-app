import Classes from "./UsersList.module.css";
import React from "react";
import DialogUser from "./DialogUser/DialogUser";


const UsersList = (props) => {
  const usersElements = props.users.map(el =>
    <DialogUser url={el.url} name={el.name} src={el.avatar} key={el.userId}/>)
  return (
    <section className="users section">
      <ul className={Classes.list}>
        {usersElements}
      </ul>
    </section>
  )
}

export default UsersList;
