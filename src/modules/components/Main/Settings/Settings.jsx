import React from "react";
import Classes from './Settings.module.css'

const Settings = () => {
    const settingsOptions = [
      "Personal account",
      "Confidentiality",
      "Notifications",
      "Insights",
      "Language",
      "Terms and policies",
      "Help",
      "About",
      "Log out",
    ];
  return (
    <section className='settings section'>
      <ul className={Classes.list}>
        {settingsOptions.map((option, index) => (
          <li key={index} className={Classes.item}>
            <a>{option}</a>
          </li>
        ))}
      </ul>
    </section>
  )
}

export default Settings;
