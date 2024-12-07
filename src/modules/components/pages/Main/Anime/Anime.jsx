import React from "react";
import Classes from './Anime.module.css'
import AnimeList from "./AnimeList/AnimeList";
import SearchAnime from "./SearchAnime/SearchAnime";
import {useSelector} from "react-redux";


const Anime = () => {
  const {newSearchAnimeText, filteredAnime} = useSelector(state => state.anime);

  return (
    <section className="anime section">
      <div className={Classes.container}>
        <SearchAnime newSearchAnimeText={newSearchAnimeText} />
        <AnimeList filteredAnime={filteredAnime} />
      </div>
    </section>
  )
}

export default Anime;
