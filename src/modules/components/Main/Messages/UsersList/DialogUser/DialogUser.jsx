import Classes from "./DialogUser.module.css";
import React from "react";
import {NavLink} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {setActiveUser} from "../../../../../../redux/DialogsReducer/dialogs-reducer";

const DialogUser = ({ userId }) => {
  const dispatch = useDispatch();
  const users = useSelector(state => state.dialogs.users);
  const activeUserId = useSelector((state) => state.dialogs.activeUserId);
  const currentUser = users.find(user => user.userId === userId);


  const handleClick = () => {
    dispatch(setActiveUser(userId));
  };

  return (
    <li className={Classes.info}>
      <NavLink
        to={`/messages/${currentUser.userId}`}
        className={({isActive}) =>
          `${Classes.link} ${isActive ? Classes.active : ""}`
        }
        onClick={handleClick}
      >
        <button
          className={`${Classes.button} ${
            activeUserId === currentUser.userId ? Classes.activeButton : ""
          }`}
        >
          <img
            className={Classes.avatar}
            src={currentUser.avatar}
            alt="Avatar"
          />
          <span className={Classes.name}>{currentUser.name}</span>
        </button>
      </NavLink>
    </li>
  )
}

export default DialogUser;
