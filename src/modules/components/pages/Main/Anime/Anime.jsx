import React from "react";
import Classes from "./Anime.module.css";
import AnimeList from "./AnimeList/AnimeList";
import SearchAnime from "./SearchAnime/SearchAnime";
import AnimeListFilter from "./AnimeListFilter/AnimeListFilter";

const Anime = ({
  t,
  newSearchAnimeText,
  useTextChangeHandlers,
  useResetSearchQuery,
  filteredList,
  hasResults,
  isLoading,
}) => {
  return (
    <section className="anime section">
      <div className={Classes.container}>
        <SearchAnime
          newSearchAnimeText={newSearchAnimeText}
          useTextChangeHandlers={useTextChangeHandlers}
          useResetSearchQuery={useResetSearchQuery}
          t={t}
        />
        <AnimeListFilter t={t} />
        <AnimeList
          filteredList={filteredList}
          hasResults={hasResults}
          isLoading={isLoading}
          t={t}
        />
      </div>
    </section>
  );
};

export default Anime;
