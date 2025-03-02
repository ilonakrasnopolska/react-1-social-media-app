import React from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { useFetchAndDispatch } from "../../../../../../../hooks/useFetchAndDispatch";
import { fetchAnime } from "../../../../../../../../api/animeAPI";
import useData from "../../../../../../../hooks/useData";
import WatchAnime from "./WatchAnime";

const WatchAnimeContainer = ({ t }) => {
  const isLoading = useData("loading");
  const { animeId } = useParams();
  const anime = useSelector((state) => state.anime.anime);
  const animeById = anime.find((el) => el.id === Number(animeId));
  useFetchAndDispatch(() => fetchAnime(animeById));
  if (!animeById) {
    return <div>Anime not found!</div>;
  }
  return <WatchAnime t={t} animeById={animeById} isLoading={isLoading} />;
};

export default WatchAnimeContainer;
