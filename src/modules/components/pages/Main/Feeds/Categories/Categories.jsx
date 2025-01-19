import React from "react";
import Classes from './Categories.module.css'

const Categories = ({categories, activeCategory, handleCategoryFilter, t}) => {
  return (
    <article className={Classes.categories}>
      <h3>{t('Filter')}</h3>
    <ul className={Classes.list}>
      {categories.map((el) => (
        <li key={el.id}>
          <button
            onClick={() => handleCategoryFilter(el.title)}
            className={`${Classes.button} ${el.title === activeCategory ? Classes.activeButton : ''}`}
          >
            {t(el.title)}
          </button>
        </li>
      ))}
    </ul>
    </article>
  )
}

export default Categories;
