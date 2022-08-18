import { useGlobalFilter, usePagination, useTable } from "react-table";

import "./ScriptsTable.module.css";
import GlobalFilterComponent from "./GlobalFilter";

const ScriptsTable = props => {
  const columns = props.columns;
  const data = props.data;

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    page, // use page instead rows for pagination
    nextPage,
    previousPage,
    canNextPage,
    canPreviousPage,
    pageOptions,
    gotoPage,
    pageCount,
    setPageSize,
    prepareRow,
    state,
    setGlobalFilter,
  } = useTable({ columns, data }, useGlobalFilter, usePagination);

  const { pageSize, pageIndex, globalFilter } = state;
  const renderCell = (rowIndex, cellIndex, cell) => {
    if (
      cellIndex === 7 &&
      props.onAction.showActionsButtons &&
      props.onAction.rowIndex === rowIndex
    ) {
      return <td {...cell.getCellProps()}>{cell.render("CellA")}</td>;
    }
    return <td {...cell.getCellProps()}>{cell.render("Cell")}</td>;
  };

  return (
    <>
      <GlobalFilterComponent
        filter={globalFilter}
        setFilter={setGlobalFilter}
      />
      <table {...getTableProps()}>
        <thead>
          {headerGroups.map(headerGroup => (
            <tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map(column => (
                <th {...column.getHeaderProps()}>{column.render("Header")}</th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody {...getTableBodyProps()}>
          {page.map((row, rowIndex) => {
            prepareRow(row);
            return (
              <tr
                data-row={rowIndex}
                {...row.getRowProps()}
                onClick={() => {
                  if (props.getCellValue) {
                    props.getCellValue(row);
                  }
                }}
              >
                {row.cells.map((cell, indexCell) => {
                  return renderCell(rowIndex, indexCell, cell);
                })}
              </tr>
            );
          })}
        </tbody>
      </table>
      <div>
        <span>
          Página{" "}
          <strong>
            {pageIndex + 1} de {pageOptions.length}
          </strong>
        </span>
        <span>
          {" "}
          | Ir para página:{" "}
          <input
            type="number"
            defaultValue={pageIndex + 1}
            onChange={e => {
              const pageNumber = e.target.value
                ? Number(e.target.value) - 1
                : 0;
              gotoPage(pageNumber);
            }}
            style={{ width: "50px" }}
          />
        </span>
        <select
          value={pageSize}
          onChange={e => {
            setPageSize(Number(e.target.value));
          }}
          className="mx-1"
        >
          {[10, 20, 30, 40].map(pageSize => (
            <option key={pageSize} value={pageSize}>
              Mostrar {pageSize}
            </option>
          ))}
        </select>
        <button
          onClick={() => gotoPage(0)}
          disabled={!canPreviousPage}
          className="px-2 mx-2 fw-bold"
        >
          {" << "}
        </button>
        <button
          onClick={() => previousPage()}
          disabled={!canPreviousPage}
          className="px-2 fw-bold"
        >
          Anterior
        </button>
        <button
          onClick={() => nextPage()}
          disabled={!canNextPage}
          className="px-2 mx-2 fw-bold"
        >
          Próxima
        </button>
        <button
          onClick={() => gotoPage(pageCount - 1)}
          disabled={!canNextPage}
          className="px-2 fw-bold"
        >
          {" >> "}
        </button>
      </div>
    </>
  );
};

export default ScriptsTable;
