import Navbar from "./components/navBar/NavBar";
import Hero from "./components/hero/Hero";
import MiniCardList from "./components/miniCardList/MiniCardList";
import CardList from "./components/cardList/cardList";
import TendinaCart from "./components/tendinaCart/TendinaCart";
import CardDescription from "./components/cardDescription";
import { useState } from "react";
import { GET } from "./utils/http";
import "./App.css";

function App() {
  const [cardDescription, setCardDescription] = useState(false);
  const [miniCards, setMiniCards] = useState([]);
  const [inputValue, setInputValue] = useState("");
  const [tendinaCart, setTendinaCart] = useState(false);
  const [cart, setCart] = useState(
    window !== "undefined" &&
      JSON.parse(localStorage.getItem("carrello") || "[]")
  );

  const onHandleInput = (e) => setInputValue(() => e.target.value);

  const onHandleSubmit = (e) => {
    e.preventDefault();
    GET(inputValue ? `/products/category/${inputValue}` : "/products").then(
      (data) => setMiniCards(() => data.products)
    );
    setInputValue("");
  };

  return (
    <div className="App">
      <Navbar
        setTendinaCart={setTendinaCart}
        onHandleInput={onHandleInput}
        onHandleSubmit={onHandleSubmit}
        inputValue={inputValue}
        setInputValue={setInputValue}
      />
      <Hero />
      <MiniCardList miniCards={miniCards} />
      <CardList
        setCardDescription={setCardDescription}
        title="Technology"
        endpoint="/products?limit=10"
      />
      <CardList
        setCardDescription={setCardDescription}
        title="Skincare"
        endpoint="/products?limit=10&skip=10"
      />
      <TendinaCart cart={cart} setCart={setCart} tendinaCart={tendinaCart} />
      {cardDescription ? (
        <CardDescription
          setCart={setCart}
          cardDescription={cardDescription}
          setCardDescription={setCardDescription}
        />
      ) : null}
    </div>
  );
}

export default App;
