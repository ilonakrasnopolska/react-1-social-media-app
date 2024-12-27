import {useDispatch} from "react-redux";
import { useContext } from 'react';
import LanguageContext from '../../contexts/LanguageContext';


export const useInputHandlers = (action, func) => {
  const dispatch = useDispatch();
  const { language } = useContext(LanguageContext);

  const useTextChangeHandlers = (e) => {
    dispatch(action({ text: e.target.value, language }));
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      func(e);
    }
  };


  return {useTextChangeHandlers, handleKeyDown};
};
