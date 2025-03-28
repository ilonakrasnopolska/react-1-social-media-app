// Хелпер для установки списка фидов
export const setFeedsListHelpers = (state, action) => {
  // Устанавливаем новый список фидов из payload
  state.feeds = action.payload;
  // Копируем фиды в отфильтрованный список (по умолчанию все фиды)
  state.filteredFeeds = action.payload;
};

// Хелпер для фильтрации фидов по категории
export const filterFeedsHelpers = (state, action) => {
  // Получаем категорию из payload
  const category = action.payload;
  // Если категория "View All", то показываем все фиды
  if (category === "View All") {
    state.filteredFeeds = state.feeds;
  } else {
    // Фильтруем фиды по выбранной категории
    state.filteredFeeds = state.feeds.filter(
      (feed) => feed.category === category
    );
  }
};

// Хелпер для установки активной категории
export const setActiveCategoryHelpers = (state, action) => {
  // Устанавливаем активную категорию из payload
  state.activeCategory = action.payload;
};
