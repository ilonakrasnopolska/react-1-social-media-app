import {useDispatch} from "react-redux";
import {setActiveUser, updateSearchUserText} from "../../redux/DialogsReducer/dialogs-reducer";

export const useDialogsHandler = (userId) => {
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(setActiveUser(userId));
  };

  const onTextChange = (e) => {
    const text = e.target.value;
    dispatch(updateSearchUserText(text));
  };

  return {handleClick, onTextChange};
};
