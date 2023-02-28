import React, { useRef } from "react";

interface Props {
  todo: string;
  setTodo: React.Dispatch<React.SetStateAction<string>>;
  handleAdd: (e: React.FormEvent) => void;
}
const InputField = ({ todo, setTodo, handleAdd }: Props) => {
  const inputRef = useRef<HTMLInputElement>(null);
  return (
    <form
      className="flex items-center justify-center"
      onSubmit={(e) => {
        handleAdd(e);
        console.log(inputRef.current);
      }}
    >
      <input
        className="w-full px-4 py-2 mb-4 text-white bg-gray-800 rounded-lg"
        ref={inputRef}
        type="input"
        value={todo}
        onChange={(e) => setTodo(e.target.value)}
      />
    </form>
  );
};

export default InputField;
