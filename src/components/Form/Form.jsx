import React from "react";
import uuid from "uuid/dist/v4";

import Input from "./Input";
import { useState } from "react";

const Form = ({ getData }) => {
  const initialState = {
    user: "",
    email: "",
    date: "",
    hour: "",
    comment: "",
  };
  const [dataForm, setDataFom] = useState(initialState);
  // destructuring
  const { user, email, date, hour, comment } = dataForm;

  /* Controlled Components  */
  const handleChange = (e) => {
    setDataFom({
      ...dataForm,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    /* validate form */
    /* add id */
    dataForm.id = uuid();
    /* send data to principal component */
    getData(dataForm);
    /* reset form  : event.target.reset() no se debe de usar para controlled componets*/
    setDataFom(initialState);
  };
  return (
    <form onSubmit={handleSubmit}>
      <Input
        value={user}
        handleChange={handleChange}
        type="text"
        identificator="user"
        text="Usuario"
      />

      <Input
        value={email}
        handleChange={handleChange}
        type="email"
        identificator="email"
        text="Email"
      />

      <Input
        value={date}
        handleChange={handleChange}
        type="date"
        identificator="date"
        text="Fecha"
      />

      <Input
        value={hour}
        handleChange={handleChange}
        type="time"
        identificator="hour"
        text="Hora"
      />

      <label htmlFor="comment">Comentarios</label>
      <textarea
        className="u-full-width"
        id="comment"
        name="comment"
        value={comment}
        onChange={handleChange}
      />

      <input
        className="u-full-width button-primary"
        type="submit"
        value="Guardar"
      />
    </form>
  );
};

export default Form;
