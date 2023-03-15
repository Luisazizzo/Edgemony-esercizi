import Navbar from "./components/navBar/NavBar";
import Hero from "./components/hero/Hero";
import MiniCardList from "./components/miniCardList/MiniCardList";
import CardList from "./components/cardList/cardList";
import { useState } from "react";
import { GET } from "./utils/http";
import "./App.css";

function App() {
  const [miniCards, setMiniCards] = useState([]);
  const [inputValue, setInputValue] = useState("");

  const onHandleInput = (e) => setInputValue(() => e.target.value);

  const onHandleSubmit = (e) => {
    e.preventDefault();
    GET("/products/category/" + inputValue).then((data) =>
      setMiniCards(() => data.products)
    );
  };
  return (
    <div className="App">
      <Navbar
        onHandleInput={onHandleInput}
        onHandleSubmit={onHandleSubmit}
        inputValue={inputValue}
        setInputValue={setInputValue}
      />
      <Hero />
      <MiniCardList miniCards={miniCards} />
      <CardList title="Technology" endpoint="/products?limit=10" />
      <CardList title="Skincare" endpoint="/products?limit=10&skip=10" />
    </div>
  );
}

export default App;
