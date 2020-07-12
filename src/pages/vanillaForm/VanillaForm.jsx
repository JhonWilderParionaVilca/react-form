import React from "react";

import "./Vanilla.css";

import { Form } from "../../components";

const VanillaForm = () => {
  return (
    <>
      <h1>Formulario Vanilla React</h1>
      <div className="container">
        <div className="row">
          <div className="one-half column">
            <h2>Agregar</h2>
            <Form />
          </div>
          <div className="one-half column">
            <h2>Listar</h2>
          </div>
        </div>
      </div>
    </>
  );
};

export default VanillaForm;
