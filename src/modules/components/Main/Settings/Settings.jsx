import React from "react";
import {useParams} from "react-router-dom";
import Classes from './Settings.module.css'
import {NavLink} from "react-router-dom";
import {useSelector} from "react-redux";
import SettingsOptions from "./SettingsOptions /SettingsOptions";

const Settings = () => {
  const { id } = useParams();
  const settingsOptions = useSelector(state => state.settings.settings)
  const editProfileOption = useSelector(state => state.settings.personalAccount.editPage);

  // Объединяем основное меню с editProfileOption только при необходимости
  const enhancedSettingsOptions = id === String(editProfileOption.id)
    ? [...settingsOptions, editProfileOption]  // Добавляем Edit Profile, если это тот же id
    : settingsOptions;

  if (id) {
    const selectedOption = enhancedSettingsOptions.find(option => option.id === Number(id));
    return selectedOption ? (
      <SettingsOptions option={selectedOption} />
    ) : (
      <div>NOT FOUND</div>
    );
  }

  return (
    <section className='settings section'>
      <ul className={Classes.list}>
        {enhancedSettingsOptions.map(option => (
          <li key={option.id} className={Classes.item}>
            <NavLink to={option.url}>{option.title}</NavLink>
          </li>))}
      </ul>
    </section>
  )
}

export default Settings;
