import "./index.css";

const Cards = ({ quotesData }) => {
  return (
    <div className="Cards">
      <h2>{quotesData.author}</h2>
      <p>{quotesData.quote}</p>
    </div>
  );
};
export default Cards;
