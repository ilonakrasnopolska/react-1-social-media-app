import React from "react";
import { useState } from "react";
import CommonClasses from "../../Settings.module.css"; // Импорт общих стилей
import Classes from "./Confidentiality.module.css"; // Импорт стилей для страницы конфиденциальности
import ConfidentialityList from "./ConfidentialityList/ConfidentialityList"; // Компонент списка конфиденциальности
import Button from "../../../../../common/Button"; // Импорт компонента кнопки
import Title from "../../../../../common/Title"; // Импорт компонента заголовка
import { useConfidentialityActions } from "../../../../../../hooks/useConfidentialityActions"; // Хук для работы с действиями конфиденциальности
import ModalSuccessMessage from "../../../../../common/ModalSuccessMessage/ModalSuccessMessage";

const Confidentiality = ({ confidentiality, t }) => {
  // Деструктуризация хука для получения функции сохранения настроек конфиденциальности
  const { savePrivacySettings } = useConfidentialityActions();
  const [isSavedVisible, setIsSavedVisible] = useState(false);

  const handleSave = (e) => {
    e.preventDefault();
    savePrivacySettings(e);

    setIsSavedVisible(true);
    setTimeout(() => setIsSavedVisible(false), 3000); // скрыть через 3 секунды
  };

  return (
    <section className="confidentiality section">
      {/* Контейнер для контента страницы конфиденциальности */}
      <div className={CommonClasses.content}>
        {/* Внешний контейнер для обертки */}
        <div className={CommonClasses.wrapper}>
          {/* Заголовок страницы */}
          <Title CommonClasses={CommonClasses} text={t("Confidentiality")} />

          {/* Описание страницы */}
          <p className={CommonClasses.text}>{t("ManagePrivacy")}</p>

          {/* Форма для управления настройками конфиденциальности */}
          <form className={Classes.form} onSubmit={handleSave}>
            {/* Список настроек конфиденциальности */}
            <ConfidentialityList confidentiality={confidentiality} t={t} />

            {/* Кнопка для сохранения изменений */}
            <Button
              className={Classes.button}
              onClick={handleSave} // Обработчик события для сохранения настроек
              label={t("Save")}
            />
          </form>
          <ModalSuccessMessage show={isSavedVisible} t={t} />
        </div>
      </div>
    </section>
  );
};

export default Confidentiality;
