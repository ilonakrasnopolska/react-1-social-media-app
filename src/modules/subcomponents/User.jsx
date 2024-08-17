import React from "react";

const Profile = () => {
  return (
    <section className="section-profile">
      <div className="profile">
        <div className="profile__avatar-wrapper">
          <img className="profile__avatar" src="https://avatarfiles.alphacoders.com/375/thumb-1920-375546.png" alt="Avatar" />
        </div>
        <div className="profile__info">
          Информация о пользователе
        </div>
      </div>
    </section>
  );
}

export default Profile;
