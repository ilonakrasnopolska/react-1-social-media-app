import React from "react";
import Classes from "./User.module.css"; // Импорт стилей для компонента User
import UserInfo from "../../../../common/UserInfo/UserInfo"; // Компонент, который отображает информацию о пользователе
import Avatar from "../../../../common/Avatar"; // Компонент для отображения аватара
import { useFetchAndDispatch } from "../../../../../hooks/useFetchAndDispatch"; // Хук для получения данных
import { fetchProfileData } from "../../../../../../api/profileAPI"; // Функция для получения данных профиля из API
import { ClipLoader } from "react-spinners"; // Компонент для отображения спиннера загрузки

const User = ({ userData, isLoading, t }) => {
  // Вызываем хук для получения и отправки данных профиля
  useFetchAndDispatch(() => fetchProfileData(userData));

  return (
    <section className="user section">
      <article className={Classes.content}>
        {isLoading && Object.keys(userData).length === 0 ? (
          // Если данные загружаются и userData пустой, показываем спиннер
          <div className={Classes.spinner}>
            <ClipLoader color="#194770" size={50} /> {/* Спиннер загрузки */}
          </div>
        ) : (
          <>
            {/* Если данные загружены, отображаем аватар и информацию о пользователе */}
            <Avatar
              src={String(userData.avatar)}
              alt="Avatar"
              className={Classes.avatar}
            />
            <div className={Classes.about}>
              <h1>{userData.name}</h1> {/* Отображаем имя пользователя */}
              <UserInfo userData={userData} Classes={Classes} t={t} />{" "}
              {/* Компонент, который отображает детали о пользователе */}
            </div>
          </>
        )}
      </article>
    </section>
  );
};

export default User;
