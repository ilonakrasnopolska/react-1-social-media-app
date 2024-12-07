import React from "react";

export const InputField = ({ value, onChange, onKeyDown, placeholder, errors, className, Classes }) => {
  return (
  <div>
    <input
      className={`${className} ${errors ? Classes.error : ""}`}
      value={value}
      onChange={onChange}
      onKeyDown={onKeyDown}
      placeholder={placeholder}
    />
    {errors && <div className={Classes.error_message}>{errors}</div>}
  </div>
)};

export const TextAreaField = ({ value, onChange, onKeyDown, placeholder, errors, className, Classes }) => {
  return (
  <div>
    <textarea
      className={`${className} ${errors ? Classes.error : ""}`}
      value={value}
      onChange={onChange}
      onKeyDown={onKeyDown}
      placeholder={placeholder}
      rows="5"
      cols="50"
    />
    {errors && <div className={Classes.error_message}>{errors}</div>}
  </div>
)};

