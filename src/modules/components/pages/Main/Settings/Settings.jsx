import React from "react";
import Classes from './Settings.module.css'
import {NavLink} from "react-router-dom";


const Settings = ({t, enhancedSettingsOptions}) => {
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
