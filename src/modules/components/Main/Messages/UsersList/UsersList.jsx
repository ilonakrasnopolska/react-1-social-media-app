import Classes from "./UsersList.module.css";
import React from "react";
import DialogUser from "./DialogUser/DialogUser";
import avatars from "../../../../helpers/Avatars-src";

const UsersList = () => {
  return (
    <section className="users section">
        <ul className={Classes.list}>
          <DialogUser name='Mark' src={avatars.markPic} />
          <DialogUser name='Vikky' src={avatars.vikkyPic} />
          <DialogUser name='Sunny' src={avatars.sunnyPic} />
          <DialogUser name='Phillip' src={avatars.phillipPic} />
          <DialogUser name='Elon' src={avatars.elonPic} />
          <DialogUser name='Sakura' src={avatars.sakuraPic} />
          <DialogUser name='Ino' src={avatars.inoPic} />
        </ul>
    </section>
  )
}

export default UsersList;
