import { useDispatch, useSelector } from "react-redux"; // Импортируем хук useDispatch для отправки действий и useSelector для получения состояния из Redux
import { useEffect, useState } from "react"; // Импортируем useEffect и useState для работы с состоянием и побочными эффектами

// Хук для добавления/удаления аниме из списка "Смотрю" и "Посмотрено"
const useToggleAnimeToList = (anime) => {
  const dispatch = useDispatch(); // Получаем функцию dispatch для отправки действий в Redux store

  // Получаем из состояния Redux списки "Смотрю" и "Посмотрено"
  const watchList = useSelector((state) => state.anime.watchList);
  const watchedList = useSelector((state) => state.anime.watchedList);

  // Состояния для отслеживания, находится ли аниме в этих списках
  const [isInWatchList, setIsInWatchList] = useState(false);
  const [isInWatchedList, setIsInWatchedList] = useState(false);

  // Состояние для активации рейтинга (например, для лайков или оценок)
  const [activeLike, setActiveLike] = useState(null);

  // useEffect для отслеживания, находится ли аниме в списках
  useEffect(() => {
    // Проверка наличия аниме в списке "Смотрю"
    setIsInWatchList(watchList.some((item) => item.id === anime.id));
    // Проверка наличия аниме в списке "Посмотрено"
    setIsInWatchedList(watchedList.some((item) => item.id === anime.id));
  }, [watchList, watchedList, anime.id]); // Зависимости: watchList, watchedList и anime.id

  // useEffect для установки рейтинга (лайк) если он существует
  useEffect(() => {
    if (anime.rating !== undefined) {
      setActiveLike(anime.rating); // Устанавливаем рейтинг в состояние
    }
  }, [anime]); // Зависимость: anime (когда изменяется рейтинг аниме)

  // Функция для добавления/удаления аниме из списка и изменения рейтинга
  const toggleAnimeList = (action, rating) => {
    if (rating != undefined) {
      // Если рейтинг существует, то отправляем действие с рейтингом
      dispatch(action({ animeObj: anime, rating: rating }));
      // Устанавливаем новый рейтинг (если он такой же, сбрасываем, если нет, то меняем)
      setActiveLike(rating === activeLike ? null : rating);
    } else {
      // Если рейтинга нет, то просто добавляем/удаляем из списка
      dispatch(action({ animeObj: anime }));
    }
  };

  // Возвращаем данные и функции для работы с ними
  return { toggleAnimeList, isInWatchList, isInWatchedList, activeLike };
};

export default useToggleAnimeToList;
