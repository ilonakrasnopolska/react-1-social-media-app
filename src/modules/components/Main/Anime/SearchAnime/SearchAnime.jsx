import React from "react";
import Classes from './SearchAnime.module.css'
import {useAnimeSearchHandler} from "../../../../hooks/useAnimeSearchHandler";


const SearchAnime = ({newSearchAnimeText}) => {
  const {handleSearchChange} = useAnimeSearchHandler();
  return (
    <div className={Classes.search}>
      <h1>Choose your anime:</h1>
        <input
          id='anime-search-input'
          value={newSearchAnimeText}
          className={Classes.input}
          type="text"
          onChange={handleSearchChange}
          placeholder="Search for anime"
        />
    </div>
  )
}

export default SearchAnime;
