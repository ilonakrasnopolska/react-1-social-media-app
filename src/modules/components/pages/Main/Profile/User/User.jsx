import React from "react";
import Classes from "./User.module.css"; // Импорт стилей для компонента User
import UserInfo from "../../../../common/UserInfo"; // Компонент, который отображает информацию о пользователе
import Preloader from "../../../../common/Preloader/Preloader";
import ImageWithLoader from "../../../../common/ImageWithLoader/ImageWithLoader";
import UserActions from "./UserActions";

const User = ({ userData, isLoading, t, isOwnProfile }) => {
  return (
    <section className="user section">
      <article
        className={`${Classes.content} ${
          isLoading && Object.keys(userData).length === 0
            ? Classes.centeredLoader
            : ""
        }`}
      >
        {isLoading && Object.keys(userData).length === 0 ? (
          <Preloader />
        ) : (
          <>
            {/* Если данные загружены, отображаем аватар и информацию о пользователе */}
            <ImageWithLoader
              src={String(userData.avatar)}
              alt="Avatar"
              className={Classes.avatar}
            />
            <div className={Classes.about}>
              <h1>{userData.name}</h1>
              <UserInfo userData={userData} Classes={Classes} t={t} />{" "}
              {!isOwnProfile && <UserActions Classes={Classes} t={t}/> }
            </div>
          </>
        )}
      </article>
    </section>
  );
};

export default User;
