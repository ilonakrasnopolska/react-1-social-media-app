import Classes from "./UsersList.module.css";
import React from "react";
import DialogUser from "./DialogUser/DialogUser";

const UsersList = (props) => {
  return (
    <section className="users section">
        <ul className={Classes.list}>
          <DialogUser name='Mark' />
          <DialogUser name='Vikky' />
          <DialogUser name='Sunny' />
          <DialogUser name='Phillip' />
          <DialogUser name='Elon' />
          <DialogUser name='Sakura' />
          <DialogUser name='Ino' />
        </ul>
    </section>
  )
}

export default UsersList;
