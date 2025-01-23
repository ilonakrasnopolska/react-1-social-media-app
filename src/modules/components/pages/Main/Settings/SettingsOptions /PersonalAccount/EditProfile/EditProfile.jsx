import React from "react";
import CommonClasses from '../../../Settings.module.css'
import Classes from "./EditProfile.module.css";
import EditForm from "./EditForm/EditForm";
import Avatar from "../../../../../../common/Avatar";
import Title from "../../../../../../common/Title";
import {useEditAccountForm} from "../../../../../../../hooks/useEditAccountForm";


const EditProfile = ({personalAccount, t}) => {
  const {userData, errors, isFormValid, handleSaveChanges} = useEditAccountForm(personalAccount);
  return (
    <section className='edit section'>
      <div className={CommonClasses.content}>
        <div className={CommonClasses.wrapper}>
          <Title CommonClasses={CommonClasses} text={t("PersonalSettings")}/>
          <p className={CommonClasses.text}>{t("EditProfile")}</p>
          <div className={CommonClasses.user_data_edit}>
            <Avatar src={userData.avatar} alt={"Avatar"} className={CommonClasses.avatar}/>
            <div className={CommonClasses.about_user_edit}>
              <EditForm personalAccount={personalAccount}
                        userData={userData}
                        errors={errors}
                        t={t}
              />
              <button
                onClick={handleSaveChanges}
                className={Classes.button}
                disabled={!isFormValid}
              >
                {t("Save")}
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
};

export default EditProfile;
