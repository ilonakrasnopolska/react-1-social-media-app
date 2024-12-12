import React from "react";
import Classes from './Term.module.css'
import {AccordionButton, AccordionContent} from "../../../../../../common/Accordion/Accordion";


const Term = ({terms}) => {
  return (
    <ul className={Classes.terms}>
      {terms.map((term) => (
        <li key={term.id} className={Classes.termItem}>
          <AccordionButton MainClass={Classes.accordionButton} ClassActive={Classes} term={term}/>
          {term.isOpen && (
            <AccordionContent MainClass={Classes.accordionContent} Classes={Classes} term={term}/>
          )}
        </li>
      ))}
    </ul>
  )
}

export default Term;
