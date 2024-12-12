import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { resetActiveUser } from "../../redux/DialogsReducer/dialogs-reducer";

export const useResetActiveUserOnRouteChange = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    return () => {
      dispatch(resetActiveUser());
    };
  }, [dispatch]);
};
