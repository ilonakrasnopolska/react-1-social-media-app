import React from "react";
import Classes from './Anime.module.css'
import AnimeList from "./AnimeList/AnimeList";
import SearchAnime from "./SearchAnime/SearchAnime";
import useData from "../../../../hooks/useData";

const Anime = ({t}) => {
  const anime = useData('anime');
  return (
    <section className="anime section">
      <div className={Classes.container}>
        <SearchAnime newSearchAnimeText={anime.newSearchAnimeText} t={t}/>
        <AnimeList filteredAnime={anime.filteredAnime} t={t}/>
      </div>
    </section>
  )
}

export default Anime;
