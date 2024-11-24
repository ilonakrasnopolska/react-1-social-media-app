import React from "react";
import Classes from './Confidentiality.module.css'
import {useDispatch} from "react-redux";
import ConfidentialityList from "./ConfidentialityList/ConfidentialityList";
import {saveConfidentialSettings} from "../../../../../../redux/SettingsReducer/settings-reducer";

const Confidentiality = () => {
  const dispatch = useDispatch();
  const onChangePrivacySettings = (event) => {
    event.preventDefault();
    dispatch(saveConfidentialSettings());
  };

  return (
    <section className='confidentiality section'>
      <div className={Classes.content}>
        <div className={Classes.wrapper}>
          <h2 className={Classes.title}>Confidentiality</h2>
          <p className={Classes.text}>
            Manage your privacy and data settings.
          </p>
          <form className={Classes.form}
                action=""
                method="POST"
                onSubmit={onChangePrivacySettings}>
            <ConfidentialityList/>
            <button className={Classes.button}
                    onClick={onChangePrivacySettings}
                    type="submit">
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}

export default Confidentiality;
