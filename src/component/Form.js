import React from "react";

const Form = ({ setInputText, todos, setTodos, inputText }) => {
  const inputTextHandler = (e) => {
    // console.log(e.target.value);
    setInputText(e.target.value);
  };

  const submitTodoHandler = (e) => {
    e.preventDefault();
    // console.log(inputText);
    if (inputText === "") {
      alert("You must write something!");
    } else {
      setTodos((todos) => [
        ...todos,
        { text: inputText, completed: false, id: Math.random() * 100 },
      ]);
      setInputText("");
    }
  };

  return (
    <div>
      <form type="text" className="input-form">
        <input
          value={inputText}
          onChange={inputTextHandler}
          className="todo-input"
          type="text"
          placeholder="Add a task."
        />
        <button onClick={submitTodoHandler} className="todo-btn" type="submit">
          Add Task
        </button>
      </form>
    </div>
  );
};

export default Form;
