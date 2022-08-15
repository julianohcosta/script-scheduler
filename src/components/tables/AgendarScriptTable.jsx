import {useGlobalFilter, useTable, usePagination} from 'react-table'
import {useMemo} from "react";

import './AgendarScript.module.css'
import GlobalFilterComponent from "./GlobalFilter";

const AgendarScriptTable = props => {

  const data = useMemo(
    () => [
      {
        "linguagem": "Python/JEP",
        "nome": "1 Labin01 - SiefWeb -  Malha PF - Informar Evento",
        "params": [],
        "autor": "ELVIS CAICARA DA SILVA",
        "dataAlteracao": "18/02/2021"
      },
      {
        "linguagem": "Python",
        "nome": "1 Labin01 - SiefWeb - Malha PF - cadastrar Processo",
        "params": [],
        "autor": "ELVIS CAICARA DA SILVA",
        "dataAlteracao": "18/02/2021"
      },
      {
        "linguagem": "Python",
        "nome": "1 SIEF mapear tela - ok",
        "params": [],
        "autor": "ELVIS CAICARA DA SILVA",
        "dataAlteracao": "17/11/2020"
      },
      {
        "linguagem": "Python",
        "nome": "1 SIEF mapear tela 1.1",
        "params": [],
        "autor": "ELVIS CAICARA DA SILVA",
        "dataAlteracao": "24/11/2020"
      },],
    []
  )
  const columns = props.columns;

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
    setGlobalFilter
  } = useTable({columns, data}, useGlobalFilter, usePagination)

  const { pageSize, pageIndex, globalFilter } = state;

  return (
    <>
      <GlobalFilterComponent
        filter={globalFilter}
        setFilter={setGlobalFilter}
      />
      <table {...getTableProps()} >
        <thead>
        {headerGroups.map(headerGroup => (
          <tr {...headerGroup.getHeaderGroupProps()}>
            {headerGroup.headers.map(column => (
              <th
                {...column.getHeaderProps()}
              >
                {column.render('Header')}
              </th>
            ))}
          </tr>
        ))}
        </thead>
        <tbody {...getTableBodyProps()}>
        {page.map(row => {
          prepareRow(row)
          return (
            <tr {...row.getRowProps()} onClick={() => props.getCellValue(row)}>
              {row.cells.map(cell => {
                return (
                  <td
                    {...cell.getCellProps()}
                  >
                    {cell.render('Cell')}
                  </td>
                )
              })}
            </tr>
          )
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
          {" "}|{" "} Ir para página:{" "}
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
          className='mx-1'>
          {[10, 20, 30, 40].map(pageSize => (
            <option key={pageSize} value={pageSize}>
              Mostrar {pageSize}
            </option>
          ))}
        </select>
        <button onClick={() => gotoPage(0)} disabled={!canPreviousPage} className='px-2 mx-2 fw-bold'>
          {" << "}
        </button>
        <button onClick={() => previousPage()} disabled={!canPreviousPage} className='px-2 fw-bold'>
          Anterior
        </button>
        <button onClick={() => nextPage()} disabled={!canNextPage} className='px-2 mx-2 fw-bold'>
          Próxima
        </button>
        <button onClick={() => gotoPage(pageCount - 1)} disabled={!canNextPage} className='px-2 fw-bold'>
          {" >> "}
        </button>
      </div>
    </>
  )
}

export default AgendarScriptTable;