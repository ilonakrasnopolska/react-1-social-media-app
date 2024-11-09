import React from "react";
import {useDispatch, useSelector} from "react-redux";
import Classes from './SearchAnime.module.css'
import {setSearchQuery} from "../../../../../redux/AnimeReducer/anime-reducer";


const SearchAnime = () => {
  const dispatch = useDispatch();
  const newSearchAnimeText = useSelector(state => state.anime.newSearchAnimeText);

  const handleSearchChange = (e) => {
    const text = e.target.value;
    dispatch(setSearchQuery(text));
  };

  return (
    <div className={Classes.search}>
      <h1>Choose your anime:</h1>
      <form className={Classes.form}>
        <input
          value={newSearchAnimeText}
          className={Classes.input}
          type="text"
          onChange={handleSearchChange}
          placeholder="Search for anime"
        />
      </form>
    </div>
  )
}

export default SearchAnime;
