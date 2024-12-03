import React from "react";
import Classes from './User.module.css';
import {useSelector} from "react-redux";

const User = () => {
  const {avatar, name, dateOfBirth, city, gender, favAnime} =
    useSelector(state => state.profile.personalAccount.userData);

  return (
    <section className='user section'>
      <article className={Classes.content}>
        <img className={Classes.avatar} src={String(avatar)} alt="Avatar"/>
        <div className={Classes.about}>
          <h1>{name}</h1>
          <ul className={Classes.list}>
            <li className={Classes.item}>{`Day of Birth: ${dateOfBirth}`}</li>
            <li className={Classes.item}>{`City: ${city}`}</li>
            <li className={Classes.item}>{`Gender: ${gender}`}</li>
            <li className={Classes.item}>{`Favorite anime: ${favAnime}`}</li>
          </ul>
        </div>
      </article>
    </section>
  );
}

export default User;
