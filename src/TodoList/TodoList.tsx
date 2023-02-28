import { Todo } from "../model";
import { RiDeleteBin6Line, RiPencilLine } from "react-icons/ri";
import { TiTick } from "react-icons/ti";

interface Props {
    todos: Todo[];
  }
const TodoList:React.FC<Props> = ({todos}) =>{
  return (
    <>
      {todos.map((todo) => (
            <div key={todo.id} className="flex flex-row justify-between p-4 mb-2 mr-2 bg-pink-900 rounded-lg min-h-12">
              <span className="pr-10 text-lg">{todo.todo} </span>
              <div className="flex flex-row">
                <RiPencilLine className="text-xl text-white" />
                <RiDeleteBin6Line className="ml-2 text-xl text-white" />
                <TiTick className="ml-2 text-xl text-white"/>
              </div>
            </div>
          ))}
   </>
  )
}

export default TodoList;
