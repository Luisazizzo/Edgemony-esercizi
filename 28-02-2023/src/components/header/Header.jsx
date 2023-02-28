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
    <div className="Header">
      <header>
        <img
          src="https://d2f7anuvnar8n5.cloudfront.net/external_assets/tutorials/artwork_logos_v2/soldier.png"
          alt="logo"
        />
        <ul>
          {menuArray.map((item) => (
            <LiComponent data={item} />
          ))}
        </ul>
      </header>
    </div>
  );
};

export default Header;
