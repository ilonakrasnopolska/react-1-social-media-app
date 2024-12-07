import { useDispatch } from "react-redux";
import {
  updateRequestUserNameText,
  updateRequestMessageText,
  sendSupportMessage,
  validateRequestForHelpForm,
} from "../../redux/SettingsReducer/settings-reducer";

export const useHelpFormHandler = (helpCenter) => {
  const dispatch = useDispatch();
  const { requestUserNameText, requestMessageText, errors } = helpCenter;

  const handleSubmit = (event) => {
    event.preventDefault();
    const isValid = dispatch(validateRequestForHelpForm());
    if (isValid) {
      dispatch(sendSupportMessage());
    }
  };

  const handleInputChange = (field) => (event) => {
    const text = event.target.value;
    console.log(field)
    const action = field === "userName"
      ? updateRequestUserNameText(text)
      : updateRequestMessageText(text);
    dispatch(action);
  };

  const handleKeyDown = (event) => {
    if (event.key === "Enter" && !event.shiftKey) {
      event.preventDefault();
      handleSubmit(event);
    }
  };

  return {
    requestUserNameText,
    requestMessageText,
    errors,
    handleInputChange,
    handleKeyDown,
    handleSubmit,
  };
};
