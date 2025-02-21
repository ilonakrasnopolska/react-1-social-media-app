import React from "react";
import { ClipLoader } from "react-spinners";
import CommonClasses from '../../Settings.module.css'
import Classes from './PersonalAccount.module.css'
import Avatar from "../../../../../common/Avatar";
import NavButton from "../../../../../common/NavButton";
import UserInfo from "../../../../../common/UserInfo/UserInfo";
import Title from "../../../../../common/Title";
import {usePersonalAccountData} from "../../../../../../hooks/useGetPersonalAccountData";
import { useFetchAndDispatch } from "../../../../../../hooks/useFetchAndDispatch";
import { fetchProfileData } from "../../../../../../../api/profileAPI";

const PersonalAccount = ({userInfo, isLoading, t}) => {
  useFetchAndDispatch(() => fetchProfileData(userInfo));
  const {userData, editPage} = usePersonalAccountData();
  return (
    <section className='personal section'>
      <div className={CommonClasses.content}>
        <div className={CommonClasses.wrapper}>
          <Title CommonClasses={CommonClasses} text={t("PersonalSettings")}/>
          <p className={CommonClasses.text}>{t("EditProfile")}</p>
          <div className={CommonClasses.user_data_edit}>
          {isLoading ? (
       <div className={CommonClasses.card}>
        <div className={Classes.spinner}>
          <ClipLoader color="#194770" size={50} />
        </div>
        </div>
      ) : (
        <div className={CommonClasses.card}>
        <Avatar src={userData.avatar} alt={"Avatar"} className={CommonClasses.avatar}/>
        <div className={CommonClasses.about_user_edit}>
          <h1>{userData.name}</h1>
          <UserInfo userData={userData} Classes={Classes} t={t}/>
          <NavButton to={`/settings/${editPage.id}`}
                  label={t('Edit')}
                  className={Classes.button}
                  classNavLink={Classes.link}/>
        </div>
        </div>
      )}
          </div>
        </div>
      </div>
    </section>
  )
}

export default PersonalAccount;
