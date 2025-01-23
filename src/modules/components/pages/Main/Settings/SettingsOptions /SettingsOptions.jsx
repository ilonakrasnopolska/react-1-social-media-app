import React from "react";
import PersonalAccount from "./PersonalAccount/PersonalAccount";
import Confidentiality from "./Confidentiality/Confidentiality";
import Language from "./Language/Language";
import TermsAndPolicy from "./TermsAndPolice/TermsAndPolicy";
import HelpContainer from "./Help/HelpContainer";
import LogOut from "./LogOut/LogOut";
import EditProfile from "./PersonalAccount/EditProfile/EditProfile";
import useData from "../../../../../hooks/useData";

const SettingsOptions = ({id, t}) => {
  const settings = useData('settings');
  let SettingComponent;
  switch (id) {
    case '1':
      SettingComponent = <PersonalAccount t={t}/>;
      break;
    case '2':
      SettingComponent = <Confidentiality confidentiality={settings.confidentiality.confidentialitySettings} t={t}/>;
      break;
    case '3':
      SettingComponent = <Language t={t}/>;
      break;
    case '4':
      SettingComponent = <TermsAndPolicy terms={settings.termsAndConditions} t={t}/>;
      break;
    case '5':
      SettingComponent = <HelpContainer helpCenter={settings.helpCenter} t={t}/>;
      break;
    case '6':
      SettingComponent = <LogOut logOut={settings.logOut} t={t}/>;
      break;
    case '7':
      SettingComponent = <EditProfile personalAccount={settings.personalAccount} t={t}/>;
      break;
    default:
      SettingComponent = <div>NOT FOUND</div>;
  }

  return (
    SettingComponent
  );
};

export default SettingsOptions;
