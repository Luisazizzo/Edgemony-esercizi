import { FiShoppingCart, FiAlignJustify } from "react-icons/fi";
import "./index.css";

const Navbar = ({
  onHandleSubmit,
  onHandleInput,
  inputValue,
  setTendinaCart,
}) => {
  const toggleTendina = () => {
    setTendinaCart((prev) => !prev);
  };

  return (
    <div className="Navbar">
      <ul>
        <li>
          <FiAlignJustify className="menu" />
        </li>
        <li>Home</li>
        <li>Contacts</li>
        <li>About us</li>
        <li>
          <FiShoppingCart onClick={toggleTendina} className="cart" />
        </li>
      </ul>

      <form className="NavBar__form" onSubmit={onHandleSubmit}>
        <input
          value={inputValue}
          onChange={onHandleInput}
          type="text"
          placeholder="Scegli una categoria..."
        />
      </form>
    </div>
  );
};

export default Navbar;
