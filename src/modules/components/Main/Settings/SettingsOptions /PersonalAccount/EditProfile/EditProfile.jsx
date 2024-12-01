import React from "react";
import Classes from "./EditProfile.module.css";
import {useNavigate} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import EditForm from "./EditForm/EditForm";
import {updateProfileInfo} from "../../../../../../../redux/ProfileReducer/profile-reducer";


const EditProfile = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const userData = useSelector(state => state.settings.personalAccount.userData);
  const isFormValid = useSelector(state => state.settings.personalAccount.isFormValid);
  const errors = useSelector(state => state.settings.personalAccount.errors);
  const personalAccount = useSelector(state =>
    state.settings.settings.find(page => page.title === 'Personal account')
  );

  const onSaveChange = (e) => {
    e.preventDefault();

    if (!isFormValid) return;
    dispatch(updateProfileInfo(userData));
    navigate(personalAccount.url);
  }

  return (
    <section className='edit section'>
      <div className={Classes.content}>
        <div className={Classes.wrapper}>
          <h2 className={Classes.title}>Personal Settings</h2>
          <p className={Classes.text}>Edit your personal profile:</p>
          <div className={Classes.user_data_edit}>
            <img className={Classes.avatar} src={userData.avatar}
                 alt="Avatar"/>
            <div className={Classes.about}>
              <EditForm userData={userData}
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
