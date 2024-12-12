import { useSelector } from "react-redux";

export const usePersonalAccountData = () => {
  const accountData = useSelector((state) => state.settings.personalAccount);
  const { userData, editPage } = accountData;

  return { userData, editPage };
};
