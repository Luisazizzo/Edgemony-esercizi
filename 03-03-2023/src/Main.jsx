import { useState } from "react";
import ModalInfo from "./components/modalInfo";
import Slider from "./components/slider/Slider";
import Header from "./components/header";
import Gallery from "./components/gallery";
import ContainerCard from "./components/containerCard/ContainerCard";
import Footer from "./components/footer";
import "./main.css";

const Main = () => {
  const [MoonSun, setMoonSun] = useState(false);
  const [singleModalInfo, setSingleModalInfo] = useState(null);

  return (
    <div className={`Main ${MoonSun && "moon-sun"}`}>
      {singleModalInfo ? (
        <ModalInfo
          info={singleModalInfo}
          setSingleModalInfo={setSingleModalInfo}
        />
      ) : null}
      <Header />
      <button
        className="toggle-moon-sun"
        onClick={() => setMoonSun((prev) => !prev)}
      >
        {MoonSun ? "☀️" : "🌙"}
      </button>
      <Gallery />
      <Slider />
      <ContainerCard setSingleModalInfo={setSingleModalInfo} />
      <Footer />
    </div>
  );
};

export default Main;
