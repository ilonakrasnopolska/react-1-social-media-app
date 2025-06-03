import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";

// Хук для добавления/удаления аниме из списков "Смотрю" и "Посмотрено"
const useToggleAnimeToList = (anime) => {
  const dispatch = useDispatch();

  // Получаем текущие списки из Redux
  const watchList = useSelector((state) => state.anime.watchList); // Список "Смотрю"
  const watchedList = useSelector((state) => state.anime.watchedList); // Список "Посмотрено"

  // Состояния: находится ли аниме в одном из списков
  const [isInWatchList, setIsInWatchList] = useState(false);
  const [isInWatchedList, setIsInWatchedList] = useState(false);

  // Лайк или оценка аниме (например, звезда, сердечко и т.д.)
  const [activeLike, setActiveLike] = useState(null);

  // Проверяем, есть ли текущее аниме в списках — и обновляем состояние
  useEffect(() => {
    setIsInWatchList(watchList.some((item) => item.id === anime.id));
    setIsInWatchedList(watchedList.some((item) => item.id === anime.id));
  }, [watchList, watchedList, anime.id]);

  // Устанавливаем активный лайк, если он есть в объекте аниме
  useEffect(() => {
    if (anime.rating !== undefined) {
      setActiveLike(anime.rating);
    }
  }, [anime]);

  /**
   * Основная функция: добавление/удаление аниме в список с передачей рейтинга
   * @param {Function} action — экшен Redux (например, добавить в "Смотрю")
   * @param {Number} rating — оценка, которую поставил пользователь (например, 5 звёзд)
   */
  const toggleAnimeList = (action, rating) => {
    // Отправляем экшен с нужными данными в store
    dispatch(action({ animeObj: anime, rating: rating }));

    // Если пользователь нажал на тот же рейтинг — убираем его
    if (rating !== undefined) {
      setActiveLike(rating === activeLike ? null : rating);
    }
  };

  // Возвращаем всё, что нужно компоненту: флаг наличия в списках и функция обработки
  return {
    toggleAnimeList, // Функция для добавления/удаления из списка
    isInWatchList, // Флаг: в списке "Смотрю"
    isInWatchedList, // Флаг: в списке "Посмотрено"
    activeLike, // Текущий рейтинг/оценка (если есть)
  };
};

export default useToggleAnimeToList;
