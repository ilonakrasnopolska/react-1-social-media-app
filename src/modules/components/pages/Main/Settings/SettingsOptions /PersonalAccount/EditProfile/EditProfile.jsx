import React from "react";
import CommonClasses from '../../../Settings.module.css'
import Classes from "./EditProfile.module.css";
import EditForm from "./EditForm/EditForm";
import Avatar from "../../../../../../common/Avatar";
import Title from "../../../../../../common/Title";
import {useEditAccountHandler} from "../../../../../../../hooks/useEditAccountHandler";


const EditProfile = ({personalAccount}) => {
  const {userData, errors, isFormValid, onSaveChange} = useEditAccountHandler(personalAccount);

  return (
    <section className='edit section'>
      <div className={CommonClasses.content}>
        <div className={CommonClasses.wrapper}>
          <Title CommonClasses={CommonClasses} text="Personal Settings"/>
          <p className={CommonClasses.text}>Edit your personal profile:</p>
          <div className={CommonClasses.user_data_edit}>
            <Avatar src={userData.avatar} alt={"Avatar"} className={CommonClasses.avatar}/>
            <div className={CommonClasses.about_user_edit}>
              <EditForm personalAccount={personalAccount}
                        userData={userData}
                        errors={errors}
              />
              <button
                onClick={onSaveChange}
                className={Classes.button}
                disabled={!isFormValid}
              >
                Save
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
};

export default EditProfile;