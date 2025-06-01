import React from "react";
import Classes from './Term.module.css';  // Импорт стилей для компонента Term
import {AccordionButton, AccordionContent} from "../../../../../../common/Accordion/Accordion"; // Импорт компонентов для аккордеона
import {toggleTerm} from "../../../../../../../../redux/SettingsReducer/settings-reducer";


const Term = ({terms, t}) => {
  return (
    <ul className={Classes.terms}>
      {terms.map((term) => (
        <li key={term.id} className={Classes.termItem}>
          <AccordionButton
            MainClass={Classes.accordionButton}  // Главный класс для кнопки
            ClassActive={Classes}  // Классы для активного состояния
            term={term}  // Данные конкретного условия
            toggleTerm={toggleTerm} //передаем action из state
            t={t}  // Функция для локализации текста
          />
          {term.isOpen && (
            <AccordionContent
              MainClass={Classes.accordionContent}  // Главный класс для контента
              Classes={Classes}  // Классы для аккордеона
              term={term}  // Данные условия
              index={term.id}  // Индекс условия
              t={t}  // Функция для локализации
            />
          )}
        </li>
      ))}
    </ul>
  )
}

export default Term;
