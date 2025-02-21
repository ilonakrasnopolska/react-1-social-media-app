import React from "react";
import useData from "../../../../hooks/useData";
import Feeds from "./Feeds";
import { useFeedsFilter } from "../../../../hooks/useFeedsFilter";

const FeedsContainer = ({t}) => {
  const isLoading = useData('loading');
  const { handleCategoryFilter } = useFeedsFilter();
  const state = useData('feeds');
  const feeds = state.feeds;
  const filteredFeeds = state.filteredFeeds;
  const categories = state.categories;
  const activeCategory = state.activeCategory;
  const posts = filteredFeeds.length > 0 ? filteredFeeds : feeds;
  return (
    <Feeds posts={posts} categories={categories} isLoading={isLoading}
    activeCategory={activeCategory} handleCategoryFilter={handleCategoryFilter} t={t}/>
  )
};

export default FeedsContainer;
