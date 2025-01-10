import React from "react";
import Messages from "./Messages";
import useData from "../../../../hooks/useData";
import {useParams} from "react-router-dom";
import { useResetActiveUserOnRouteChange } from "../../../../hooks/useResetActiveUser";

const MessagesContainer = ({t}) => {
  useResetActiveUserOnRouteChange();
  const { chatId } = useParams();
  const dialogs = useData('dialogs');
  return (
    <Messages
      dialogs={dialogs}
      urlId={chatId}
      t={t}
    />
  );
};

export default MessagesContainer;
