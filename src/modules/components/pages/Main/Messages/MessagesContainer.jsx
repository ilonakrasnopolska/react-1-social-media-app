import React from "react";
import Messages from "./Messages";
import useData from "../../../../hooks/useData";
import {useParams} from "react-router-dom";
import { useResetActiveUserOnRouteChange } from "../../../../hooks/useResetActiveUser";

const MessagesContainer = ({t}) => {
  useResetActiveUserOnRouteChange();
  const { userId } = useParams();
  const dialogs = useData('dialogs');
  return (
    <Messages
      dialogs={dialogs}
      idFromUrl={userId}
      t={t}
    />
  );
};

export default MessagesContainer;
