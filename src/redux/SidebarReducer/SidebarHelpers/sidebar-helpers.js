// Хелпер для установки списка друзей
export const setFriendsListHelper = (state, action) => {
  state.friends = action.payload; // Устанавливаем список
};

// Хелпер для подписки и отписки
export const toggleFriendFollowHelper = (state, action) => {
  const { userId, isFollow } = action.payload;
  const friend = state.friends.find((f) => f.userId === userId);
  if (friend) {
    friend.isFollow = isFollow;
  }
};
