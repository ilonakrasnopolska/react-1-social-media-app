import React from "react";
import Anime from "./Anime";
import {setSearchQuery} from "../../../../../redux/AnimeReducer/anime-reducer";
import { useInputHandlers } from "../../../../hooks/useInputHandlers";
import useFilteredAnime from "../../../../hooks/useFilteredAnime";
import useResetSearchQuery from "../../../../hooks/useResetSearchQuery"

const AnimeContainer = ({ t }) => {
  const {useTextChangeHandlers} = useInputHandlers(setSearchQuery);
  const {anime, filteredList, hasResults } = useFilteredAnime('anime');
  const newSearchAnimeText = anime.newSearchAnimeText;

  return <Anime t={t} newSearchAnimeText={newSearchAnimeText}
  useTextChangeHandlers={useTextChangeHandlers} useResetSearchQuery={useResetSearchQuery}
  filteredList={filteredList} hasResults={hasResults} />;
};

export default AnimeContainer;
