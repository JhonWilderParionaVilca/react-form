import React from "react";

import style from "./ItemList.module.css";

const List = ({ data: { user, email, date, hour, comment } }) => {
  return (
    <li className={style.item}>
      <p>
        Usuario: <span>{user}</span>
      </p>
      <p>
        Email: <span>{email}</span>
      </p>
      <p>
        Fecha: <span>{date}</span>
      </p>
      <p>
        Hora: <span>{hour}</span>
      </p>
      <p>
        Comentario: <span>{comment}</span>
      </p>
    </li>
  );
};

export default List;
