import React from "react";
import {toggleTerm} from "../../../../redux/SettingsReducer/settings-reducer";
import {useDispatch} from "react-redux";


export const AccordionButton = ({MainClass, ClassActive, term, t}) => {
  const dispatch = useDispatch();
  return (
    <button
      className={`${MainClass} ${term.isOpen ? ClassActive.active : ""}`}
      onClick={() => dispatch(toggleTerm(term.id))}
    >
      {t(term.term)}
    </button>
  );
};

export const AccordionContent = ({MainClass, Classes, term, index, t}) => {
  return (
    <ol className={MainClass}>
      {term.description.map((desc, descIndex) => {
        const descriptionKey = `term_${index + 1}_${descIndex + 1}`;
        return (
          <li key={descriptionKey} className={Classes.description}>
            {t(descriptionKey)}
          </li>
        );
      })}
    </ol>
  )
};
