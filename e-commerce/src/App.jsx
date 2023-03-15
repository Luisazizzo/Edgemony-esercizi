import Navbar from "./components/navBar/NavBar";
import Hero from "./components/hero/Hero";
import MiniCardList from "./components/miniCardList/MiniCardList";
import CardList from "./components/cardList/cardList";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <MiniCardList />
      <CardList title="Technology" endpoint="/products?limit=10" />
      <CardList title="Skincare" endpoint="/products?limit=10&skip=10" />
    </div>
  );
}

export default App;
