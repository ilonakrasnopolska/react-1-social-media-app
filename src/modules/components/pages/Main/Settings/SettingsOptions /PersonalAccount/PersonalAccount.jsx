import React from "react";
import CommonClasses from '../../Settings.module.css'
import Classes from './PersonalAccount.module.css'
import Avatar from "../../../../../common/Avatar";
import NavButton from "../../../../../common/NavButton";
import UserInfo from "../../../../../common/UserInfo/UserInfo";
import Title from "../../../../../common/Title";
import {usePersonalAccountData} from "../../../../../../hooks/useGetPersonalAccountData";

const PersonalAccount = () => {
  const {userData, editPage} = usePersonalAccountData();

  return (
    <section className='personal section'>
      <div className={CommonClasses.content}>
        <div className={CommonClasses.wrapper}>
          <Title CommonClasses={CommonClasses} text='Personal Settings'/>
          <p className={CommonClasses.text}>Edit your personal profile:</p>
          <div className={CommonClasses.user_data_edit}>
            <Avatar src={userData.avatar} alt={"Avatar"} className={CommonClasses.avatar}/>
            <div className={CommonClasses.about_user_edit}>
              <h1>{userData.name}</h1>
              <UserInfo userData={userData} Classes={Classes}/>
              <NavButton to={editPage.url}
                      label="Edit"
                      className={Classes.button}
                      classNavLink={Classes.link}/>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default PersonalAccount;
