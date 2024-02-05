import React from 'react';

export const ListItem= ({ item, isSelected, onClick }) => {
  return (
    <li
      onClick={onClick}
      style={{
        background: isSelected ? 'lightgreen' : 'white',
        cursor: 'pointer',
      }}
    >
      {item.title}
    </li>
  );
};