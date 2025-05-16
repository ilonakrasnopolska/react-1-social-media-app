import { useNavigate } from "react-router-dom";
// import { useDispatch } from "react-redux";

const useSignOut = () => {
  const navigate = useNavigate();
  // const dispatch = useDispatch();
  const signOut = () => {
    // dispatch(resetUser()); // сбрасываем данные пользователя в Redux
    navigate("/login");
  };

  return signOut;
};

export default useSignOut;
