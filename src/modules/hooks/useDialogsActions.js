import {useDispatch} from "react-redux";
import {deleteMessage, sendMessage, setActiveUser, startConversation} from "../../redux/DialogsReducer/dialogs-reducer";

export const useDialogsActions = () => {
  const dispatch = useDispatch();

  const setActiveUserHandler = (userId) => {
    dispatch(setActiveUser(userId));
  };

  const handleStartChat = (contact, id) => {
    console.log(contact, id);
    dispatch(setActiveUser(contact, id));
    dispatch(startConversation(contact))
  }

  const handleSendMessage = (event, chatId) => {
    event.preventDefault();
    dispatch(sendMessage({chatId}));
  };

  const handleDeleteMessage = (chatId, messageId) => {
    const confirmDelete = window.confirm(`Are you sure you want to delete the message?`);
    if (confirmDelete) {
      dispatch(deleteMessage({chatId, messageId}));
    }
  }

  return {
    setActiveUserHandler,
    handleStartChat,
    handleSendMessage,
    handleDeleteMessage
  };
};
