import React from "react";
import { useParams } from "react-router-dom"; // Для получения параметров из URL
import { useSettingsPageHandler } from "../../../../hooks/useSettingsPageHandler"; // Хук для обработки логики страницы настроек
import useData from "../../../../hooks/useData"; // Хук для работы с данными, например, для отслеживания загрузки
import SettingsOptions from "./SettingsOptions /SettingsOptions"; // Компонент для отображения выбранной опции настроек
import Settings from "./Settings"; // Компонент для отображения всех настроек

const SettingsContainer = ({ t }) => {
  // Получение параметра id из URL
  const { title } = useParams();
  // Использование хука для отслеживания состояния загрузки
  const isLoading = useData("loading");
  // Получаем state настроек
  const settings = useData("settings");

  // Логика обработки страницы настроек
  const { enhancedSettingsOptions, selectedOption, isNotFound } =
    useSettingsPageHandler(title);

  if (isLoading || !settings) {
    return <div>Loading...</div>; // Или спиннер
  }

  // Если настройки не найдены, показываем сообщение
  if (isNotFound) {
    return <div>NOT FOUND</div>;
  }

  // Если выбранная опция настроек существует, отображаем её, иначе отображаем все настройки
  return selectedOption ? (
    <SettingsOptions
      option={selectedOption}
      title={title}
      t={t}
      isLoading={isLoading}
    />
  ) : (
    <Settings t={t} enhancedSettingsOptions={enhancedSettingsOptions} />
  );
};

export default SettingsContainer;
