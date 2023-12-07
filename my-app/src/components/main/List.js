import React, { useState, useEffect } from 'react';
import { ListItem } from './ListItem';

export const List = () => {

    const [data, setData] = useState([]);
    const [selectedItem, setSelectedItem] = useState(null);

    useEffect(() =>{
        fetch('https://jsonplaceholder.typicode.com/todos')
        .then((response) => response.json())
        .then((json) => setData(json))
        .catch((error) => console.error('Error', error));
    }, []);

    const handleItemClick = (item) => {
        setSelectedItem(item.id === selectedItem?.id ? null : item);
    };

    return (
        <div>
            <h1>{selectedItem ? `Nazwa: ${selectedItem.title}` : 'Brak nazwy'}</h1>
            <ul>
                {data.map((item) => (
                    <ListItem
                    key={item.id}
                    item={item}
                    isSelected={selectedItem?.id === item.id}
                    onClick={() => handleItemClick(item)}
                    />
                ))}
            </ul>
        </div>
    );
  };
  