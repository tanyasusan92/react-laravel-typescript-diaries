import { Todo } from "../model";
import SingleTodo from "./SingleTodo";

interface Props {
  todos: Todo[];
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
}

const TodoList: React.FC<Props> = ({ todos, setTodos }) => {
  return (
    <>
      {todos.map((todo) => (
        <SingleTodo
          todo={todo}
          todos={todos}
          setTodos={setTodos}
          key={todo.id}
        />
      ))}
    </>
  );
};

export default TodoList;
