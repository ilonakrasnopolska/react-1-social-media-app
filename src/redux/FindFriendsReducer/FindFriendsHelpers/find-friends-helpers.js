// Оптимизированная версия с использованием Map для быстрого поиска
const updateFollowStatus = (state, userId, newStatus) => {
  const userIndex = state.users.findIndex((user) => user.userId === userId);
  if (userIndex !== -1) {
    state.users[userIndex].isFollow = newStatus;
  }

  const currentListIndex = state.currentList.findIndex(
    (user) => user.userId === userId
  );
  if (currentListIndex !== -1) {
    state.currentList[currentListIndex].isFollow = newStatus;
  }

  // Дополнительно проверим, чтобы обновление также распространялось на другие массивы
  state.usersPages.forEach((pageData) => {
    const userPageIndex = pageData.usersList.findIndex(
      (user) => user.userId === userId
    );
    if (userPageIndex !== -1) {
      pageData.usersList[userPageIndex].isFollow = newStatus;
    }
  });
};

// Функция для установки списка пользователей (друзей)
export const setUsersListHelper = (state, action) => {
  action.payload.forEach((newUser) => {
    const exists = state.users.find((user) => user.userId === newUser.userId);
    if (!exists) {
      state.users.push(newUser); // добавляем напрямую
    }
  });

  // currentList ссылается на элементы из users (по ссылке!)
  state.currentList = action.payload.map((newUser) =>
    state.users.find((user) => user.userId === newUser.userId)
  );
};

// Функция для установки загруженных страниц
export const setLoadedPageHelper = (state, action) => {
  if (!state.loadedPages.includes(action.payload)) {
    state.loadedPages.push(action.payload); // Добавляем страницу в список
    //добаляем обьекты аниме в массив
    state.usersPages.push({
      page: action.payload,
      usersList: state.currentList, // сохраняем ссылки, не копии!
    });
  }
};

// Функция для установки текущей страницы
export const setCurrentPageHelper = (state, action) => {
  state.currentPage = action.payload; // Обновляем текущую страницу
  filterUsersListHelper(state); // Применяем фильтрацию
};

// Функция для установки общего кол-во пользователей
export const setTotalUsersCountHelper = (state, action) => {
  state.totalUsersCount = action.payload;
};

// Функция для обновления текста поискового запроса
export const updateSearchNewFriendTextHelper = (state, action) => {
  // Обновляем текст поискового запроса
  state.searchNewFriendText = action.payload.text;
};

export const followHelper = (state, action) => {
  const userId = action.payload.friend.userId;
  updateFollowStatus(state, userId, true);
};

export const unFollowHelper = (state, action) => {
  const userId = action.payload.friend.userId;
  updateFollowStatus(state, userId, false);
};

// Функция для фильтрации списка друзей по поисковому запросу
export const filterUsersListHelper = (state) => {
  const searchText = state.searchNewFriendText.toLowerCase().trim();

  if (searchText === "") {
    const currentPageData = state.usersPages.find(
      (pageData) => pageData.page === state.currentPage
    );
    state.filteredUsers = [];
    state.currentList = currentPageData ? currentPageData.usersList : [];
  } else {
    state.filteredUsers = state.users.filter((user) =>
      user.name.toLowerCase().includes(searchText)
    );
    state.currentList = state.filteredUsers;
  }
};

// Функция для очистки поискового запроса и возврата к полному списку друзей
export const clearSearchQueryHelper = (state) => {
  state.searchNewFriendText = "";
  state.filteredUsers = [];

  const currentPageData = state.usersPages.find(
    (pageData) => pageData.page === state.currentPage
  );

  if (currentPageData) {
    state.currentList = [...currentPageData.usersList]; // ссылки на те же объекты
  } else {
    state.currentList = [];
  }
};
