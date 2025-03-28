import React from "react";
import clsx from "clsx"; // Библиотека для условного применения классов
import { ThumbsUp, ThumbsDown } from "lucide-react"; // Импорт иконок лайка и дизлайка
import Classes from "../WatchAnime.module.css"; // Стили компонента
import useToggleAnimeToList from "../../../../../../../../hooks/useToggleAnimeToList"; // Хук для добавления аниме в список и переключения лайков
import { setRating } from "../../../../../../../.././../redux/AnimeReducer/anime-reducer"; // Действие для изменения рейтинга аниме

const Rating = ({ animeById, votes }) => {
  // Используем хук для управления лайками/дизлайками
  const { toggleAnimeList, activeLike } = useToggleAnimeToList(animeById);

  return (
    <div className={Classes.reactions}>
      {/* Кнопка для лайка */}
      <button
        onClick={() => toggleAnimeList(setRating, true)} // При клике добавляем лайк
        className={clsx(Classes.like_button, {
          [Classes.active]: activeLike === true, // Если активен лайк, применяем класс active
        })}
      >
        <ThumbsUp /> {/* Иконка лайка */}
        <span>{votes.likes}</span> {/* Отображаем количество лайков */}
      </button>

      {/* Кнопка для дизлайка */}
      <button
        onClick={() => toggleAnimeList(setRating, false)} // При клике добавляем дизлайк
        className={clsx(Classes.unlike_button, {
          [Classes.active]: activeLike === false, // Если активен дизлайк, применяем класс active
        })}
      >
        <ThumbsDown /> {/* Иконка дизлайка */}
        <span>{votes.dislikes}</span> {/* Отображаем количество дизлайков */}
      </button>
    </div>
  );
};

export default Rating;
