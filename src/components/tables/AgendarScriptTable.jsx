import {useTable} from 'react-table'
import {useMemo} from "react";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const AgendarScriptTable = () => {
  const data = useMemo(
    () => [
      {
        col1: 'Hello',
        col2: 'World',
        col3: 'World',
        col4: 'World',
      },
      {
        col1: 'react-table',
        col2: 'rocks',
        col3: 'World',
        col4: 'World',
      },
      {
        col1: 'whatever',
        col2: 'you want',
        col3: 'World',
        col4: 'World',
      },
      {
        col1: 'whatever',
        col2: 'you want',
        col3: 'World',
        col4: 'World',
      },
      {
        col1: 'whatever',
        col2: 'you want',
        col3: 'World',
        col4: 'World',
      },
    ],
    []
  )

  const columns = useMemo(
    () => [
      {
        Header: 'Nome do Script',
        accessor: 'col1', // accessor is the "key" in the data
      },
      {
        Header: 'Autor',
        accessor: 'col2',
      },
      {
        Header: 'Linguagem',
        accessor: 'col3',
      },
      {
        Header: 'Data da Última Alteração',
        accessor: 'col4',
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
    <Row className="mb-3 m-lg-5 m-md-5">
      <Col sm='1'/>
      <Col sm='10'>
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
      </Col>
      <Col sm='1'/>
    </Row>
  )
}

export default AgendarScriptTable;