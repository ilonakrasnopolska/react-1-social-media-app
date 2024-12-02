import React from "react";
import CommonClasses from '../../Settings.module.css'
import Classes from './PersonalAccount.module.css'
import {useSelector} from "react-redux";
import {NavLink} from "react-router-dom";

const PersonalAccount = () => {
  const userData = useSelector(state => state.settings.personalAccount.userData);
  const editPage = useSelector(state => state.settings.personalAccount.editPage);

  return (
    <section className='personal section'>
      <div className={CommonClasses.content}>
        <div className={CommonClasses.wrapper}>
          <h2 className={CommonClasses.title}>Personal Settings</h2>
          <p className={CommonClasses.text}>Edit your personal profile:</p>
          <div className={CommonClasses.user_data_edit}>
              <img className={CommonClasses.avatar} src={userData.avatar}
                   alt="Avatar"/>
            <div className={CommonClasses.about_user_edit}>
              <h1>{userData.name}</h1>
              <ul className={Classes.list}>
                <li className={Classes.item}>{`Date of Birth: ${userData.dateOfBirth}`}</li>
                <li className={Classes.item}>{`City: ${userData.city}`}</li>
                <li className={Classes.item}>{`Gender: ${userData.gender}`}</li>
                <li className={Classes.item}>{`Favorite anime: ${userData.favAnime}`}</li>
              </ul>
              <button className={Classes.button}>
                <NavLink to={editPage.url}
                         className={Classes.link}>
                  Edit
                </NavLink>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default PersonalAccount;
