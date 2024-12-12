import React from "react";
import Classes from './SearchAnime.module.css'
import {useInputHandlers} from "../../../../../hooks/useInputHandlers";
import {setSearchQuery} from "../../../../../../redux/AnimeReducer/anime-reducer";


const SearchAnime = ({newSearchAnimeText}) => {
  const {useTextChangeHandlers} = useInputHandlers(setSearchQuery);
  return (
    <div className={Classes.search}>
      <h1>Choose your anime:</h1>
        <input
          id='anime-search-input'
          value={newSearchAnimeText}
          className={Classes.input}
          type="text"
          onChange={useTextChangeHandlers}
          placeholder="Search for anime"
        />
    </div>
  )
}

export default SearchAnime;
