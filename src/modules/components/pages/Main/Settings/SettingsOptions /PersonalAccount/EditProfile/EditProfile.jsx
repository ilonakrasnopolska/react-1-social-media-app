import React from "react";
import CommonClasses from "../../../Settings.module.css"; // Импорт общих стилей для настроек
import Classes from "./EditProfile.module.css"; // Локальные стили для страницы редактирования профиля
import EditForm from "./EditForm/EditForm"; // Импорт формы редактирования
import Avatar from "../../../../../../common/Avatar"; // Импорт компонента для отображения аватара
import Title from "../../../../../../common/Title"; // Импорт компонента заголовка
import { useEditAccountForm } from "../../../../../../../hooks/useEditAccountForm"; // Хук для работы с редактированием аккаунта

const EditProfile = ({ personalAccount, t }) => {
  // Используем хук для получения данных пользователя и обработки ошибок
  const { userData, errors, isFormValid, handleSaveChanges } =
    useEditAccountForm(personalAccount);

  return (
    <section className="edit section">
      <div className={CommonClasses.content}>
        <div className={CommonClasses.wrapper}>
          {/* Заголовок страницы */}
          <Title CommonClasses={CommonClasses} text={t("PersonalSettings")} />
          <p className={CommonClasses.text}>{t("EditProfile")}</p>

          <div className={CommonClasses.user_data_edit}>
            <div className={CommonClasses.card}>
              {/* Отображаем аватар пользователя */}
              <Avatar
                src={userData.avatar}
                alt={"Avatar"}
                className={CommonClasses.avatar}
              />
              <div className={CommonClasses.about_user_edit}>
                {/* Форма редактирования данных */}
                <EditForm
                  personalAccount={personalAccount}
                  userData={userData}
                  errors={errors}
                  t={t}
                />
                {/* Кнопка сохранения изменений */}
                <button
                  onClick={handleSaveChanges} // Обработчик для сохранения изменений
                  className={Classes.button}
                  disabled={!isFormValid} // Отключаем кнопку, если форма невалидна
                >
                  {t("Save")} {/* Текст кнопки */}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EditProfile; // Экспортируем компонент для использования в других частях приложения
