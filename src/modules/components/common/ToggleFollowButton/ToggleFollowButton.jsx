const ToggleFollowButton = ({handleFollowToggle, userData, Classes, t}) => {
  return(
    <button
    onClick={() => handleFollowToggle(userData)}
    className={Classes[userData.isFollow ? "btn_unFollow" : "btn_follow"]}
  >
    {t(userData.isFollow ? "Unfollow" : "Follow")}
  </button>
  )
}

export default ToggleFollowButton;
