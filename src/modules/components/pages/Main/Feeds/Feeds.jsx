import React from "react";
import Classes from './Feeds.module.css'
import Posts from "./Posts/Posts";
import Categories from "./Categories/Categories";

const Feeds = ({t, posts, categories, handleCategoryFilter, activeCategory}) => {
  return (
    <section className="news section">
      <div className={Classes.container}>
        <Posts posts={posts} t={t}/>
        <Categories categories={categories} activeCategory={activeCategory}
        handleCategoryFilter={handleCategoryFilter} t={t} />
      </div>
    </section>
  )
}

export default Feeds;
