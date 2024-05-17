import { useState } from "react";
import TodoForm from "./TodoForm"
import TodoList from "./TodoList"

const TodoContainer = () => {
  const [todos, setTodos] = useState([ // 상태 변경(todos, setTodos)
    {
      id: 1,
      title: "할 일 1",
      content: "할 일 1 내용",
      isDone: false,
  }
]);

  return (
    <div>
      <TodoForm setTodos={{setTodos}} />
      {/* setTodos 함수와 props를 TodoForm에 적용  */}
      <div>
        <TodoList />
        <TodoList />
      </div>
    </div>
  );
};

export default TodoContainer