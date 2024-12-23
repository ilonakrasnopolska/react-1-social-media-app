import React from "react";
import Classes from './Settings.module.css'
import {NavLink} from "react-router-dom";
import {useSettingsPageHandler} from "../../../../hooks/useSettingsPageHandler";
import SettingsOptions from "./SettingsOptions /SettingsOptions";

const Settings = ({t}) => {
  const { enhancedSettingsOptions, selectedOption, isNotFound, id } = useSettingsPageHandler();
  if (isNotFound) {
    return <div>NOT FOUND</div>;
  }
  if (selectedOption) {
    return <SettingsOptions option={selectedOption} id={id} t={t} />;
  }
  return (
    <section className='settings section'>
      <ul className={Classes.list}>
        {enhancedSettingsOptions.map(option => (
          <li key={option.id} className={Classes.item}>
            <NavLink to={option.url}>{t(option.title)}</NavLink>
          </li>))}
      </ul>
    </section>
  )
}

export default Settings;
