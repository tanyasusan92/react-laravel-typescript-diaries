import React, { useRef, useEffect } from "react";

interface Props {
  editValue: string;
  setEditValue: React.Dispatch<React.SetStateAction<string>>;
  handleEdit: (e: React.FormEvent, id: number) => void;
  id: number;
}

const EditField: React.FC<Props> = ({
  editValue,
  setEditValue,
  handleEdit,
  id,
}) => {
  const inputRef2 = useRef<HTMLInputElement>(null);

  useEffect(() => {
    inputRef2.current?.focus();
  }, []);

  return (
    <form onSubmit={(e) => handleEdit(e, id)}>
      <input
        className="p-2 text-lg text-white bg-gray-800 rounded-lg "
        type="input"
        ref={inputRef2}
        value={editValue}
        onChange={(e) => setEditValue(e.target.value)}
      />
    </form>
  );
};

export default EditField;
