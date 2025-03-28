import React from "react";
import Classes from "./ConfidentialityList.module.css"; // Подключение стилей
import { useConfidentialityActions } from "../../../../../../../hooks/useConfidentialityActions"; // Хук для работы с действиями конфиденциальности

const ConfidentialityList = ({ confidentiality, t }) => {
  // Деструктуризация хука для обработки изменений
  const { handleChange } = useConfidentialityActions();

  return (
    // Список настроек конфиденциальности
    <ul className={Classes.list}>
      {/* Перебор массива конфиденциальности для отображения каждого элемента */}
      {confidentiality.map((confidentiality, index) => (
        <li key={index} className={Classes.item}>
          {/* Заголовок раздела конфиденциальности */}
          <h3>{t(confidentiality.title)}</h3>
          {/* Описание раздела конфиденциальности */}
          <p>{t(confidentiality.description)}</p>

          {/* Вложенный список с настройками конфиденциальности */}
          <ul className={Classes.subList}>
            {/* Перебор настроек для отображения каждой опции */}
            {confidentiality.settings.map((setting) => (
              <li key={setting.id} className={Classes.subItem}>
                <label>
                  {/* Радиокнопка для выбора опции конфиденциальности */}
                  <input
                    type="radio"
                    name={confidentiality.title} // Имя для группировки радио-кнопок
                    value={setting.value} // Значение опции
                    checked={setting.value === confidentiality.checked} // Проверка, выбрана ли эта опция
                    onChange={() =>
                      handleChange(setting.value, confidentiality.title)
                    } // Обработчик изменения значения
                  />
                  {/* Текст, который отображается рядом с радио-кнопкой */}
                  {t(setting.name)}
                </label>
              </li>
            ))}
          </ul>
        </li>
      ))}
    </ul>
  );
};

export default ConfidentialityList;
