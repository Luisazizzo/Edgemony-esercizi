import Cards from "../cards/Cards";
import "./index.css";

const ContainerCard = ({ data, setSingleModalInfo }) => {
  return (
    <div className="ContainerCard">
      <h1>Ecco alcuni dei personaggi</h1>
      <div className="container">
        {data.map((product) => (
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
