import React from "react";
import { Todo } from "../model";
import { RiDeleteBin6Line, RiPencilLine } from "react-icons/ri";
import { TiTick } from "react-icons/ti";

interface Props {
  todo: Todo;
  todos: Todo[];
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
}
const SingleTodo: React.FC<Props> = ({ todo, todos, setTodos }) => {
  const handleDelete = (id: number) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };
  const handleDone = (id: number) => {
    setTodos((prevState) => {
      const newArray = prevState.map((item) => {
        if (item.id === id) {
          return { ...item, isDone: !item.isDone };
        } else {
          return item;
        }
      });
      return newArray;
    });
  };
  return (
    <div
      key={todo.id}
      className="flex flex-row justify-between p-4 mb-2 mr-2 bg-pink-900 rounded-lg min-h-12"
    >
      {todo.isDone ? (
        <s className="pr-10 text-lg">{todo.todo} </s>
      ) : (
        <span className="pr-10 text-lg">{todo.todo} </span>
      )}
      <div className="flex flex-row">
        <RiPencilLine className="text-xl text-white" />
        <RiDeleteBin6Line
          onClick={(e) => handleDelete(todo.id)}
          className="ml-2 text-xl text-white cursor-pointer hover:text-gray-400"
        />
        <TiTick
          onClick={(e) => handleDone(todo.id)}
          className="ml-2 text-xl text-white cursor-pointer hover:text-gray-400"
        />
      </div>
    </div>
  );
};

export default SingleTodo;
