import React from "react";
import Classes from './Settings.module.css'
import {NavLink} from "react-router-dom";
import {useSelector} from "react-redux";

const Settings = () => {
    const settingsOptions = useSelector(state => state.settings.settings)
  return (
    <section className='settings section'>
      <ul className={Classes.list}>
        {settingsOptions.map((option) => (
          <li key={option.id} className={Classes.item}>
            <NavLink to={option.url}>{option.title}</NavLink>
          </li>
        ))}
      </ul>
    </section>
  )
}

export default Settings;
