import Button from "../button";
import "./index.css";

const Cards = ({ productData, setSingleModalInfo }) => {
  const info = () => {
    setSingleModalInfo(() => productData);
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
