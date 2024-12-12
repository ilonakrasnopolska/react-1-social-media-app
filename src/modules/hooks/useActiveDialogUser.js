import { useDialogsActions } from "./useDialogsActions";

export const useActiveDialogUser = (userId, users, urlId) => {
  const { setActiveUserHandler } = useDialogsActions();

  const { userId: id, avatar, name } = users.find(user => user.userId === userId) || {};
  const isActive = urlId === String(id);
  const handleClick = () => setActiveUserHandler(userId);

  return { id, avatar, name, isActive, handleClick };
};
