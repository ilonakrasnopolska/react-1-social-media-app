export const filterFeedsHelpers = (state, action) => {
  const category = action.payload;
  if (category === 'View All') {
    state.filteredFeeds = state.feeds;
  } else {
    state.filteredFeeds = state.feeds.filter(feed => feed.category === category);
  }
}

export const setActiveCategoryHelpers = (state, action) => {
  state.activeCategory = action.payload;
}
