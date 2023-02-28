import React, { useState } from "react";
import InputField from "./InputField";
import { Todo } from "./model";
import TodoList from "./TodoList/TodoList";

const App: React.FC = () => {
  const [todo, setTodo] = useState<string>("");
  const [todos, setTodos] = useState<Todo[]>([]);

  const handleAdd = (e: React.FormEvent) => {
    e.preventDefault();
    if (todo) {
      setTodos([...todos, { id: Date.now(), todo: todo, isDone: false }]);
      setTodo("");
    }
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-900">
      <h1 className="mb-8 text-3xl font-bold text-white">
        Todo with react and typescript
      </h1>
      <div className="flex flex-col items-start w-1/2 p-8 bg-gray-700 rounded-lg">
        <label
          htmlFor="inputField"
          className="mb-2 text-lg font-medium text-white"
        >
          My next todo:
        </label>
        <InputField todo={todo} setTodo={setTodo} handleAdd={handleAdd}/>
        
        <div className="flex flex-wrap text-white">
        <TodoList todos={todos}/>
        </div>
      </div>
    </div>
  );
};

export default App;
