import React from "react";
import Classes from './Feeds.module.css'
import Posts from "./Posts/Posts";
import Categories from "./Categories/Categories";
import {useSelector} from "react-redux";
import useData from "../../../../hooks/useData";

const Feeds = ({t}) => {
  const feeds = useData('feeds');
  return (
    <section className="news section">
      <div className={Classes.container}>
        <Posts feeds={feeds.feeds} filteredFeeds={feeds.filteredFeeds} t={t}/>
        <Categories categories={feeds.categories} activeCategory={feeds.activeCategory} t={t} />
      </div>
    </section>
  )
}

export default Feeds;
