import "./index.css";

const ModalInfo = ({ info, setSingleModalInfo }) => {
  return (
    <div className="ModalInfo" onClick={() => setSingleModalInfo(null)}>
      <div className="ModalInfo_modal">
        <p>Specie: {info.species}</p>
        <p>Località: {info.location}</p>
      </div>
    </div>
  );
};

export default ModalInfo;
