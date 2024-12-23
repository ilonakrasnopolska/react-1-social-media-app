import React from "react";
import Classes from './Anime.module.css'
import AnimeList from "./AnimeList/AnimeList";
import SearchAnime from "./SearchAnime/SearchAnime";
import {useSelector} from "react-redux";


const Anime = ({t}) => {
  const {newSearchAnimeText, filteredAnime} = useSelector(state => state.anime);
  return (
    <section className="anime section">
      <div className={Classes.container}>
        <SearchAnime newSearchAnimeText={newSearchAnimeText} t={t}/>
        <AnimeList filteredAnime={filteredAnime} t={t}/>
      </div>
    </section>
  )
}

export default Anime;
