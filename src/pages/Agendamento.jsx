import Tooltip from "@mui/material/Tooltip";
import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";
import PlayCircleIcon from '@mui/icons-material/PlayCircle';
import EditIcon from '@mui/icons-material/Edit';
import CancelIcon from '@mui/icons-material/Cancel';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Row from 'react-bootstrap/Row';
import ScriptsTable from "../components/tables/ScriptsTable";
import {useMemo} from "react";

const ACTIONS = {
  RUN: 'run',
  EDIT: 'edit',
  DISABLE: 'disable',
  ENABLE: 'enable',
  DELETE: 'delete'
}

const Agendamento = () => {

  const actionHandler = (e) => {
    //console.log(row.cells[0].value);

    console.log(e)
  }

  /** DUMMY COLUMNS FOR TESTIG */
  const columns = useMemo(
    () => [
      {
        Header: 'Nome da Tarefa',
        accessor: 'taskname', // accessor is the "key" in the data
      },
      {
        Header: 'Nome do script',
        accessor: 'scriptname',
      },
      {
        Header: 'Próxima Execução',
        accessor: 'proximaExecucao',
      },
      {
        Header: 'Status',
        accessor: 'status',
      },
      {
        Header: "Ações",
        id: "icon",
        Cell: () => (
          <>
            <Tooltip title="Editar">
              <IconButton aria-label="edit" onClick={actionHandler}>
                <EditIcon color='info'/>
              </IconButton>
            </Tooltip>
            <Tooltip title="Executar">
              <IconButton aria-label="play">
                <PlayCircleIcon color='info'/>
              </IconButton>
            </Tooltip>
            <Tooltip title="Habilitar">
              <IconButton aria-label="enable">
                <CheckCircleIcon color='info'/>
              </IconButton>
            </Tooltip>
            <Tooltip title="Desabilitar">
              <IconButton aria-label="disable">
                <CancelIcon color='warning'/>
              </IconButton>
            </Tooltip>
            <Tooltip title="Deletar">
              <IconButton aria-label="delete">
                <DeleteIcon color='warning'/>
              </IconButton>
            </Tooltip>
          </>
        )
      }
    ],
    []
  )

  const data = useMemo(
    () => [
      {
        "status": "Desabilitado",
        "taskname": "Folha_Ponto",
        "proximaExecucao": "N/A",
        "scriptname": "1 Labin01 - SiefWeb -  Malha PF - Informar Evento"
      },
      {
        "status": "Pronto",
        "taskname": "Novo",
        "proximaExecucao": "22/08/2022 04:06:00",
        "scriptname": "1 Labin01 - SiefWeb -  Malha PF - Informar Evento"
      },
      {
        "status": "Pronto",
        "taskname": "Teste",
        "proximaExecucao": "10/09/2022 05:06:00",
        "scriptname": "1 Labin01 - SiefWeb -  Malha PF - Informar Evento"
      },
      {
        "status": "Desabilitado",
        "taskname": "Outro",
        "proximaExecucao": "N/A",
        "scriptname": "1 Labin01 - SiefWeb -  Malha PF - Informar Evento"
      },],
    []
  )
  const clickTableRowHandler = (row) => {
    //console.log(row.cells[0].value);
  }


  return (
    <>

      <Box sx={{width: '100%', maxWidth: '65%'}} ml={8}>
        <Typography variant="h2" component="div" gutterBottom className='fw-bold text-center'>
          Meus agendamentos
        </Typography>
      </Box>
      <Row className="mb-3 mx-5">
        <ScriptsTable getCellValue={clickTableRowHandler} columns={columns} data={data}/>
      </Row>
    </>
  )
};

export default Agendamento;