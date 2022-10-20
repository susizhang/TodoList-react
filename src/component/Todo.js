import React from "react";

const Todo = ({ text, todo, todos, setTodos }) => {
  const deleteHandler = () => {
    setTodos(todos.filter((e) => e.id !== todo.id));
  };

  const completeHandler = () => {
    setTodos(
      todos.map((item) => {
        if (item.id === todo.id) {
          return {
            ...item,
            completed: !item.completed,
          };
        }
        return item;
      })
    );
  };

  return (
    <div className={`todo standard-todo ${todo.completed ? "completed" : ""}`}>
      <li className="todo-item ">{text}</li>
      <button onClick={completeHandler} className="check-btn">
        <i className="fas fa-check"></i>
      </button>
      <button onClick={deleteHandler} className="delete-btn">
        <i className="fas fa-trash"></i>
      </button>
    </div>
  );
};

export default Todo;
