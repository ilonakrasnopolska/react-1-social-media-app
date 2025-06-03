import React from "react";
import { useParams } from "react-router-dom";
import { useFetchAndDispatch } from "../../../../../../../hooks/useFetchAndDispatch";
import { fetchAnime } from "../../../../../../../../api/animeAPI";
import useGetDataAnime from "../../../../../../../hooks/useGetDataAnime";
import useData from "../../../../../../../hooks/useData";
import WatchAnime from "./WatchAnime";
import Preloader from "../../../../../../common/Preloader/Preloader";

const WatchAnimeContainer = ({ t }) => {
  // Получаем состояние загрузки из хука useData
  const isLoading = useData("loading");

  // Получаем ID аниме из параметров маршрута
  const { animeId } = useParams();

  // Получаем отфильтрованные данные аниме, список аниме, есть ли результаты и списки просмотра
  const {
    pageSize,
    currentPage,
    loadedPages,
    animePages,
    fullList,
  } = useGetDataAnime("anime");

  // Ищем аниме по ID из списка
  const animeById = fullList.find((el) => el.id === Number(animeId));

  // Используем хук для получения и диспатча данных о выбранном аниме
  useFetchAndDispatch(
    fetchAnime(pageSize, currentPage, loadedPages, animePages),
    [pageSize, currentPage]
  );

  // Если данные еще загружаются, показываем спиннер
  if (isLoading) {
    return (
      <Preloader />
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
