import React from "react";
import Classes from './User.module.css';
import UserInfo from "../../../../common/UserInfo/UserInfo";
import Avatar from "../../../../common/Avatar";

const User = ({userData, t}) => {
  const {avatar, name} = userData;
  return (
    <section className='user section'>
      <article className={Classes.content}>
        <Avatar src={String(avatar)} alt="Avatar" className={Classes.avatar}/>
        <div className={Classes.about}>
          <h1>{name}</h1>
          <UserInfo userData={userData} Classes={Classes} t={t}/>
        </div>
      </article>
    </section>
  );
}

export default User;
