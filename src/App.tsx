import React, { useState } from "react";
import TodoList from "./components/TodoList";
import NewTodo from "./components/NewTodo";
import { Todo } from "./models/Todo.model"



const App: React.FC = () => {
  const [todos, setTodos] = useState<Todo[]>([]);

  const addNewTodo = (text: string) => {
    const newTodo = {
      id: Math.random().toString(),
      text: text
    }
    setTodos(prevTodos => [...prevTodos, newTodo])
  };

  const deleteTodo = (id: string) => {
    setTodos(prevTodos => (
      prevTodos.filter(todo => (
        todo.id !== id
      ))
    ))
  };



  return (
    <div className="App">
      <NewTodo addNewTodo={addNewTodo} />
      <TodoList items={todos} deleteTodo={deleteTodo} />
    </div>
  );
}

export default App;
