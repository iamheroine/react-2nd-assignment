import React, { useState } from "react";
import "./App.css";
import "./components/TodoBoard";

function App() {
  const [inputValue, setInputValue] = useState("");
  const [todoTitle, setTodoTitle] = useState("");
  const [todo, setTodo] = useState("");
  const [todoList, setTodoList] = useState([
    // { id: Date.now(), todoTitle: '공부하기', todo: '리액트 공부하기' },
    // { id: Date.now() + 1, todoTitle: '과제', todo: '리액트 과제하기' }
  ]);

  // Todo 추가
  const addItem = (e) => {
    e.preventDefault();
    if (!todoTitle || !todo) {
      alert("제목과 내용을 모두 입력해주세요!");
    } else {
      const newTodoList = {
        id: Date.now(),
        todoTitle: todoTitle,
        todo: todo,
      };

      setTodoList([...todoList, newTodoList]);
      setTodo("");
      setTodoTitle("");
    }
  };

  // Todo 삭제
  const removeTodo = (id) => {
    setTodoList(todoList.filter((list) => list.id !== id));
  };

  return (
    <>
      <form onSubmit={addUser}>
        <input
          type="text"
          value={inputValue}
          onChange={(e = setInputValue(e.target.value))}
        />
        <button type="submit" onClick={addItem}>
          할 일 추가
        </button>
      </form>
      <TodoBoard todoList={todoList} />
    </>
  );
}

export default App;
