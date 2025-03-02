import React from "react";
import Classes from "./AnimeListFilter.module.css";

const AnimeListFilter = ({ t }) => {
  return (
    <div className={Classes.anime_filter}>
      <button className={Classes.button}>Plan to Watch</button>
      <button className={Classes.button}>My Watched</button>
    </div>
  );
};

export default AnimeListFilter;
