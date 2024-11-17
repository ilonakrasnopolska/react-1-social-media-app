import React from "react";
import Classes from './Categories.module.css'
import {useDispatch, useSelector} from "react-redux";
import {setActiveCategory, filterFeeds} from "../../../../../redux/FeedsReducer/feeds-reducer";

const Categories = () => {
  const dispatch = useDispatch();
  const categoriesOptions = useSelector(state => state.feeds.categories);
  const activeCategory = useSelector(state => state.feeds.activeCategory);

  const onFilter = (title) => {
    dispatch(setActiveCategory(title));
    dispatch(filterFeeds(title));
  }
  return (
    <article className={Classes.categories}>
      <h3>Filter:</h3>
    <ul className={Classes.list}>
      {categoriesOptions.map((el) => (
        <li key={el.id}>
          <button
            onClick={() => onFilter(el.title)}
            className={`${Classes.button} ${el.title === activeCategory ? Classes.activeButton : ''}`}  // Добавляем класс активной кнопке
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
