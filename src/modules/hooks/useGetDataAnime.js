import useData from "./useData";

// Кастомный хук для получения данных из редьюсера аниме
const useGetDataAnime = (reducer) => {
  // Используем хук useData для получения данных из Redux
  const anime = useData(reducer);

  // Извлекаем отфильтрованный список аниме, список для просмотра и просмотренные
  const watchList = anime.watchList;
  const watchedList = anime.watchedList;
  const currentList = anime.currentList;
  // Проверяем, есть ли результаты в отфильтрованном списке
  const hasResults = currentList.length > 0;

  const pageSize = anime.pageSize;
  const totalAnimeCount = anime.totalAnimeCount;
  const currentPage = anime.currentPage;

  // Возвращаем необходимые данные:
  // оригинальные данные аниме, отфильтрованный список, флаг наличия результатов,
  // а также списки для просмотра и просмотренные
  return {
    anime,
    hasResults,
    watchList,
    watchedList,
    currentList,
    pageSize,
    totalAnimeCount,
    currentPage,
  };
};

export default useGetDataAnime;
