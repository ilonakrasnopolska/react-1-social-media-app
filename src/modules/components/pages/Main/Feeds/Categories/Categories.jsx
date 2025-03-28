import React from "react";
import Classes from "./Categories.module.css";

const Categories = ({
  categories,
  activeCategory,
  handleCategoryFilter,
  t,
}) => {
  return (
    <article className={Classes.categories}>
      <h3>{t("Filter")}</h3>
      <ul className={Classes.list}>
        {/* Проходим по каждому элементу в массиве categories */}
        {categories.map((el) => (
          <li key={el.id}>
            {/* Кнопка фильтра, которая при клике вызывает handleCategoryFilter с параметром title категории */}
            <button
              onClick={() => handleCategoryFilter(el.title)}
              className={`${Classes.button} ${
                el.title === activeCategory ? Classes.activeButton : ""
              }`}
            >
              {/* Отображаем название категории */}
              {t(el.title)}
            </button>
          </li>
        ))}
      </ul>
    </article>
  );
};

export default Categories;
