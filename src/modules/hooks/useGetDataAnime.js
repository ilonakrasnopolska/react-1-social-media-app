import useData from "./useData";

// Кастомный хук для получения данных из редьюсера аниме
const useGetDataAnime = (reducer) => {
  // Используем хук useData для получения данных из Redux
  const anime = useData(reducer);

  // Извлекаем данные из редюсера аниме
  const currentList = anime.currentList;
  const newSearchAnimeText = anime.newSearchAnimeText;
  const loadedPages = anime.loadedPages;
  const animePages = anime.animePages;
  const listType = anime.pageType;
  const fullList = anime.fullList;
  // Проверяем, есть ли результаты в отфильтрованном списке
  const hasResults = currentList.length > 0;

  //Получаем данные для пагинации
  const pageSize = anime.pageSize;
  const totalAnimeCount = anime.totalAnimeCount;
  const currentPage = anime.currentPage;

  // Возвращаем необходимые данные:
  // оригинальные данные аниме, отфильтрованный список, флаг наличия результатов,
  // а также списки для просмотра и просмотренные
  return {
    anime,
    hasResults,
    listType,
    currentList,
    pageSize,
    totalAnimeCount,
    currentPage,
    newSearchAnimeText,
    loadedPages,
    animePages,
    fullList
  };
};

export default useGetDataAnime;
