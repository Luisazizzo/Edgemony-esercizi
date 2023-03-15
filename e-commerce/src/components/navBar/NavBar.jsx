import "./index.css";

const Navbar = ({ onHandleSubmit, onHandleInput, inputValue }) => {
  return (
    <div className="Navbar">
      <ul>
        <li>Home</li>
        <li>Contacts</li>
        <li>About us</li>
      </ul>
      <form className="NavBar__form" onSubmit={onHandleSubmit}>
        <input
          value={inputValue}
          onChange={onHandleInput}
          type="text"
          placeholder="Scegli una categoria..."
          required
        />
      </form>
    </div>
  );
};

export default Navbar;
