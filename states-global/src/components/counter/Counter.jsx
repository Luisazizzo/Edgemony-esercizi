import { useContext, useReducer } from "react";
import { CounterContex, reducerCount } from "../../App";
import "./index.css";

const Counter = () => {
  const count = useContext(CounterContex);

  const [state, dispatch] = useReducer(reducerCount, count);

  return (
    <div className="Counter">
      <button
        onClick={() => dispatch({ type: "decrementa" })}
        className="decrementa"
      >
        Decrementa
      </button>
      <p>{state.value}</p>
      <button
        onClick={() => dispatch({ type: "incrementa" })}
        className="incrementa"
      >
        Incrementa
      </button>
      <button onClick={() => dispatch({ type: "reset" })} className="reset">
        Reset
      </button>
    </div>
  );
};

export default Counter;
