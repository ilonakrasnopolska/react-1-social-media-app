import React from "react";
import Classes from './Feeds.module.css'
import Posts from "./Posts/Posts";
import Categories from "./Categories/Categories";

const Feeds = () => {
  return (
    <section className="news section">
      <div className={Classes.container}>
        <Posts />
        <Categories />
      </div>
    </section>
  )
}

export default Feeds;
