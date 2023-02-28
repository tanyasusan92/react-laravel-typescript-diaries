import React from "react";
interface Props {
  todo: string;
  setTodo: React.Dispatch<React.SetStateAction<string>>;
  handleAdd: (e: React.FormEvent) => void;
}
const InputField = ({ todo, setTodo, handleAdd }: Props) => {
  return (
    <form className = "flex items-center justify-center" onSubmit={handleAdd}>
      <input className="w-full px-4 py-2 mb-4 text-white bg-gray-800 rounded-lg" type="input" value={todo} onChange={(e)=>setTodo(e.target.value)}/>
    </form>
  );
};

export default InputField;
