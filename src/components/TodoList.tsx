import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../redux/store';
import { Todo } from '../types/Todo';
import { removeTodo, setTodoCompletedStatus, setTodoDeletedStatus } from '../redux/todoSlice';
import { useLocation } from 'react-router-dom';
import Navbar from './Navbar';

const TodoList: React.FC = () => {
  const todos = useSelector((state: RootState) => state);
  const dispatch = useDispatch();
  const location = useLocation();

  const handleRemoveTodo = (id: string) => {
    dispatch(removeTodo(id));
  };

  const handleToggleCompletedTodo = (id: string, completed: boolean) => {
    dispatch(setTodoCompletedStatus({ id, completed }));
  };

  const handleToggleDeleteTodo = (id: string, deleted: boolean) => {
    dispatch(setTodoDeletedStatus({ id, deleted }));
  };

  const filteredTodos = todos.filter((todo: Todo) => {
    if (location.pathname === '/completed') {
      return todo.completed;
    } else if (location.pathname === '/deleted') {
      return todo.deleted;
    } else if (location.pathname === '/all') {
      return true;
    } else {
      return !todo.completed && !todo.deleted;
    }
  });

  return (
    <div className='todo'>
      <Navbar />
      <ul className='todo__list'>
        {filteredTodos.map((todo: Todo) => (
          <li className='todo__item' key={todo.id}>
            <span>{todo.description}</span>
            {location.pathname !== '/deleted' && !todo.deleted && <input
              type="checkbox"
              className='todo__checkbox todo__checkbox_completed'
              checked={todo.completed}
              onChange={(e) => handleToggleCompletedTodo(todo.id, e.target.checked)}
            /> }
            {location.pathname !== '/completed' && !todo.completed && <input
              type="checkbox"
              className='todo__checkbox todo__checkbox_deleted'
              checked={todo.deleted}
              onChange={(e) => handleToggleDeleteTodo(todo.id, e.target.checked)}
            /> }
            {location.pathname === '/deleted' && <button className='todo__button' onClick={() => handleRemoveTodo(todo.id)}>Удалить</button>}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;