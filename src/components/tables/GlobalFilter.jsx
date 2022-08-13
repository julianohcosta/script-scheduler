const GlobalFilterComponent = ({ filter, setFilter }) => {
  return (
    <span style={{
      fontSize:'1.5em',
      fontWeight: 'bold',
      marginBottom: '5px'
    }
    }>
      Buscar:{" "}
      <input
        value={filter || ""}
        onChange={e => {
          setFilter(e.target.value);
        }}
      />
    </span>
  );
};

export default GlobalFilterComponent;