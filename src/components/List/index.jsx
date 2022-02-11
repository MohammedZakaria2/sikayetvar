import React from 'react';
import Item from './Item';

const List = ({ handelEdit, handelDelete, items }) => {
  return (
    <div>
      {items.map((item) => (
        <Item
          key={item.id}
          handelDelete={(id) => handelDelete(id)}
          handelEdit={(values) => handelEdit(values)}
          item={item}
        />
      ))}
    </div>
  );
};

export default List;
