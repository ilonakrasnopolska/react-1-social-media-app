export const toggleTermHelper = (state, action) => {
  const term = state.termsAndConditions.find((t) => t.id === action.payload);
  if (term) {
    term.isOpen = !term.isOpen;
  }
}

export const updateContactMessageTextHelper = (state, action) => {
    return state.newPostText = action.payload;
}
