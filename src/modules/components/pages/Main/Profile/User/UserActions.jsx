const UserActions = ({ Classes, t }) => {
  return (
    <div className={Classes.actions}>
      {/* Кнопка, открывающая модальное окно */}
      <button className={Classes.button}>
        {t("SendMessage")}
      </button>
      <button
      // onClick={() => handleFollowToggle(friend)}
      // className={Classes[friend.isFollow ? "btn_unFollow" : "btn_follow"]}
      >
        {/* {t(friend.isFollow ? "Unfollow" : "Follow")} */}
        Follow
      </button>
    </div>
  );
};

export default UserActions;

// onClick={() => openModal(friend)}
