import React from "react";
import UserList from "./components/UserList";
import TodoList from "./components/TodoList";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Counter from "./components/Counter";
import NotFound from "./components/NotFound";

const App = () => {
  return (
    <div className='App'>
      <Header />
      <Routes>
        <Route path='/' element={<Counter />} />
        <Route path='/user' element={<UserList />} />
        <Route path='/todo' element={<TodoList />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
    </div>
  );
};

export default App;
