import React from "react";
import Classes from './Feeds.module.css'
import Posts from "./Posts/Posts";
import Categories from "./Categories/Categories";
import {useSelector} from "react-redux";

const Feeds = () => {
  const {feeds, filteredFeeds, categories, activeCategory} = useSelector((state) => state.feeds);
  return (
    <section className="news section">
      <div className={Classes.container}>
        <Posts feeds={feeds} filteredFeeds={filteredFeeds}/>
        <Categories categories={categories} activeCategory={activeCategory} />
      </div>
    </section>
  )
}

export default Feeds;
