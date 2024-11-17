import React from "react";
import {useParams} from "react-router-dom";
import Classes from './Settings.module.css'
import {NavLink} from "react-router-dom";
import {useSelector} from "react-redux";
import SettingsOptions from "./SettingsOptions /SettingsOptions";

const Settings = () => {
  const { id } = useParams();
  const settingsOptions = useSelector(state => state.settings.settings)
  if (id) {
    const selectedOption = settingsOptions.find((option) => option.id === Number(id));
    return selectedOption ? (
      <SettingsOptions option={selectedOption} />
    ) : (
      <div>NOT FOUND</div>
    );
  }
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
