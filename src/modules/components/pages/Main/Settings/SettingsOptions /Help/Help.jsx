import React from "react";
import CommonClasses from "../../Settings.module.css"; // Импорт общих стилей
import Classes from "./Help.module.css"; // Импорт стилей для конкретного компонента Help
import {
  InputField,
  TextAreaField,
} from "../../../../../common/HelpForm/HelpForm"; // Импорт компонентов ввода данных (поля для имени и сообщения)
import Title from "../../../../../common/Title"; // Заголовок для страницы
import Button from "../../../../../common/Button"; // Кнопка отправки

const Help = ({
  requestUserNameText,
  requestMessageText,
  errors,
  handleInputChange,
  handleKeyDown,
  handleFormSubmit,
  t,
}) => {
  return (
    <section className="help section">
      {/* Контейнер для всего содержимого страницы */}
      <div className={CommonClasses.content}>
        <div className={CommonClasses.wrapper}>
          {/* Заголовок страницы, где текст подставляется через t() */}
          <Title CommonClasses={CommonClasses} text={t("ContactSupport")} />
          {/* Подсказка для пользователя, чтобы он знал, что нужно сделать */}
          <p className={CommonClasses.text}>{t("NeedHelp")}</p>

          {/* Форма для отправки запроса в поддержку */}
          <form className={Classes.contact_form} onSubmit={handleFormSubmit}>
            {/* Поле ввода имени пользователя */}
            <InputField
              value={requestUserNameText} // Значение поля (имя пользователя)
              onChange={handleInputChange("userName")} // Обработчик изменения значения
              onKeyDown={handleKeyDown} // Обработчик нажатия клавиши
              placeholder={t("YourName")} // Подсказка в поле
              errors={errors.userNameError} // Сообщение об ошибке для имени
              className={Classes.input_name} // Класс для стилизации поля
              Classes={Classes} // Пропс для использования в компоненте InputField
            />

            {/* Поле ввода сообщения от пользователя */}
            <TextAreaField
              value={requestMessageText} // Значение поля (текст сообщения)
              onChange={handleInputChange("message")} // Обработчик изменения значения
              onKeyDown={handleKeyDown} // Обработчик нажатия клавиши
              placeholder={t("YourMessage")} // Подсказка в поле
              errors={errors.messageError} // Сообщение об ошибке для сообщения
              className={Classes.textarea} // Класс для стилизации поля
              Classes={Classes} // Пропс для использования в компоненте TextAreaField
            />

            {/* Кнопка отправки формы */}
            <Button
              className={Classes.button} // Класс для кнопки
              onClick={handleFormSubmit} // Обработчик клика по кнопке (отправка формы)
              label={t("SendMessage")} // Текст на кнопке
            />
          </form>
        </div>
      </div>
    </section>
  );
};

export default Help;
