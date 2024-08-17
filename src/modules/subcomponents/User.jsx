import React from "react";

const User = () => {
  return (
    <section className="section-user">
      <div className="user">
        <div className="user__avatar-wrapper">
          <img className="user__avatar" src="https://avatarfiles.alphacoders.com/375/thumb-1920-375546.png" alt="Avatar" />
        </div>
        <div className="user__info">
          Информация о пользователе
        </div>
      </div>
    </section>
  );
}

export default User;
