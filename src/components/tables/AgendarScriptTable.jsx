import {useTable} from 'react-table'
import {useMemo} from "react";

const AgendarScriptTable = () => {
  const data = useMemo(
    () => [
      {
      "linguagem": "Python/JEP",
      "nome": "1 Labin01 - SiefWeb -  Malha PF - Informar Evento",
      "params": [

    ],
      "autor": "ELVIS CAICARA DA SILVA",
      "dataAlteracao": "18/02/2021"
  },
  {
    "linguagem": "Python",
    "nome": "1 Labin01 - SiefWeb - Malha PF - cadastrar Processo",
    "params": [

    ],
    "autor": "ELVIS CAICARA DA SILVA",
    "dataAlteracao": "18/02/2021"
  },
  {
    "linguagem": "Python",
    "nome": "1 SIEF mapear tela - ok",
    "params": [

    ],
    "autor": "ELVIS CAICARA DA SILVA",
    "dataAlteracao": "17/11/2020"
  },
  {
    "linguagem": "Python",
    "nome": "1 SIEF mapear tela 1.1",
    "params": [

    ],
    "autor": "ELVIS CAICARA DA SILVA",
    "dataAlteracao": "24/11/2020"
  },   ],
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
  } = useTable({columns, data})

  return (

        <table {...getTableProps()} style={{border: 'solid 1px blue'}}>
          <thead>
          {headerGroups.map(headerGroup => (
            <tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map(column => (
                <th
                  {...column.getHeaderProps()}
                  style={{
                    borderBottom: 'solid 3px red',
                    background: 'aliceblue',
                    color: 'black',
                    fontWeight: 'bold',
                  }}
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
              <tr {...row.getRowProps()}>
                {row.cells.map(cell => {
                  return (
                    <td
                      {...cell.getCellProps()}
                      style={{
                        padding: '10px',
                        border: 'solid 1px gray',
                        background: 'papayawhip',
                      }}
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
  )
}

export default AgendarScriptTable;