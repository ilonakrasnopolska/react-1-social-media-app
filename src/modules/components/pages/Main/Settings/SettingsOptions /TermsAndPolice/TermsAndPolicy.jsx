import React from "react";
import CommonClasses from "../../Settings.module.css"; // Импорт общих стилей для настроек
import Term from "./Term/Term"; // Импорт компонента для отображения условий
import Title from "../../../../../common/Title"; // Импорт компонента для отображения заголовка

const TermsAndPolicy = ({ terms, t }) => {
  return (
    <section className="terms section">
      {" "}
      {/* Секция для условий и политики */}
      <div className={CommonClasses.content}>
        {" "}
        {/* Контейнер для содержимого */}
        <div className={CommonClasses.wrapper}>
          {" "}
          {/* Обёртка для всех элементов внутри секции */}
          <Title
            CommonClasses={CommonClasses}
            text={t("TermsAndPolicy")}
          />{" "}
          {/* Заголовок с переводом */}
          <Term terms={terms} t={t} /> {/* Компонент для отображения условий */}
        </div>
      </div>
    </section>
  );
};

export default TermsAndPolicy;
