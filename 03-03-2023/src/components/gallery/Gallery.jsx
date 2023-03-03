import "./index.css";

const Gallery = () => {
  const imgArray = [
    "https://www.cinefacts.it/foto/h!rick_and_morty_articolo_special_cover_cinefacts.jpg",
    "https://www.lascimmiapensa.com/wp-content/uploads/2018/06/rick-morty-rewisor-740x480.jpg",
    "https://images.everyeye.it/img-notizie/rick-morty-qual-segreto-successo-v3-444758.jpg",
    "https://www.lascimmiapensa.com/wp-content/uploads/2018/05/Zy2vKfU.jpg",
    "https://leganerd.com/wp-content/uploads/2020/04/rick.jpg",
    "https://static.sky.it/editorialimages/7862a4cb32a3dd553f2f7aa4b9d883c437452bd7/skytg24/it/spettacolo/serie-tv/2021/05/20/dan-harmon-fox-serie-tv-blockchain/02-rick-and-morty.w710.h473.2x.jpg",
    "https://uploads.jovemnerd.com.br/wp-content/uploads/2023/01/rick_and_morty__zs10ljo3n.jpg",
    "https://www.tomshw.it/images/images/2021/05/rick-and-morty-5-trailer-157699.jpg",
    "https://sm.ign.com/t/ign_it/screenshot/default/xlarge_gsd7.1280.jpg",
    "https://static.sky.it/editorialimages/98781101a1963ad6a04d7d74d6289bf38ee9581d/skytg24/it/spettacolo/serie-tv/2022/12/01/rick-and-morty-stagione-6/Rick-e-Morty-Green-Portal-Productions.jpg",
  ];
  return (
    <div className="Gallery">
      <h1>Gallery di Rick and Morty</h1>
      <div className="gallery">
        {imgArray.map((img) => (
          <img src={img} alt="img_gallery" />
        ))}
      </div>
    </div>
  );
};

export default Gallery;
