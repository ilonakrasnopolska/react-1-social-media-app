import React from "react";
import CommonClasses from '../../Settings.module.css'
import Classes from './Language.module.css'
import {useSelector, useDispatch} from "react-redux";
import Select from "react-select";
import {updateSelectedLanguage} from "../../../../../../redux/SettingsReducer/settings-reducer";

const Language = () => {
  const dispatch = useDispatch();
  const { languages, selectedLanguage } = useSelector((state) => state.settings.languageSettings);

  // Преобразуем объект языков в массив для react-select
  const options = Object.values(languages).map((lang) => ({
    value: lang.code,
    label: lang.name,
  }));
  // Найти выбранный язык в массиве опций
  const currentOption = options.find((option) => option.value === selectedLanguage);

  const handleChange = (selectedOption) => {
    dispatch(updateSelectedLanguage(selectedOption.value));
  };

  return (
    <section className='language section'>
      <div className={CommonClasses.content}>
        <div className={CommonClasses.wrapper}>
          <div className={Classes.app_language}>
            <h2 className={Classes.title}>Language Settings</h2>
            <label>
              Interface Language:
              <Select
                options={options}
                value={currentOption} // Текущее значение
                onChange={handleChange} // Обработчик выбора
                className={Classes.reactSelect} // Класс для стилизации
                placeholder="Select a language"
              />
            </label>
          </div>
          <div className={Classes.post_translation}>
            <h2 className={Classes.title}>Post Translations</h2>
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
          <button className={Classes.button} onClick={() => alert('Still on work')}>Save Changes</button>
        </div>
      </div>
    </section>
  )
}

export default Language;
