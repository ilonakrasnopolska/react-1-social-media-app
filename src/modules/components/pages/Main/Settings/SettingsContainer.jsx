import React from "react";
import { useParams } from "react-router-dom";
import {useSettingsPageHandler} from "../../../../hooks/useSettingsPageHandler";
import useData from "../../../../hooks/useData";
import SettingsOptions from "./SettingsOptions /SettingsOptions";
import Settings from "./Settings";

const SettingsContainer = ({t}) => {
  const { id } = useParams();
  const isLoading = useData('loading');
  const { enhancedSettingsOptions, selectedOption, isNotFound } = useSettingsPageHandler(id);
  if (isNotFound) {
    return <div>NOT FOUND</div>;
  }
  return selectedOption ? (
    <SettingsOptions option={selectedOption} id={id} t={t} isLoading={isLoading} />
  ) : (
    <Settings t={t} enhancedSettingsOptions={enhancedSettingsOptions} />
  );
}

export default SettingsContainer;
