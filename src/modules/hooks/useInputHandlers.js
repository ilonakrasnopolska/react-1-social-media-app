import {useDispatch} from "react-redux";

export const useInputHandlers = (action, func) => {
  const dispatch = useDispatch();

  const useTextChangeHandlers = (e) => {
    dispatch(action(e.target.value));
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      func(e);
    }
  };


  return {useTextChangeHandlers, handleKeyDown};
};
