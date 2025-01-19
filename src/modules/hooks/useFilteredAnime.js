import useData from "./useData";

const useFilteredAnime = (reducer) => {
  const anime = useData(reducer);
  const filteredList = anime.filteredAnime;

  const hasResults = filteredList.length > 0;

  return {anime, filteredList, hasResults };
};

export default useFilteredAnime;
