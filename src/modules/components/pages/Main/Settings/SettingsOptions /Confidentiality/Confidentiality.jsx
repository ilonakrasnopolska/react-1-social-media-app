import React from "react";
import CommonClasses from '../../Settings.module.css'
import Classes from './Confidentiality.module.css'
import ConfidentialityList from "./ConfidentialityList/ConfidentialityList";
import Button from "../../../../../common/Button";
import Title from "../../../../../common/Title";
import {useConfidentialityActions} from "../../../../../../hooks/useConfidentialityActions";

const Confidentiality = ({confidentiality, t}) => {
  const {savePrivacySettings} = useConfidentialityActions();

  return (
    <section className='confidentiality section'>
      <div className={CommonClasses.content}>
        <div className={CommonClasses.wrapper}>
          <Title CommonClasses={CommonClasses} text={t("Confidentiality")}/>
          <p className={CommonClasses.text}>
          {t("ManagePrivacy")}
          </p>
          <form className={Classes.form}
                onSubmit={savePrivacySettings}>
            <ConfidentialityList confidentiality={confidentiality} t={t}/>
            <Button className={Classes.button}
                    onClick={savePrivacySettings}
                    label={t("Save")}/>
          </form>
        </div>
      </div>
    </section>
  )
}

export default Confidentiality;
