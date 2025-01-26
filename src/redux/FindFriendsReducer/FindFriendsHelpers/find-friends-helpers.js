const updateFollowStatus = (state, userId, newStatus) => {
  // Обновление в friends
  const friend = state.friends.find(user => user.userId === userId);
  if (friend) friend.isFollow = newStatus;

  // Обновление в allUsers
  const allUser = state.allUsers.find(user => user.userId === userId);
  if (allUser) allUser.isFollow = newStatus;

  // Обновление в filteredFriends
  const filteredUser = state.filteredFriends.find(user => user.userId === userId);
  if (filteredUser) filteredUser.isFollow = newStatus;
};

export const setUsersListHelper = (state, action) => {
  state.friends = action.payload;
  state.allUsers = action.payload;
  state.filteredFriends = action.payload;
};

export const updateSearchNewFriendTextHelper = (state, action) => {
  state.searchNewFriendText = action.payload;
}

export const followHelper = (state, action) => {
  const userId = action.payload.friend.userId;
  const newFriend = state.allUsers.find(user => user.userId === userId);
  if (newFriend) {
    newFriend.isFollow = true;
    state.friends = [...state.friends, newFriend];
  }
  updateFollowStatus(state, userId, true);
};

export const unFollowHelper = (state, action) => {
  const userId = action.payload.friend.userId;
  updateFollowStatus(state, userId, false);

  const updatedFriends = state.friends.filter(
    (friend) => friend.userId !== userId);
  state.friends = updatedFriends;
  state.filteredFriends = updatedFriends;
}

export const filterUsersListHelper = (state, language) => {
  if (state.searchNewFriendText === '') {
    state.filteredFriends = state.friends;
  } else {
    state.filteredFriends = state.allUsers.filter((user) => {
      const userName = user.name[language] || '';
      return userName.toLowerCase().includes(state.searchNewFriendText.toLowerCase());
    });
  }
};

export const clearSearchQueryHelper = (state) => {
  state.searchNewFriendText = '';
  state.filteredFriends = state.friends;
}
