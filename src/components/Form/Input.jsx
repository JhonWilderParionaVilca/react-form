import React from "react";

const Input = ({ type, identificator, text, value, handleChange }) => {
  return (
    <>
      <label htmlFor={identificator}>{text}</label>
      <input
        className="u-full-width"
        type={type}
        id={identificator}
        name={identificator}
        value={value}
        onChange={handleChange}
      />
    </>
  );
};

export default Input;
