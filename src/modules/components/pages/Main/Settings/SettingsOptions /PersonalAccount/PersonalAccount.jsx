import React from "react";
import CommonClasses from "../../Settings.module.css"; // Импортируем общий стиль для компонента
import Classes from "./PersonalAccount.module.css"; // Импортируем специфичный стиль для компонента
import UserInfo from "../../../../../common/UserInfo"; // Импортируем компонент для отображения данных пользователя
import Title from "../../../../../common/Title"; // Импортируем компонент для заголовка
import { usePersonalAccountData } from "../../../../../../hooks/useGetPersonalAccountData"; // Хук для получения данных пользователя
import { useFetchAndDispatch } from "../../../../../../hooks/useFetchAndDispatch"; // Хук для выполнения запросов и диспатча данных
import { fetchProfileData } from "../../../../../../../api/profileAPI"; // Функция для запроса данных профиля
import Preloader from "../../../../../common/Preloader/Preloader";
import useModal from "../../../../../../hooks/useModal";
import ImageWithLoader from "../../../../../common/ImageWithLoader/ImageWithLoader";
import ModalSignOut from "./ModalSignOut";
import useSignOut from "../../../../../../hooks/useSignOut";
import { NavLink } from "react-router-dom";

const PersonalAccount = ({ userInfo, isLoading, t }) => {
  const { isModalOpen, openModal, closeModal, confirm } = useModal();
  const signOut = useSignOut();
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
                <Preloader />
              </div>
            ) : (
              <div className={CommonClasses.card}>
                <div className={Classes.profile_data}>
                  <div className={Classes.image_wrapper}>
                    <ImageWithLoader
                      src={userData.avatar}
                      alt={"Avatar"}
                      className={CommonClasses.avatar}
                    />
                  </div>
                  {/* Отображение аватара */}
                  <div className={CommonClasses.about_user_edit}>
                    <h1>{userData.name}</h1> {/* Имя пользователя */}
                    <UserInfo
                      userData={userData}
                      Classes={Classes}
                      t={t}
                    />
                    {/* Отображение информации о пользователе */}
                    <NavLink
                      to={`/settings/${editPage.title}`}
                      className={Classes.button}
                    >
                      {t("Edit")}
                    </NavLink>
                  </div>
                </div>
                <div className={Classes.button_sign_out}>
                  <button onClick={() => openModal(null, signOut)}>
                    {t("SignOut")}
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Модалка для выхода */}
      <ModalSignOut
        isOpen={isModalOpen}
        closeModal={closeModal}
        onConfirmOut={confirm}
        t={t}
      />
    </section>
  );
};

export default PersonalAccount;
