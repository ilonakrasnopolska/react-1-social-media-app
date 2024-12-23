import React from "react";
import Messages from "./Messages/Messages";
import { useSelector } from "react-redux";
import {useParams} from "react-router-dom";
import { useResetActiveUserOnRouteChange } from "../../../../hooks/useResetActiveUser";

const MessagesContainer = ({t}) => {
  useResetActiveUserOnRouteChange();
  const { chatId } = useParams();
  const dialogs = useSelector(state => state.dialogs);
  return (
    <Messages
      dialogs={dialogs}
      urlId={chatId}
      t={t}
    />
  );
};

export default MessagesContainer;
