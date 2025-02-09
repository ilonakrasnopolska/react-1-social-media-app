import React from "react";
import {useSelector} from "react-redux";
import {useParams} from "react-router-dom";
import { useFetchAndDispatch } from "../../../../../../../hooks/useFetchAndDispatch";
import { fetchAnime } from "../../../../../../../../api/animeAPI";
import useData from "../../../../../../../hooks/useData";
import WatchAnime from "./WatchAnime";

const WatchAnimeContainer = ({t}) => {
  const isLoading = useData('loading');
  useFetchAndDispatch(fetchAnime)
  const { animeId } = useParams();
  const anime = useSelector((state) =>
    state.anime.anime.find((el) => el.id === Number(animeId))
  );
  if (!anime) {
    return <div>Anime not found!</div>;
  }
  return (
   <WatchAnime t={t} anime={anime} isLoading={isLoading} />
  );
};

export default WatchAnimeContainer;
