import React from "react";
import { useState } from "react";

import "./Vanilla.css";

import { Form, List } from "../../components";

const VanillaForm = () => {
  const [dataSave, setDataSave] = useState([]);

  const getData = (data) => {
    setDataSave([...dataSave, data]);
  };

  return (
    <>
      <h1>Formulario Vanilla React</h1>
      <div className="container">
        <div className="row">
          <div className="one-half column">
            <h2>Agregar</h2>
            <Form getData={getData} />
          </div>

          <div className="one-half column">
            <List data={dataSave} />
          </div>
        </div>
      </div>
    </>
  );
};

export default VanillaForm;
