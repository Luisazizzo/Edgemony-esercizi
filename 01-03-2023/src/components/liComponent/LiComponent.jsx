const LiComponent = ({ data }) => {
  return (
    <li>
      <a href={data.url} target="_blank" rel="noreferrer">
        {data.label}
      </a>
    </li>
  );
};

export default LiComponent;
