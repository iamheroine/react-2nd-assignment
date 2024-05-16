import React from "react";
import TodoItem from "./TodoItem";

function TodoBoard(props) {
  return (
    <div>
      <h1>Todo List</h1>
      {props.todoList.map((item)=><TodoItem item={item} />)}
      <TodoItem />
      <TodoItem />
      <TodoItem />
    </div>
  );
}

export default TodoBoard;
