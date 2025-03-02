import useData from "./useData";

const useFilteredAnime = (reducer) => {
  const anime = useData(reducer);
  const filteredList = anime.filteredAnime;
  const watchList = anime.watchList;
  const watchedList = anime.watchedList;

  const hasResults = filteredList.length > 0;

  return {anime, filteredList, hasResults, watchList,  watchedList};
};

export default useFilteredAnime;
