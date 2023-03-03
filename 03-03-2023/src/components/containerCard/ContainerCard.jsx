import { useState, useEffect } from "react";
import Cards from "../cards/Cards";
import "./index.css";

const ContainerCard = ({ setSingleModalInfo }) => {
  const [dataCard, setDataCard] = useState([]);

  useEffect(() => {
    fetch("https://rickandmortyapi.com/api/character")
      .then((res) => res.json())
      .then((data) => {
        setDataCard(data.results);
      });
  }, []);

  return (
    <div className="ContainerCard">
      <h1>Ecco alcuni dei personaggi</h1>
      <div className="container">
        {dataCard.map((product) => (
          <Cards
            productData={product}
            setSingleModalInfo={setSingleModalInfo}
            key={product.id}
          />
        ))}
      </div>
    </div>
  );
};

export default ContainerCard;
