import React, { useState } from "react";
import "./App.css";
import Form from "./component/Form";
import LeftImg from "./leftimg.png";
import TodoList from "./component/TodoList";

const App = () => {
  const [inputText, setInputText] = useState("");
  const [todos, setTodos] = useState([]);
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
