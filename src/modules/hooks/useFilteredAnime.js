import useData from "./useData";

// Кастомный хук для получения отфильтрованного списка аниме
const useFilteredAnime = (reducer) => {
  // Используем хук useData для получения данных из Redux
  const anime = useData(reducer);

  // Извлекаем отфильтрованный список аниме, список для просмотра и просмотренные
  const filteredList = anime.filteredAnime;
  const watchList = anime.watchList;
  const watchedList = anime.watchedList;

  // Проверяем, есть ли результаты в отфильтрованном списке
  const hasResults = Array.isArray(filteredList) && filteredList.length > 0;

  // Возвращаем необходимые данные:
  // оригинальные данные аниме, отфильтрованный список, флаг наличия результатов,
  // а также списки для просмотра и просмотренные
  return { anime, filteredList, hasResults, watchList, watchedList };
};

export default useFilteredAnime;
