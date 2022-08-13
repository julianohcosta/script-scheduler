import {useGlobalFilter, useTable} from 'react-table'
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

  const columns = useMemo(
    () => [
      {
        Header: 'Nome do Script',
        accessor: 'nome', // accessor is the "key" in the data
      },
      {
        Header: 'Autor',
        accessor: 'autor',
      },
      {
        Header: 'Linguagem',
        accessor: 'linguagem',
      },
      {
        Header: 'Data da Última Alteração',
        accessor: 'dataAlteracao',
      },
    ],
    []
  )

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
    state,
    setGlobalFilter
  } = useTable({columns, data}, useGlobalFilter)

  const {globalFilter} = state;

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
        {rows.map(row => {
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
    </>
  )
}

export default AgendarScriptTable;