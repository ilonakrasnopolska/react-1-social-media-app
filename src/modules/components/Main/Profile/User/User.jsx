import React from "react";
import Classes from './User.module.css';

const User = () => {
  return (
    <section className='user section'>
      <article className={Classes.content}>
        <div>
          <img className={Classes.avatar} src="https://avatarfiles.alphacoders.com/375/thumb-1920-375546.png"
               alt="Avatar"/>
        </div>
        <div className={Classes.about}>
          <h1>Ilona Sue</h1>
          <ul className={Classes.list}>
            <li className={Classes.item}>Day of Birth: 9 July.</li>
            <li className={Classes.item}>City: Haifa.</li>
            <li className={Classes.item}>Gender: Female.</li>
            <li className={Classes.item}>Favorite anime: Naruto.</li>
          </ul>
        </div>
      </article>
    </section>
  );
}

export default User;
