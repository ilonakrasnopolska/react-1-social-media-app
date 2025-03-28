import React from "react";
import { ClipLoader } from "react-spinners";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { useFetchAndDispatch } from "../../../../../../../hooks/useFetchAndDispatch";
import { fetchAnime } from "../../../../../../../../api/animeAPI";
import useData from "../../../../../../../hooks/useData";
import WatchAnime from "./WatchAnime";
import Classes from "../WatchAnime/WatchAnime.module.css";

const WatchAnimeContainer = ({ t }) => {
  // Получаем состояние загрузки из хука useData
  const isLoading = useData("loading");

  // Получаем ID аниме из параметров маршрута
  const { animeId } = useParams();

  // Извлекаем список аниме и отфильтрованный список из Redux-стора
  const anime = useSelector((state) => state.anime.anime);
  const filteredList = useSelector((state) => state.anime.filteredList);

  // Ищем аниме по ID из списка
  const animeById = anime.find((el) => el.id === Number(animeId));

  // Используем хук для получения и диспатча данных о выбранном аниме
  useFetchAndDispatch(() => fetchAnime(animeById, [filteredList]));

  // Если данные еще загружаются, показываем спиннер
  if (isLoading) {
    return (
      <div className={Classes.spinner}>
        <ClipLoader color="#194770" size={50} />
      </div>
    );
  }

  // Если аниме не найдено, показываем сообщение
  if (!animeById) {
    return <div>Anime not found!</div>;
  }

  // Когда данные загружены, рендерим компонент WatchAnime с переданными данными
  return <WatchAnime t={t} animeById={animeById} isLoading={isLoading} />;
};

export default WatchAnimeContainer;
