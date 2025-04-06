import React from "react";
import Classes from "./AnimeList.module.css";
import AnimeItem from "./AnimeItem/AnimeItem";
import { fetchAnime } from "../../../../../../api/animeAPI";
import { useFetchAndDispatch } from "../../../../../hooks/useFetchAndDispatch";
import { ClipLoader } from "react-spinners";
import { Pagination } from "../../../../common/Pagination/Pagination";
import { setCurrentPage } from "../../../../../../redux/AnimeReducer/anime-reducer";
import { ANIME_LIST_TYPES } from "../../../../../../constants/constants";

const AnimeList = ({
  currentList,
  hasResults,
  isLoading,
  pages,
  currentPage,
  changePage,
  pageSize,
  t,
  loadedPages,
  animePages,
  listType,
}) => {
  // Используем хук для загрузки аниме
  useFetchAndDispatch(
    fetchAnime(pageSize, currentPage, loadedPages, animePages),
    [pageSize, currentPage]
  );

  return (
    <div className={Classes.anime_list_box}>
      {isLoading ? (
        <div className={Classes.spinner}>
          <ClipLoader color="#194770" size={50} />
        </div>
      ) : hasResults ? (
        <div>
          <ul className={Classes.list}>
            {currentList.map((anime) => (
              <AnimeItem anime={anime} key={anime.id} t={t} />
            ))}
          </ul>
          {listType !== ANIME_LIST_TYPES.WATCH &&
            listType !== ANIME_LIST_TYPES.WATCHED &&
            listType !== ANIME_LIST_TYPES.SEARCH && (
              <Pagination
                pages={pages}
                Classes={Classes}
                currentPage={currentPage}
                changePage={changePage}
                setCurrentPageAction={setCurrentPage}
              />
            )}
        </div>
      ) : (
        <div className={Classes.noResults}>{t("Empty")}</div>
      )}
    </div>
  );
};

export default AnimeList;
