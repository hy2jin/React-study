import React from "react";
import InsertTodo from "./InsertTodo";
import TodoList from "./TodoList";

const TodoApp = () => {
  return (
    <div>
      <InsertTodo />
      <TodoList />
    </div>
  );
};

export default TodoApp;
