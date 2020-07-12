import React from "react";

import Input from "./Input";

const Form = () => {
  return (
    <form>
      <Input type="text" identificator="user" text="Usuario" />
      <Input type="email" identificator="email" text="Email" />
      <Input type="date" identificator="date" text="Fecha" />
      <Input type="time" identificator="hour" text="Hora" />

      <label htmlFor="symptoms">Symptoms</label>
      <textarea className="u-full-width" id="symptoms" name="symptoms" />

      <input
        className="u-full-width button-primary"
        type="submit"
        value="Guardar"
      />
    </form>
  );
};

export default Form;
