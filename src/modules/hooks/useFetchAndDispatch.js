import { useDispatch } from "react-redux";
import { useEffect } from "react";

// Хук принимает thunk (а не функцию, которая возвращает thunk)
export const useFetchAndDispatch = (thunk, dependencies = []) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(thunk); // Просто диспатчим сам thunk
  }, [dispatch, ...dependencies]);
};
