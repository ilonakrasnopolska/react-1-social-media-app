import avatars from "../../Avatars-src";

const CURRENT_USER_NAME = "Ilona Sue"
const getData = () => {
  const currentTime = new Date();
  const hours = String(currentTime.getHours()).padStart(2, '0');
  const minutes = String(currentTime.getMinutes()).padStart(2, '0');
  return `${hours}:${minutes}`
}
const findById = (state, id) => {
  return state.find(item => item.id === id);
}
export const updateNewMessageTextHelper = (state, property, action) => {
  state[property] = action.value;
  return state;
}
export const sendMessageHelper = (state, action) => {
  const chat = findById(state.chats, action.id);
  if (!chat) {
    console.error(`Chat with id ${action.id} not found.`);
    return;
  }

  if (state.newMessageText.trim() !== '') {
    let newMessageId = chat.length + 1;
    let newMessage = {
      name: CURRENT_USER_NAME,
      id: newMessageId,
      time: getData(),
      avatar: avatars.ilonaSue,
      message: state.newMessageText,
    };

    chat.messages.push(newMessage);

    state.newMessageText = '';
  }
}
