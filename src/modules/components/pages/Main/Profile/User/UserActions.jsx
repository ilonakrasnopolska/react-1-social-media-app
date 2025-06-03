import ToggleFollowButton from "../../../../common/ToggleFollowButton/ToggleFollowButton";

const UserActions = ({
  Classes,
  userData,
  t,
  handleFollowToggle,
  openModal,
}) => {
  return (
    <div className={Classes.actions}>
      {/* Кнопка, открывающая модальное окно */}
      <button className={Classes.send_message_btn} onClick={() => openModal(userData)}>{t("SendMessage")}</button>
      {/* Кнопка подписки-отписки */}
      <ToggleFollowButton handleFollowToggle={handleFollowToggle} userData={userData} Classes={Classes} t={t}/>
    </div>
  );
};

export default UserActions;

