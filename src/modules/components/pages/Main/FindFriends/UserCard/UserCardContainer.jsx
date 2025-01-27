import React from "react";
import { useDispatch } from "react-redux";
import { useDialogsActions } from "../../../../../hooks/useDialogsActions";
import { follow, unFollow } from "../../../../../../redux/FindFriendsReducer/find-friends-reducer";
import UserCard from "./UserCard";

const UserCardContainer = ({ friend, t }) => {
  const dispatch = useDispatch();
  const { handleStartChat } = useDialogsActions();

  const handleFollowToggle = (friend) => {
    if (friend.isFollow) {
      dispatch(unFollow({ friend }));
    } else {
      dispatch(follow({ friend }));
    }
  };

  return (
    <UserCard
      friend={friend}
      t={t}
      handleFollowToggle={handleFollowToggle}
      handleStartChat={handleStartChat}
    />
  );
};

export default UserCardContainer;
