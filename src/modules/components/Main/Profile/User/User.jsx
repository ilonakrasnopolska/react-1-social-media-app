import React from "react";
import Classes from './User.module.css';
import {useSelector} from "react-redux";

const User = () => {
  const userData = useSelector(state => state.profile.personalAccount.userData);

  return (
    <section className='user section'>
      <article className={Classes.content}>
        <div>
          <img className={Classes.avatar} src={userData.avatar}
               alt="Avatar"/>
        </div>
        <div className={Classes.about}>
          <h1>{userData.name}</h1>
          <ul className={Classes.list}>
            <li className={Classes.item}>{`Day of Birth: ${userData.dayOfBirth}`}</li>
            <li className={Classes.item}>{`City: ${userData.city}`}</li>
            <li className={Classes.item}>{`Gender: ${userData.gender}`}</li>
            <li className={Classes.item}>{`Favorite anime: ${userData.favAnime}`}</li>
          </ul>
        </div>
      </article>
    </section>
  );
}

export default User;
