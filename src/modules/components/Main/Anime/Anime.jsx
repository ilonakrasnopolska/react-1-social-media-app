import React from "react";
import Classes from './Anime.module.css'
import AnimeList from "./AnimeList/AnimeList";
import SearchAnime from "./SearchAnime/SearchAnime";


const Anime = () => {
  return (
    <section className="anime section">
      <div className={Classes.container}>
        <SearchAnime />
        <AnimeList/>
      </div>
    </section>
  )
}

export default Anime;
