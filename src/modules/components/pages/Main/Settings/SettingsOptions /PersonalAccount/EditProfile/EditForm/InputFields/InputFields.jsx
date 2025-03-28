import Select from "react-select"; // Импортируем компонент Select для выбора из списка

// Опции для поля выбора пола
const genderOptions = [
  { value: "Female", label: "Female" },
  { value: "Male", label: "Male" },
];

// Функция для рендеринга различных типов полей ввода в зависимости от ключа
const renderInputFields = (
  key,
  value,
  onChange,
  onKeyDown,
  onPaste,
  Classes
) => {
  // В зависимости от ключа, рендерим разные поля ввода
  switch (key) {
    case "dateOfBirth":
      // Если ключ "dateOfBirth", то рендерим input с типом date для ввода даты
      return (
        <input
          id={`input-${key}`}
          name={key}
          type="date" // Тип поля ввода - дата
          value={String(value)} // Преобразуем значение в строку
          onChange={(e) => onChange(key, e.target.value)} // Обработчик изменения значения
          className={Classes.input} // Применяем стили из переданного класса
          autoComplete="bday" // Для автозаполнения даты рождения
        />
      );
    case "gender":
      // Если ключ "gender", рендерим Select для выбора пола
      return (
        <Select
          inputId={`input-${key}`}
          name={key}
          value={genderOptions.find((option) => option.value === value)} // Находим выбранное значение из options
          onChange={
            (selectedOption) => onChange(key, selectedOption?.value || "") // При изменении выбираем новое значение
          }
          options={genderOptions} // Передаем список опций для выбора
          className={Classes.select} // Стили для селектора
          classNamePrefix="custom-select" // Префикс для кастомных стилей
          autoComplete="gender" // Для автозаполнения пола
        />
      );
    default:
      // Для остальных полей рендерим обычный input
      return (
        <input
          id={`input-${key}`}
          name={key}
          value={String(value)} // Преобразуем значение в строку
          onChange={(e) => onChange(key, e.target.value)} // Обработчик изменения значения
          onKeyDown={onKeyDown} // Обработчик нажатий клавиш
          onPaste={onPaste} // Обработчик вставки данных
          className={Classes.input} // Стили для поля ввода
          autoComplete={key === "name" ? "name" : "off"} // Включение автозаполнения только для поля "name"
        />
      );
  }
};

export default renderInputFields; // Экспортируем функцию для использования в других компонентах
