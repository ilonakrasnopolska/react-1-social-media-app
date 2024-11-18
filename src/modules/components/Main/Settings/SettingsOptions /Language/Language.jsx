import React from "react";
import Classes from './Language.module.css'
import {useSelector} from "react-redux";

const Language = () => {
  const languages = useSelector(state => state.settings.languages);

  return (
    <section className='language section'>
      <div className={Classes.content}>
        <div className={Classes.wrapper}>
          <div className={Classes.app_language}>
            <h2 className={Classes.title}>Language Settings</h2>
            <label>
              Interface Language:
              <select>
                {languages.map((lang) => (
                  <option key={lang.id} value={lang.code}>
                    {lang.name}
                  </option>
                ))}
              </select>
            </label>
          </div>
          <div className={Classes.post_translation}>
            <h2 className={Classes.title}>Post Translations</h2>
            <label>
              <input
                type="checkbox"
                // checked={autoTranslation}
                // onChange={toggleAutoTranslation}
              />
              Enable automatic translation for posts
            </label>
          </div>
          <button className={Classes.button} onClick={() => alert('Settings saved!')}>Save Changes</button>
        </div>
      </div>
    </section>
  )
}

export default Language;
