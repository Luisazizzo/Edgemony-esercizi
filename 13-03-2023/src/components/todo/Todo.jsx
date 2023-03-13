import { HiOutlineTrash } from "react-icons/hi";
import { useState } from "react";
import "./index.css";

const Todo = ({ item, deleteTodo }) => {
  const [completed, setCompleted] = useState(item.completed);

  const toggleTodo = () => {
    setCompleted((prev) => !prev);
  };

  return (
    <div className="Todo">
      <div
        onClick={toggleTodo}
        className={`pallino ${completed && "completed"}`}
      ></div>
      <p className={`title ${completed && "decoration"}`}>{item.title}</p>
      <HiOutlineTrash
        onClick={() => deleteTodo(item.title)}
        className="trash"
      />
    </div>
  );
};
export default Todo;
