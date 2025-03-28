import React, { useContext } from "react";
import CommonClasses from "../../Settings.module.css"; // Стили для общих элементов
import Classes from "./Language.module.css"; // Стили для компонента Language
import Select from "react-select"; // Компонент для кастомного селекта
import { useLanguageSettings } from "../../../../../../hooks/useLanguageSettings"; // Хук для работы с настройками языка
import LanguageContext from "../../../../../../../contexts/LanguageContext"; // Контекст для изменения языка
import Title from "../../../../../common/Title"; // Компонент для заголовка
import Button from "../../../../../common/Button"; // Компонент кнопки

// Основной компонент для настроек языка интерфейса
const Language = ({ t }) => {
  const { options, selectedOption, handleChange, saveLanguage } =
    useLanguageSettings(); // Получаем настройки языка из хука
  const { changeLanguage } = useContext(LanguageContext); // Получаем функцию изменения языка из контекста

  return (
    <section className="language section">
      {" "}
      {/* Раздел настроек языка */}
      <div className={CommonClasses.content}>
        {" "}
        {/* Контейнер с контентом */}
        <div className={CommonClasses.wrapper}>
          {" "}
          {/* Обертка для настройки языка */}
          <div className={Classes.app_language}>
            <Title CommonClasses={Classes} text={t("LanguageSettings")} />{" "}
            {/* Заголовок */}
            <label>
              {t("InterfaceLanguage") + ":"} {/* Подпись для выбора языка */}
              <Select
                options={options} // Доступные опции для выбора языка
                value={selectedOption} // Текущий выбранный язык
                onChange={(selected) => handleChange(selected.value)} // Обработчик изменения языка
                className={Classes.reactSelect} // Класс для стилизации селекта
              />
            </label>
          </div>
          <Button
            className={Classes.button} // Класс для кнопки
            onClick={() => {
              saveLanguage(changeLanguage, selectedOption.value); // Сохранить выбранный язык
            }}
            label={t("SaveChanges")} // Текст кнопки
          />
        </div>
      </div>
    </section>
  );
};

export default Language;
