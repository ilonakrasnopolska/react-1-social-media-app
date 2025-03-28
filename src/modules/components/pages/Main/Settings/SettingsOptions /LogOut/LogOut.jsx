import React from "react";
import CommonClasses from "../../Settings.module.css"; // Импорт общих стилей для страницы настроек
import Classes from "./LogOut.module.css"; // Импорт специфичных стилей для компонента LogOut
import Title from "../../../../../common/Title"; // Импорт компонента Title для отображения заголовка
import NavButton from "../../../../../common/NavButton"; // Импорт компонента NavButton для навигации

const LogOut = ({ logOut, t }) => {
  return (
    <section className="log section">
      {" "}
      {/* Обертка секции с классом "log" для оформления */}
      <div className={CommonClasses.content}>
        {" "}
        {/* Контейнер для основного контента */}
        <div className={CommonClasses.wrapper}>
          {" "}
          {/* Контейнер с оберткой */}
          <Title CommonClasses={CommonClasses} text={t("LogOut")} />{" "}
          {/* Заголовок с текстом для выхода */}
          <div className={Classes.btn_wrapper}>
            {" "}
            {/* Контейнер для кнопок */}
            {/* Кнопка "Нет" для отмены выхода */}
            <NavButton
              to={logOut.goBack.url}
              label={t("No")}
              className={Classes.button}
              classNavLink={Classes.link}
            />
            {/* Кнопка "Да" для подтверждения выхода */}
            <NavButton
              to={logOut.goOut.url}
              label={t("Yes")}
              className={Classes.button}
              classNavLink={Classes.link}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default LogOut;
