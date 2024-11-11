import React from "react";
import Classes from './Categories.module.css'
import {useDispatch, useSelector} from "react-redux";
import {filterFeeds} from "../../../../../redux/FeedsReducer/feeds-reducer";

const Categories = () => {
  const categoriesOptions = useSelector(state => state.feeds.categories);
  const dispatch = useDispatch();

  const onFilter = (title) => {
    dispatch(filterFeeds(title))
  }
  return (
    <article className={Classes.categories}>
      <h3>Filter:</h3>
    <ul className={Classes.list}>
      {categoriesOptions.map((el) => (
        <li key={el.id} className={Classes.item}>
          <button onClick={ () => onFilter(el.title)}>{el.title}</button>
        </li>
      ))}
    </ul>
    </article>
  )
}

export default Categories;
