import React from "react";
import CommonClasses from '../../Settings.module.css'
import Classes from './Language.module.css'
import Select from "react-select";
import {useLanguageSettings} from "../../../../../../hooks/useLanguageSettings";
import Title from "../../../../../common/Title";
import Button from "../../../../../common/Button";

const Language = () => {
  const {options, selectedOption, handleChange} = useLanguageSettings();

  return (
    <section className='language section'>
      <div className={CommonClasses.content}>
        <div className={CommonClasses.wrapper}>
          <div className={Classes.app_language}>
            <Title CommonClasses={Classes} text="Language Settings"/>
            <label>
              Interface Language:
              <Select
                options={options}
                value={selectedOption}
                onChange={handleChange}
                className={Classes.reactSelect}
                placeholder="Select a language"
              />
            </label>
          </div>
          <div className={Classes.post_translation}>
            <Title CommonClasses={Classes} text='Post Translations'/>
            <label>
              <input
                name='translate-app'
                type="checkbox"
                // checked={autoTranslation}
                // onChange={toggleAutoTranslation}
              />
              Enable automatic translation for posts
            </label>
          </div>
          <Button className={Classes.button}
                  onClick={() => alert('Still on work')}
                  label="Save Changes"/>
        </div>
      </div>
    </section>
  )
}

export default Language;
