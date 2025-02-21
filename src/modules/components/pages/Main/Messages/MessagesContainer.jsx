import React from "react";
import Messages from "./Messages";
import useData from "../../../../hooks/useData";
import {useParams} from "react-router-dom";
import { useResetActiveUserOnRouteChange } from "../../../../hooks/useResetActiveUser";

const MessagesContainer = ({t}) => {
  useResetActiveUserOnRouteChange();
  const { userId } = useParams();
  const dialogs = useData('dialogs');
  const isLoading = useData('loading');
  return (
    <Messages
      dialogs={dialogs}
      idFromUrl={userId}
      isLoading={isLoading}
      t={t}
    />
  );
};

export default MessagesContainer;
