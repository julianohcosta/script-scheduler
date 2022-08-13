const GlobalFilterComponent = ({ filter, setFilter }) => {
  return (
    <span style={{
      fontSize:'1.3em',
      fontWeight: 'bold',
      marginBottom: '8px'
    }
    }>
      Filtrar:{" "}
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