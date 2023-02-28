import { quotes } from "../../mocks/quotes";
import Cards from "../cards";
import "./index.css";

const ContainerCard = () => {
  return (
    <div className="ContainerCard">
      {quotes.map((quote) => (
        <Cards quotesData={quote} />
      ))}
    </div>
  );
};
export default ContainerCard;
