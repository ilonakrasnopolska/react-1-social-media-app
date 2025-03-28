// Функция для обновления статуса подписки на друга
const updateFollowStatus = (state, userId, newStatus) => {
  // Обновление статуса в списке друзей (friends)
  const friend = state.friends.find((user) => user.userId === userId);
  if (friend) friend.isFollow = newStatus;

  // Обновление статуса в отфильтрованных друзьях (filteredFriends)
  const filteredUser = state.filteredFriends.find(
    (user) => user.userId === userId
  );
  if (filteredUser) filteredUser.isFollow = newStatus;
};

// Функция для установки списка пользователей (друзей)
export const setUsersListHelper = (state, action) => {
  // Устанавливаем полученные данные в друзья и отфильтрованных друзей
  state.friends = action.payload;
  state.filteredFriends = action.payload;
};

// Функция для обновления текста поискового запроса
export const updateSearchNewFriendTextHelper = (state, action) => {
  // Обновляем текст поискового запроса
  state.searchNewFriendText = action.payload.text;
};

// Функция для подписки на пользователя
export const followHelper = (state, action) => {
  // Получаем идентификатор пользователя
  const userId = action.payload.friend.userId;
  // Обновляем статус подписки на true
  updateFollowStatus(state, userId, true);
};

// Функция для отписки от пользователя
export const unFollowHelper = (state, action) => {
  // Получаем идентификатор пользователя
  const userId = action.payload.friend.userId;
  // Обновляем статус подписки на false
  updateFollowStatus(state, userId, false);
};

// Функция для фильтрации списка друзей по поисковому запросу
export const filterUsersListHelper = (state) => {
  // Если поисковый запрос пустой, показываем всех друзей
  if (state.searchNewFriendText === "") {
    state.filteredFriends = state.friends;
  } else {
    // Фильтруем друзей по имени, если в поисковом запросе что-то есть
    state.filteredFriends = state.friends.filter((user) => {
      const userName = user.name;
      return userName
        .toLowerCase()
        .includes(state.searchNewFriendText.toLowerCase());
    });
  }
};

// Функция для очистки поискового запроса и возврата к полному списку друзей
export const clearSearchQueryHelper = (state) => {
  // Очищаем текст поискового запроса
  state.searchNewFriendText = "";
  // Возвращаем список всех друзей
  state.filteredFriends = state.friends;
};
