import React from "react";
import PersonalAccount from "./PersonalAccount/PersonalAccount"; // Импорт компонента для личного кабинета
import Confidentiality from "./Confidentiality/Confidentiality"; // Импорт компонента для конфиденциальности
import Language from "./Language/Language"; // Импорт компонента для выбора языка
import TermsAndPolicy from "./TermsAndPolice/TermsAndPolicy"; // Импорт компонента для политики и условий
import HelpContainer from "./Help/HelpContainer"; // Импорт компонента для справки
import LogOut from "./LogOut/LogOut"; // Импорт компонента для выхода из аккаунта
import EditProfile from "./PersonalAccount/EditProfile/EditProfile"; // Импорт компонента для редактирования профиля
import useData from "../../../../../hooks/useData"; // Импорт хука для получения данных

const SettingsOptions = ({ option, isLoading, t }) => {
  const settings = useData("settings"); // Получаем данные настроек через кастомный хук useData
  let SettingComponent; // Переменная для хранения компонента, который будет отображен в зависимости от выбора опции

  // В зависимости от выбранной опции, назначаем нужный компонент
  switch (option.title) {
    case "PersonalAccount":
      SettingComponent = (
        <PersonalAccount
          userInfo={settings.personalAccount.userData}
          isLoading={isLoading}
          t={t}
        />
      );
      break;
    case "Confidentiality":
      SettingComponent = (
        <Confidentiality
          confidentiality={settings.confidentiality.confidentialitySettings}
          t={t}
        />
      );
      break;
    case "Language":
      SettingComponent = <Language t={t} />;
      break;
    case "TermsAndPolicy":
      SettingComponent = (
        <TermsAndPolicy terms={settings.termsAndConditions} t={t} />
      );
      break;
    case "Help":
      SettingComponent = (
        <HelpContainer helpCenter={settings.helpCenter} t={t} />
      );
      break;
    case "Out":
      SettingComponent = <LogOut logOut={settings.logOut} t={t} />;
      break;
    case "EditProfile":
      SettingComponent = (
        <EditProfile personalAccount={settings.personalAccount} t={t} />
      );
      break;
    default:
      SettingComponent = <div>NOT FOUND</div>; // Если опция не найдена, выводится сообщение
  }

  return SettingComponent; // Возвращаем выбранный компонент
};

export default SettingsOptions;
