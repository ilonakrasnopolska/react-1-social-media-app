import {useDispatch} from "react-redux";
import {setActiveUser} from "../../redux/DialogsReducer/dialogs-reducer";

export const useDialogsActions = (userId) => {
  const dispatch = useDispatch();

  const setActiveUserHandler = () => {
    dispatch(setActiveUser(userId));
  };


  return {setActiveUserHandler};
};
