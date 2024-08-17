import React from "react";

const User = () => {
  return (
    <section className="section-user">
      <article className="user">
        <div className="user__avatar-wrapper">
          <img className="user__avatar" src="https://avatarfiles.alphacoders.com/375/thumb-1920-375546.png" alt="Avatar" />
        </div>
        <div className="user__info">
          <h2 className="user__name">Ilona Sue</h2>
          <ul className="user__list">
            <li className="user__list-item">Day of Birth: 9 July.</li>
            <li className="user__list-item">City: Haifa.</li>
            <li className="user__list-item">Gender: Female.</li>
            <li className="user__list-item">Favorite anime: Naruto.</li>
          </ul>
        </div>
      </article>
    </section>
  );
}

export default User;
