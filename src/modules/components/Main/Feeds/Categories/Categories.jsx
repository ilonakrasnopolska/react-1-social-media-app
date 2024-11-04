import React from "react";
import Classes from './Categories.module.css'

const Categories = () => {
  const categoriesOptions = [
    "Anime",
    "Manga",
    "Fans",
    "Cosplay",
    "Shop",
  ];
  return (
    <article className={Classes.categories}>
      <h3>Filter:</h3>
    <ul className={Classes.list}>
      {categoriesOptions.map((option, index) => (
        <li key={index} className={Classes.item}>
          <button>{option}</button>
        </li>
      ))}
    </ul>
    </article>
  )
}

export default Categories;
