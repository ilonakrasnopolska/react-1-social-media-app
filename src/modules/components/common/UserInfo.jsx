const UserInfo = ({ userData, Classes, t }) => {
  return (
    <ul className={Classes.list}>
      <li className={Classes.item}>{`${t('DateOfBirth')}: ${userData.dateOfBirth}`}</li>
      <li className={Classes.item}>{`${t('City')}: ${userData.city}`}</li>
      <li className={Classes.item}> {`${t('Gender')}: ${t(userData.gender)}`}</li>
      <li className={Classes.item}>{`${t('FavoriteAnime')}: ${userData.favoriteAnime}`}</li>
    </ul>
  )
};

export default UserInfo;
