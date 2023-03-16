import CartItem from "../cartItem";
import "./index.css";

const TendinaCart = ({ tendinaCart, setCart, cart }) => {
  const deleteCart = async (id) => {
    setCart((prev) => prev.filter((item) => item.id !== id));
    localStorage.setItem(
      "carrello",
      JSON.stringify(cart.filter((item) => item.id !== id))
    );
  };
  return (
    <div className={`TendinaCart ${tendinaCart && "show"}`}>
      {cart.map((item, index) => (
        <CartItem deleteCart={deleteCart} item={item} key={index} />
      ))}
    </div>
  );
};

export default TendinaCart;
