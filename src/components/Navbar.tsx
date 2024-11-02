import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navbar: React.FC = () => {
  const location = useLocation();

  return (
    <nav className='todo__nav'>
      <ul className='todo__nav-list'>
        <li className={location.pathname === '/' ? 'active' : ''}>
          <Link to="/">
            Текущие дела
          </Link>
        </li>
        <li className={location.pathname === '/all' ? 'active' : ''}>
          <Link to="/all">
            Все дела
          </Link>
        </li>
        <li className={location.pathname === '/completed' ? 'active' : ''}>
          <Link to="/completed">
            Выполненные дела
          </Link>
        </li>
        <li className={location.pathname === '/deleted' ? 'active' : ''}>
          <Link to="/deleted">
            Корзина
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;