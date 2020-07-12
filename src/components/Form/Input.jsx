import React from "react";

const Input = ({ type, identificator, text }) => {
  return (
    <>
      <label htmlFor={identificator}>{text}</label>
      <input
        className="u-full-width"
        type={type}
        id={identificator}
        name={identificator}
      />
    </>
  );
};

export default Input;
