import React from "react";
import { SearchIcon } from "../../../../../../assets/SVG-icons"; // Импорт иконки поиска
import Classes from "./SearchAnime.module.css"; // Импорт стилей компонента

const SearchAnime = ({
  newSearchAnimeText,
  useTextChangeHandlers,
  useResetSearchQuery,
  t,
}) => {
  useResetSearchQuery(); // Сбросить поисковый запрос перед рендером компонента

  return (
    <div className={Classes.search}>
      <h1>{t("ChooseAnime")}</h1> {/* Заголовок с переводом */}
      <div className={Classes.input_wrapper}>
        <input
          id="anime-search-input" // Идентификатор поля ввода
          value={newSearchAnimeText} // Значение текстового поля
          className={Classes.input} // CSS класс для стилизации поля
          type="text" // Тип поля ввода (текст)
          onChange={useTextChangeHandlers} // Обработчик для изменений текста
          placeholder={t("SearchAnime")} // Плейсхолдер для поля ввода с переводом
        />
        <button className={Classes.search_btn}>
          <SearchIcon /> {/* Иконка поиска */}
        </button>
      </div>
    </div>
  );
};

export default SearchAnime;
