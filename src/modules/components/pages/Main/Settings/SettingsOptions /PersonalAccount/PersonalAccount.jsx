import React from "react";
import { ClipLoader } from "react-spinners"; // Импортируем спиннер для отображения загрузки
import CommonClasses from "../../Settings.module.css"; // Импортируем общий стиль для компонента
import Classes from "./PersonalAccount.module.css"; // Импортируем специфичный стиль для компонента
import Avatar from "../../../../../common/Avatar"; // Импортируем компонент для отображения аватара
import NavButton from "../../../../../common/NavButton"; // Импортируем компонент кнопки навигации
import UserInfo from "../../../../../common/UserInfo/UserInfo"; // Импортируем компонент для отображения данных пользователя
import Title from "../../../../../common/Title"; // Импортируем компонент для заголовка
import { usePersonalAccountData } from "../../../../../../hooks/useGetPersonalAccountData"; // Хук для получения данных пользователя
import { useFetchAndDispatch } from "../../../../../../hooks/useFetchAndDispatch"; // Хук для выполнения запросов и диспатча данных
import { fetchProfileData } from "../../../../../../../api/profileAPI"; // Функция для запроса данных профиля

const PersonalAccount = ({ userInfo, isLoading, t }) => {
  useFetchAndDispatch(fetchProfileData(userInfo), [userInfo]);
  const { userData, editPage } = usePersonalAccountData(); // Получаем данные пользователя и страницу редактирования через хук

  return (
    <section className="personal section">
      <div className={CommonClasses.content}>
        <div className={CommonClasses.wrapper}>
          <Title CommonClasses={CommonClasses} text={t("PersonalSettings")} />{" "}
          {/* Заголовок для раздела */}
          <p className={CommonClasses.text}>{t("EditProfile")}</p>{" "}
          {/* Описание раздела */}
          <div className={CommonClasses.user_data_edit}>
            {isLoading ? (
              <div className={CommonClasses.card}>
                <div className={Classes.spinner}>
                  <ClipLoader color="#194770" size={50} />{" "}
                  {/* Показать спиннер при загрузке */}
                </div>
              </div>
            ) : (
              <div className={CommonClasses.card}>
                <Avatar
                  src={userData.avatar}
                  alt={"Avatar"}
                  className={CommonClasses.avatar}
                />{" "}
                {/* Отображение аватара */}
                <div className={CommonClasses.about_user_edit}>
                  <h1>{userData.name}</h1> {/* Имя пользователя */}
                  <UserInfo userData={userData} Classes={Classes} t={t} />{" "}
                  {/* Отображение информации о пользователе */}
                  <NavButton
                    to={`/settings/${editPage.id}`}
                    label={t("Edit")}
                    className={Classes.button}
                    classNavLink={Classes.link}
                  />
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default PersonalAccount;
