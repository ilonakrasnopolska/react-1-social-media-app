const UserInfo = ({ userData, Classes }) => (
    <ul className={Classes.list}>
      <li className={Classes.item}>{`Date of Birth: ${userData.dateOfBirth}`}</li>
      <li className={Classes.item}>{`City: ${userData.city}`}</li>
      <li className={Classes.item}>{`Gender: ${userData.gender}`}</li>
      <li className={Classes.item}>{`Favorite anime: ${userData.favAnime}`}</li>
    </ul>
);

export default UserInfo;
