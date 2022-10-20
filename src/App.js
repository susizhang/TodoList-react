import React, { useEffect, useState } from "react";
import "./App.css";
import Form from "./component/Form";
import LeftImg from "./leftimg.png";
import TodoList from "./component/TodoList";

const App = () => {
  const [inputText, setInputText] = useState("");
  const [todos, setTodos] = useState([]);

  // save to local
  console.log(todos);
  const saveLocalTodos = () => {
    localStorage.setItem("todos", JSON.stringify(todos));
  };

  const getLocalTodos = () => {
    if (localStorage.getItem("todos") === null) {
      localStorage.setItem("todos", JSON.stringify([]));
    } else {
      let todoLocal = JSON.parse(localStorage.getItem("todos"));
      setTodos(todoLocal);
    }
  };

  // run once when the app start

  useEffect(() => {
    getLocalTodos();
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  //  useEffect
  useEffect(() => {
    saveLocalTodos();
  }, [todos]); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <>
      <div className="leftContent">
        <h1 className="title">VWS's Todo List</h1>
        <img className="leftimg" src={LeftImg} alt="logoimg" />
      </div>
      <div className="mainContent">
        <Form
          todos={todos}
          setTodos={setTodos}
          inputText={inputText}
          setInputText={setInputText}
        />
        <TodoList todos={todos} setTodos={setTodos} />
      </div>
    </>
  );
};

export default App;
