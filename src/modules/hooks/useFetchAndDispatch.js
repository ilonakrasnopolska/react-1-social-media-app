import { useDispatch } from "react-redux";
import { useEffect } from "react";

export const useFetchAndDispatch = (action) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(action());
  }, [dispatch]);

  return;
}

