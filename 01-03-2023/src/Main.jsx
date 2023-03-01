import { results } from "./mocks/results";
import Header from "./components/header";
import Gallery from "./components/gallery";
import ContainerCard from "./components/containerCard/ContainerCard";
import Footer from "./components/footer";
import "./main.css";

const Main = () => {
  return (
    <div className="Main">
      <Header />
      <Gallery />
      <ContainerCard data={results} />
      <Footer />
    </div>
  );
};

export default Main;
