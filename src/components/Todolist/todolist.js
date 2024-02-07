import React, { useState } from 'react';
import './todolist.scss';

export function TodoList() {
  const [todos, setTodos] = useState([]);
  const [inputValue, setInputValue] = useState('');
  const [cartItemCount, setCartItemCount] = useState(0);

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleAddTodo = () => {
    if (inputValue.trim() !== '') {
      setTodos([...todos, { text: inputValue, addedToCart: false }]);
      setInputValue('');
    }
  };

  const handleDeleteTodo = (index) => {
    const deletedTodo = todos[index];
    const updatedTodos = todos.filter((element, i) => i !== index);
    setTodos(updatedTodos);
    
    if (deletedTodo.addedToCart) {
      setCartItemCount(cartItemCount - 1); 
    }
  };

  const handleAddToCart = (index) => {
    const updatedTodos = [...todos];
    updatedTodos[index].addedToCart = true;
    setTodos(updatedTodos);
    setCartItemCount(cartItemCount + 1); 
  };

  const handleClearTodos = () => {
    setTodos([]);
    setCartItemCount(0); 
  };

  return (
    <div className="todolist">
      <h1 className="todolist_title">Lista zakupów</h1>
      <div className="input">
        <input
          type="text"
          value={inputValue}
          onChange={handleInputChange}
          placeholder="Podaj nazwe produktu"
          className="input_item"
        />
        <button onClick={handleAddTodo} className="button_add">Dodaj</button>
      </div>
      <ul className="todolist_items">
        {todos.map((todo, index) => (
          <li key={index} className="todolist_item">
            <span className='bold'>{todo.text}</span>
            <div className='todo_buttons'>
              {!todo.addedToCart && <button onClick={() => handleAddToCart(index)} className="button_addtocart">Dodaj do koszyka</button>}
              {todo.addedToCart && <span className="msg_addtocart">Dodano!</span>}
              <button onClick={() => handleDeleteTodo(index)} className="button_delete">Usuń</button>
            </div>
          </li>
        ))}
      </ul>
      <div className='basket'>
        <span >Liczba rzeczy w koszyku: {cartItemCount}</span>
      </div>
      <button onClick={handleClearTodos} className="button_clear">Wyczyść listę</button>
    </div>
  );
}