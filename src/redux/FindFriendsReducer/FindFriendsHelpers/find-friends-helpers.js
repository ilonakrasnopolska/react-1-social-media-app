const updateFollowStatus = (state, userId, newStatus) => {
  // Обновление в friends
  const friend = state.friends.find(user => user.userId === userId);
  if (friend) friend.isFollow = newStatus;

  // Обновление в filteredFriends
  const filteredUser = state.filteredFriends.find(user => user.userId === userId);
  if (filteredUser) filteredUser.isFollow = newStatus;
};

export const setUsersListHelper = (state, action) => {
  state.friends = action.payload;
  state.filteredFriends = action.payload;
};

export const updateSearchNewFriendTextHelper = (state, action) => {
  state.searchNewFriendText = action.payload.text;
}

export const followHelper = (state, action) => {
  const userId = action.payload.friend.userId;
  updateFollowStatus(state, userId, true);
};

export const unFollowHelper = (state, action) => {
  const userId = action.payload.friend.userId;
  updateFollowStatus(state, userId, false);
}

export const filterUsersListHelper = (state) => {
  if (state.searchNewFriendText === '') {
    state.filteredFriends = state.friends;
  } else {
    state.filteredFriends = state.friends.filter((user) => {
      const userName = user.name;
      return userName.toLowerCase().includes(state.searchNewFriendText.toLowerCase());
    });
  }
};

export const clearSearchQueryHelper = (state) => {
  state.searchNewFriendText = '';
  state.filteredFriends = state.friends;
}

