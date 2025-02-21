import React from "react";
import {useRequestHelpForm} from "../../../../../../hooks/useRequestHelpForm";
import {useInputHandlers} from "../../../../../../hooks/useInputHandlers";
import Help from "./Help";

const HelpContainer = ({helpCenter, t}) => {
  const {requestUserNameText, requestMessageText, errors, handleInputChange, handleFormSubmit}
    = useRequestHelpForm(helpCenter);
  const {handleKeyDown} = useInputHandlers('', handleFormSubmit);

  return (
   <Help requestUserNameText={requestUserNameText} requestMessageText={requestMessageText}
   errors={errors} handleInputChange={handleInputChange} handleKeyDown={handleKeyDown}
   handleFormSubmit={handleFormSubmit} t={t}/>
  )
}

export default HelpContainer;
