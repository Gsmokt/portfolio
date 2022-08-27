import React from "react";

const FormRow = ({ name, text, errors, type, value, handleChange }) => {
  return (
    <>
      <label htmlFor={name}>
        {text}
        <span>{errors}</span>
      </label>

      <input
        id={name}
        type={type}
        name={name}
        value={value}
        onChange={handleChange}
        autoComplete="off"
      />
    </>
  );
};

export default FormRow;
