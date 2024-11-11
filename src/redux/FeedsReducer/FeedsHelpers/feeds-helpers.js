export const filterFeedsHelpers = (state, action) => {
  const filteredFeeds = state.feeds.filter(feed => feed.category === action.payload);

  return state.filteredFeeds = filteredFeeds;
}
