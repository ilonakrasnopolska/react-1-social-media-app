import React from "react";
import CommonClasses from '../../Settings.module.css'
import Classes from './Language.module.css'
import Select from "react-select";
import {useContext} from "react";
import {useLanguageSettings} from "../../../../../../hooks/useLanguageSettings";
import LanguageContext from "../../../../../../../contexts/LanguageContext";
import Title from "../../../../../common/Title";
import Button from "../../../../../common/Button";

const Language = ({t}) => {
  const {options, selectedOption, handleChange, saveLanguage} = useLanguageSettings();
  const { changeLanguage } = useContext(LanguageContext);

  return (
    <section className='language section'>
      <div className={CommonClasses.content}>
        <div className={CommonClasses.wrapper}>
          <div className={Classes.app_language}>
            <Title CommonClasses={Classes} text={t("LanguageSettings")}/>
            <label>
            {t("InterfaceLanguage")+ ":"}
              <Select
                options={options}
                value={selectedOption}
                onChange={(selected) => handleChange(selected.value)}
                className={Classes.reactSelect}
              />
            </label>
          </div>
          <Button className={Classes.button}
                   onClick={() => {
                    saveLanguage(changeLanguage, selectedOption.value);
                  }}
                  label={t("SaveChanges")}/>
        </div>
      </div>
    </section>
  )
}

export default Language;
