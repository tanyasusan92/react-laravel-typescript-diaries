import { Todo } from "../model";
import { RiDeleteBin6Line, RiPencilLine } from "react-icons/ri";
import { TiTick } from "react-icons/ti";

interface Props {
    todos: Todo[];
    setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
  }

const TodoList:React.FC<Props> = ({todos, setTodos}) =>{
    const handleDelete = (id:number) => {
        setTodos(todos.filter(todo=>todo.id!==id));
    }
  return (
    <>
      {todos.map((todo) => (
            <div key={todo.id} className="flex flex-row justify-between p-4 mb-2 mr-2 bg-pink-900 rounded-lg min-h-12">
              <span className="pr-10 text-lg">{todo.todo} </span>
              <div className="flex flex-row">
                <RiPencilLine className="text-xl text-white" />
                <RiDeleteBin6Line onClick={(e)=>handleDelete(todo.id)} className="ml-2 text-xl text-white cursor-pointer" />
                <TiTick className="ml-2 text-xl text-white"/>
              </div>
            </div>
          ))}
   </>
  )
}

export default TodoList;
