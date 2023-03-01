import LiComponent from "../liComponent";

import "./index.css";

const Header = () => {
  const menuArray = [
    {
      label: "Home",
      url: "https://www.google.it/",
    },
    {
      label: "About Us",
      url: "https://github.com/Luisazizzo",
    },
    {
      label: "Contatti",
      url: "https://edgemony.com/cb6-edge-lezioni/",
    },
    {
      label: "Menu",
      url: "https://www.mymovies.it/film/2022/the-menu/",
    },
  ];

  return (
    <header className="Header">
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b1/Rick_and_Morty.svg/2560px-Rick_and_Morty.svg.png"
        alt="logo"
      />
      <ul>
        {menuArray.map((item) => (
          <LiComponent data={item} />
        ))}
      </ul>
    </header>
  );
};

export default Header;
