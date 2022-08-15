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

    const action = e.currentTarget.ariaLabel;

    // TODO: Como acessar o nome da tarefa sem fazer essa gambiarra??
    const taskname = e.currentTarget.parentNode.parentNode.firstChild.innerHTML;

    switch (action) {

      case ACTIONS.EDIT:
        console.log('edit')
        console.log(taskname)
        break;
      case ACTIONS.RUN:
        const url = `https://localhost:8443/ctx/run/Agendador/runtask?taskname=${taskname}`;
        console.log(url);
        fetch(url)
          .then(response => response.json())
          .then(resultado => {
            console.log(resultado);
          })
          .catch(e => console.log(e))

        console.log('run')
        console.log(taskname)
        break;
      case ACTIONS.ENABLE:
        console.log('enable')
        console.log(taskname)
        break;
      case ACTIONS.DISABLE:
        console.log('disable')
        console.log(taskname)
        break;
      case ACTIONS.DELETE:
        console.log('delete')
        console.log(taskname)
        break;
      default:
        break;

    }


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
              <IconButton aria-label="run" onClick={actionHandler}>
                <PlayCircleIcon color='info'/>
              </IconButton>
            </Tooltip>
            <Tooltip title="Habilitar">
              <IconButton aria-label="enable" onClick={actionHandler}>
                <CheckCircleIcon color='info'/>
              </IconButton>
            </Tooltip>
            <Tooltip title="Desabilitar">
              <IconButton aria-label="disable" onClick={actionHandler}>
                <CancelIcon color='warning'/>
              </IconButton>
            </Tooltip>
            <Tooltip title="Deletar">
              <IconButton aria-label="delete" onClick={actionHandler}>
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
        "taskname": "hello",
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

  return (
    <>

      <Box sx={{width: '100%', maxWidth: '65%'}} ml={8}>
        <Typography variant="h2" component="div" gutterBottom className='fw-bold text-center'>
          Meus agendamentos
        </Typography>
      </Box>
      <Row className="mb-3 mx-5">
        <ScriptsTable columns={columns} data={data}/>
      </Row>
    </>
  )
};

export default Agendamento;