import Todo from "../todo/Todo";
import todos from "../../mock/toDo";
import "./index.css";
import { useState } from "react";

const TodosLista = () => {
  const [todo, setTodo] = useState(todos);
  const [input, setInput] = useState("");

  const inputAdd = (e) => {
    e.preventDefault();

    const newTodo = {
      title: input,
      completed: false,
    };

    setTodo([newTodo, ...todo]);
    setInput("");
  };

  const deleteTodo = (title) => {
    setTodo(todo.filter((item) => item.title !== title));
  };

  return (
    <div className="TodosLista">
      <h1>Lista delle cose da fare</h1>
      <form onSubmit={inputAdd} className="TodosLista__form-add">
        <input
          className="input"
          value={input}
          type="text"
          onChange={(e) => setInput(e.target.value)}
          required
        />
        <input className="submit" type="submit" value="+Aggiungi" />
      </form>
      {todo.map((item, i) => (
        <Todo deleteTodo={deleteTodo} item={item} key={i} />
      ))}
    </div>
  );
};
export default TodosLista;
