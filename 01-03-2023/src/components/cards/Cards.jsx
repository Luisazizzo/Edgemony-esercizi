import Button from "../button";
import "./index.css";

const Cards = ({ productData }) => {
  const info = () => {
    alert(`Specie: ${productData.species}, località: ${productData.location}`);
  };
  return (
    <div className="Cards">
      <img src={productData.image} alt="img" />
      <h2>{productData.name}</h2>
      <Button text="Altre info" clickFunc={info} />
    </div>
  );
};
export default Cards;
