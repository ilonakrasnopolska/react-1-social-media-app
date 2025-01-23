import React from "react";
import {useSettingsPageHandler} from "../../../../hooks/useSettingsPageHandler";
import SettingsOptions from "./SettingsOptions /SettingsOptions";
import Settings from "./Settings";

const SettingsContainer = ({t}) => {
  const { enhancedSettingsOptions, selectedOption, isNotFound, id } = useSettingsPageHandler();
  if (isNotFound) {
    return <div>NOT FOUND</div>;
  }
  if (selectedOption) {
    return <SettingsOptions option={selectedOption} id={id} t={t} />;
  }
  return (
    <Settings t={t} enhancedSettingsOptions={enhancedSettingsOptions}/>
  )
}

export default SettingsContainer;
