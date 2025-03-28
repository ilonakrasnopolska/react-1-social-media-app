import React from "react";
import clsx from "clsx"; // Библиотека для динамического объединения классов
import { Star, Eye } from "lucide-react"; // Иконки для кнопок
import Classes from "./AnimeItem.module.css"; // Импорт стилей
import NavButton from "../../../../../common/NavButton"; // Кнопка для перехода по ссылке
import {
  toggleWatchList,
  toggleWatchedList,
} from "../../../../../../../redux/AnimeReducer/anime-reducer"; // Действия для управления списками
import useToggleAnimeToList from "../../../../../../hooks/useToggleAnimeToList"; // Хук для добавления в списки

// Компонент для отображения информации об одном аниме
const AnimeItem = ({ anime, t }) => {
  // Деструктуризация хука для работы с состоянием списка
  const { toggleAnimeList, isInWatchList, isInWatchedList } =
    useToggleAnimeToList(anime);

  return (
    <li className={Classes.item}>
      {/* Блок для обложки аниме */}
      <div className={Classes.poster_wrapper}>
        {/* Обложка аниме */}
        <img className={Classes.avatar} src={anime.cover} alt="Post avatar" />
        <h4>
          {/* Количество эпизодов */}
          {t("Episodes")} {anime.episodes}
        </h4>
        <span>
          {/* Дата выпуска аниме */}
          {t("ReleaseDate")} {anime.year}
        </span>
        {/* Блок с кнопками для добавления в списки */}
        <div className={Classes.anime_actions}>
          <button
            onClick={() => toggleAnimeList(toggleWatchList)} // Добавление в список на просмотр
            className={clsx(Classes.watch_button, {
              // Динамическое применение класса активной кнопки
              [Classes.active]: isInWatchList,
            })}
          >
            <Star /> {/* Иконка для кнопки добавления в список на просмотр */}
          </button>
          <button
            onClick={() => toggleAnimeList(toggleWatchedList)} // Добавление в список просмотренных
            className={clsx(Classes.watched_button, {
              // Динамическое применение класса активной кнопки
              [Classes.active]: isInWatchedList,
            })}
          >
            <Eye /> {/* Иконка для кнопки добавления в список просмотренных */}
          </button>
        </div>
      </div>

      {/* Блок с описанием аниме */}
      <div className={Classes.content}>
        <div className={Classes.description}>
          <h3>{anime.name}</h3> {/* Название аниме */}
          <span>{anime.description}</span> {/* Описание аниме */}
        </div>
        {/* Кнопка для перехода на страницу просмотра аниме */}
        <NavButton
          to={anime.toWatchUrl}
          label={t("WatchNow")}
          className={Classes.button}
        />
      </div>
    </li>
  );
};

export default AnimeItem;
