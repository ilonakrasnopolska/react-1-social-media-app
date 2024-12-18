import React from "react";
import CommonClasses from '../../Settings.module.css'
import Classes from './Confidentiality.module.css'
import ConfidentialityList from "./ConfidentialityList/ConfidentialityList";
import Button from "../../../../../common/Button";
import Title from "../../../../../common/Title";
import {useConfidentialityActions} from "../../../../../../hooks/useConfidentialityActions";

const Confidentiality = ({confidentiality}) => {
  const {savePrivacySettings} = useConfidentialityActions();

  return (
    <section className='confidentiality section'>
      <div className={CommonClasses.content}>
        <div className={CommonClasses.wrapper}>
          <Title CommonClasses={CommonClasses} text="Confidentiality"/>
          <p className={CommonClasses.text}>
            Manage your privacy and data settings.
          </p>
          <form className={Classes.form}
                onSubmit={savePrivacySettings}>
            <ConfidentialityList confidentiality={confidentiality}/>
            <Button className={Classes.button}
                    onClick={savePrivacySettings}
                    label="Send Message"/>
          </form>
        </div>
      </div>
    </section>
  )
}

export default Confidentiality;
