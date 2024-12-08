import { useDispatch } from "react-redux";
import {
  updateRequestUserNameText,
  updateRequestMessageText,
  sendSupportMessage,
  validateRequestForHelpForm,
} from "../../redux/SettingsReducer/settings-reducer";

export const useRequestHelpForm = (helpCenter) => {
  const dispatch = useDispatch();
  const { requestUserNameText, requestMessageText, errors } = helpCenter;

  const handleFormSubmit = (event) => {
    event.preventDefault();
    const isValid = dispatch(validateRequestForHelpForm());
    if (isValid) {
      dispatch(sendSupportMessage());
    }
  };

  const handleInputChange = (field) => (event) => {
    const text = event.target.value;
    const action = field === "userName"
      ? updateRequestUserNameText(text)
      : updateRequestMessageText(text);
    dispatch(action);
  };


  return {
    requestUserNameText,
    requestMessageText,
    errors,
    handleInputChange,
    handleFormSubmit,
  };
};
