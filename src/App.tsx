import React, { useContext } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import SignIn from './components/SignIn';
import TodoList from './components/TodoList';
import { AuthContext } from './context/AuthContext';

function App() {
  const { isLoggedIn } = useContext(AuthContext)!;

  return (
    <div>
      <Routes>
        <Route path="/signin" element={<SignIn />} />
        <Route
          path="/"
          element={isLoggedIn ? <TodoList /> : <Navigate to="/signin" />}
        />
        <Route
          path="/all"
          element={isLoggedIn ? <TodoList /> : <Navigate to="/signin" />}
        />
        <Route
          path="/completed"
          element={isLoggedIn ? <TodoList /> : <Navigate to="/signin" />}
        />
        <Route
          path="/deleted"
          element={isLoggedIn ? <TodoList /> : <Navigate to="/signin" />}
        />
      </Routes>
    </div>
  );
}

export default App;
