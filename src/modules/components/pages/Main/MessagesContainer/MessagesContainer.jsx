import React from "react";
import Messages from "./Messages/Messages";
import { useSelector } from "react-redux";
import { useResetActiveUserOnRouteChange } from "../../../../hooks/useResetActiveUser";

const MessagesContainer = () => {
  useResetActiveUserOnRouteChange();
  const dialogs = useSelector(state => state.dialogs);
  return (
    <Messages
      dialogs={dialogs}
    />
  );
};

export default MessagesContainer;
