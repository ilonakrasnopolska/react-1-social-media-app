import React from "react";
import Classes from "./User.module.css"; // Импорт стилей для компонента User
import UserInfo from "../../../../common/UserInfo/UserInfo"; // Компонент, который отображает информацию о пользователе
import { useFetchAndDispatch } from "../../../../../hooks/useFetchAndDispatch"; // Хук для получения данных
import { fetchProfileData } from "../../../../../../api/profileAPI"; // Функция для получения данных профиля из API
import Preloader from "../../../../common/Preloader/Preloader";
import ImageWithLoader from "../../../../common/ImageWithLoader/ImageWithLoader";

const User = ({ userData, isLoading, t }) => {
  // Вызываем хук для получения и отправки данных профиля
  useFetchAndDispatch(fetchProfileData(userData));
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
            </div>
          </>
        )}
      </article>
    </section>
  );
};

export default User;
