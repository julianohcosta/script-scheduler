import React from "react";

const TableContext = React.createContext({
  showActionsButtons: false,
  taskName: "",
});

export default TableContext;
