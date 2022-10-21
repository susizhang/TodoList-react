import React, { useEffect, useState } from "react";
import "./App.css";
import Form from "./component/Form";
import LeftImg from "./leftimg.png";
import TodoList from "./component/TodoList";

const App = () => {
  const [inputText, setInputText] = useState("");
  const [todos, setTodos] = useState([]);

  // run once when the app start
  useEffect(() => {
    getLocalTodos();
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  //  useEffect
  useEffect(() => {
    saveLocalTodos();
  }, [todos]); // eslint-disable-line react-hooks/exhaustive-deps

  // save to local
  const saveLocalTodos = () => {
    localStorage.setItem("my-todos", JSON.stringify(todos));
    console.log(saveLocalTodos);
  };

  const getLocalTodos = () => {
    if (localStorage.getItem("my-todos") === null) {
      localStorage.setItem("my-todos", JSON.stringify([]));
    } else {
      let todoLocal = JSON.parse(localStorage.getItem("my-todos"));
      setTodos(todoLocal);
    }
  };

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
