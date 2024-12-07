import Select from "react-select";

const genderOptions = [
  {value: "Female", label: "Female"},
  {value: "Male", label: "Male"}
];

const renderInputFields = (key, value, onChange, onKeyDown, onPaste, Classes) => {
  switch (key) {
    case "dateOfBirth":
      return (
        <input
          id={`input-${key}`}
          name={key}
          type="date"
          value={String(value)}
          onChange={(e) => onChange(key, e.target.value)}
          className={Classes.input}
          autoComplete="bday"
        />
      );
    case "gender":
      return (
        <Select
          inputId={`input-${key}`}
          name={key}
          value={genderOptions.find((option) => option.value === value)}
          onChange={(selectedOption) =>
            onChange(key, selectedOption?.value || "")
          }
          options={genderOptions}
          className={Classes.select}
          classNamePrefix="custom-select"
          autoComplete="gender"
        />
      );
    default:
      return (
        <input
          id={`input-${key}`}
          name={key}
          value={String(value)}
          onChange={(e) => onChange(key, e.target.value)}
          onKeyDown={onKeyDown}
          onPaste={onPaste}
          className={Classes.input}
          autoComplete={key === "name" ? "name" : "off"}
        />
      );
  }
};

export default renderInputFields;
