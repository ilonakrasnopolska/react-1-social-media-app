import React from "react";
import Classes from './Categories.module.css'
import {useFeedsHandler} from "../../../../hooks/useFeedsHandler";

const Categories = ({categories, activeCategory}) => {
  const { onFilter } = useFeedsHandler();

  return (
    <article className={Classes.categories}>
      <h3>Filter:</h3>
    <ul className={Classes.list}>
      {categories.map((el) => (
        <li key={el.id}>
          <button
            onClick={() => onFilter(el.title)}
            className={`${Classes.button} ${el.title === activeCategory ? Classes.activeButton : ''}`}
          >
            {el.title}
          </button>
        </li>
      ))}
    </ul>
    </article>
  )
}

export default Categories;
