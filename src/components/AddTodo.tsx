import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTodo, removeAllTodos } from '../redux/todoSlice';

const AddTodo: React.FC = () => {
  const [description, setDescription] = useState('');
  const dispatch = useDispatch();

  const handleAddTodo = () => {
    if(description.length >= 3){
      dispatch(addTodo(description));
      setDescription('');
    }
  };

  const handleRemoveAllTodos = () => {
    dispatch(removeAllTodos());
  };

  return (
    <div>
      <button onClick={handleAddTodo}>Добавить</button>
      <input
        type="text"
        placeholder='Пополните список'
        minLength={3}
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <button onClick={handleRemoveAllTodos}>Очистить</button>
    </div>
  );
};

export default AddTodo;