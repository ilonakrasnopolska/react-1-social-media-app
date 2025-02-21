import React from "react";
import PersonalAccount from "./PersonalAccount/PersonalAccount";
import Confidentiality from "./Confidentiality/Confidentiality";
import Language from "./Language/Language";
import TermsAndPolicy from "./TermsAndPolice/TermsAndPolicy";
import HelpContainer from "./Help/HelpContainer";
import LogOut from "./LogOut/LogOut";
import EditProfile from "./PersonalAccount/EditProfile/EditProfile";
import useData from "../../../../../hooks/useData";

const SettingsOptions = ({option, isLoading, t}) => {
  const settings = useData('settings');
  let SettingComponent;
  switch (option.title) {
    case 'PersonalAccount':
      SettingComponent = <PersonalAccount userInfo={settings.personalAccount.userData} isLoading={isLoading} t={t}/>;
      break;
    case 'Confidentiality':
      SettingComponent = <Confidentiality confidentiality={settings.confidentiality.confidentialitySettings} t={t}/>;
      break;
    case 'Language':
      SettingComponent = <Language t={t}/>;
      break;
    case 'TermsAndPolicy':
      SettingComponent = <TermsAndPolicy terms={settings.termsAndConditions} t={t}/>;
      break;
    case 'Help':
      SettingComponent = <HelpContainer helpCenter={settings.helpCenter} t={t}/>;
      break;
    case 'Out':
      SettingComponent = <LogOut logOut={settings.logOut} t={t}/>;
      break;
    case 'EditProfile':
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
