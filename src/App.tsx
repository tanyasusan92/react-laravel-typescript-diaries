import React, { useState } from "react";
import { RiDeleteBin6Line, RiPencilLine } from "react-icons/ri";
import { TiTick } from "react-icons/ti";
import InputField from "./InputField";
import { Todo } from "./model";

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
          {todos.map((todo, id) => (
            <div key={todo.id} className="flex flex-row justify-between p-4 mb-2 mr-2 bg-pink-900 rounded-lg min-h-12">
              <span className="pr-10 text-lg">{todo.todo} </span>
              <div className="flex flex-row">
                <RiPencilLine className="text-xl text-white" />
                <RiDeleteBin6Line className="ml-2 text-xl text-white" />
                <TiTick className="ml-2 text-xl text-white"/>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default App;
