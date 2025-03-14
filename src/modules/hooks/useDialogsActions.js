import {useDispatch, useSelector} from "react-redux";
import {deleteMessage, sendMessage, setActiveUser, startConversation} from "../../redux/DialogsReducer/dialogs-reducer";

export const useDialogsActions = () => {
  const dispatch = useDispatch();

  const setActiveUserHandler = (userId) => {
    dispatch(setActiveUser(userId));
  };

  const handleStartChat = (contact, id) => {
    dispatch(setActiveUser(contact, id));
    dispatch(startConversation(contact))
  }

  const handleSendMessage = (event, userId) => {
    event.preventDefault();
    dispatch(sendMessage({userId}));
  };

  const handleDeleteMessage = (userId, messageId) => {
    const confirmDelete = window.confirm(`Are you sure you want to delete the message?`);
    if (confirmDelete) {
      dispatch(deleteMessage({userId, messageId}));
    }
  }

  return {
    setActiveUserHandler,
    handleStartChat,
    handleSendMessage,
    handleDeleteMessage
  };
};
