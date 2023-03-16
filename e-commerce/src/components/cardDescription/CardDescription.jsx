import "./index.css";

const CardDescription = ({ setCardDescription, cardDescription, setCart }) => {
  const addCart = () => {
    let localStoregeCart = JSON.parse(localStorage.getItem("carrello")) || [];
    setCart((prev) => [...prev, cardDescription]);
    localStorage.setItem(
      "carrello",
      JSON.stringify([...localStoregeCart, cardDescription])
    );
  };
  const close = () => {
    setCardDescription(false);
  };
  return (
    <div className="CardDescription">
      <div className="CardDescription__modal">
        <p onClick={close} className="close">
          x
        </p>
        <p className="description">{cardDescription.description}</p>
        <p className="price">{`$${cardDescription.price}`}</p>
        <div className="img">
          {cardDescription.images.map((img) => (
            <img src={img} alt={img} key={img} />
          ))}
        </div>
        <button onClick={addCart} className="btn-add-cart">
          Aggiungi al carrello
        </button>
      </div>
    </div>
  );
};

export default CardDescription;
