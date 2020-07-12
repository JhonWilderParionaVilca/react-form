import React from "react";

import ListItem from "./itemList";

const List = ({ data }) => {
  return (
    <ul>
      {data.map((item) => (
        <ListItem key={item.id} data={item} />
      ))}
    </ul>
  );
};

export default List;
