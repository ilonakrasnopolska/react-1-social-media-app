import React from "react";
import Classes from './SearchAnime.module.css'


const SearchAnime = () => {
  return (
    <div className={Classes.search}>
      <h1>Choose your anime:</h1>
      <form className={Classes.form}>
        <input/>
        <button className={Classes.button}>Search</button>
      </form>
    </div>
  )
}

export default SearchAnime;
