import { createContext, useReducer } from "react";
import Counter from "./components/counter";
import "./App.css";

export const reducerCount = (state, action) => {
  switch (action.type) {
    case "incrementa":
      return {
        value: state.value + 1,
      };
    case "decrementa":
      return {
        value: state.value - 1,
      };
    case "reset":
      return {
        value: 0,
      };
    default:
      return state;
  }
};

export const CounterContex = createContext({});

export const counterState = {
  value: 0,
};

function App() {
  const [state] = useReducer(reducerCount, counterState);

  return (
    <div className="App">
      <CounterContex.Provider value={state}>
        <Counter />
      </CounterContex.Provider>
    </div>
  );
}

export default App;
