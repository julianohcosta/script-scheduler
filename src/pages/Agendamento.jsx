import Tooltip from "@mui/material/Tooltip";
import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";
import PlayCircleIcon from "@mui/icons-material/PlayCircle";
import CancelIcon from "@mui/icons-material/Cancel";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Row from "react-bootstrap/Row";
import {message} from "antd";
import ScriptsTable from "../components/tables/ScriptsTable";
import {useCallback, useEffect, useMemo, useState} from "react";
import MenuIcon from "@mui/icons-material/Menu";

/** CSS **/
import classes from "./Agendamento.module.css";

const ACTIONS = {
  RUN: "run",
  EDIT: "edit",
  DISABLE: "disable",
  ENABLE: "enable",
  DELETE: "delete",
};

const Agendamento = () => {
  const [data, setData] = useState([]);
  const [showActionsButtons, setDisplayNone] = useState(false);
  const [rowIndex, setRowIndex] = useState(null);

  useEffect(() => {
    const url = "https://localhost:8443/ctx/run/Agendador/listtasks";
    fetch(url)
      .then(response => response.json())
      .then(scripts => {
        setData(scripts);
      })
      .catch(e => {
        console.log(e);
      });
  }, []);

  const actionHandler = useCallback(e => {
    setDisplayNone(prevActionButton => !prevActionButton);
    const action = e.currentTarget.ariaLabel;

    // TODO: Como acessar o nome da tarefa sem fazer essa gambiarra??
    const taskName = e.currentTarget.parentNode.parentNode.parentNode.parentNode.firstChild.innerHTML

    let url;
    let msg;

    switch (action) {
      case ACTIONS.RUN:
        url = `https://localhost:8443/ctx/run/Agendador/runtask?taskname=${taskName}`;
        msg = `Tarefa '${taskName}' executada com sucesso`;
        break;
      case ACTIONS.ENABLE:
        url = `https://localhost:8443/ctx/run/Agendador/enabletask?taskname=${taskName}`;
        msg = `Tarefa '${taskName}' habilitada com sucesso`;
        break;
      case ACTIONS.DISABLE:
        url = `https://localhost:8443/ctx/run/Agendador/disabletask?taskname=${taskName}`;
        msg = `Tarefa '${taskName}' desabilitada com sucesso`;
        break;
      case ACTIONS.DELETE:
        url = `https://localhost:8443/ctx/run/Agendador/deletetask?taskname=${taskName}`;
        msg = `Tarefa '${taskName}' deletada com sucesso`;
        break;
      default:
        return;
    }
    fetch(url)
      .then(response => response.json())
      .then(resultado => {
        if (resultado) message.success(msg).then();
      })
      .catch(e => console.log(e));

  }, []);

  const menuHandler = useCallback(e => {
    const tarefa = e.currentTarget.parentNode.parentNode.parentNode.firstChild.innerHTML;
    const currentRowObject = data.find(t => t['taskname'] === tarefa);
    setRowIndex(currentRowObject.id);
    setDisplayNone(prevActionButton => !prevActionButton);
  }, [data]);

  const columns = useMemo(
    () => [
      {
        Header: "Nome da Tarefa",
        accessor: "taskname", // accessor is the "key" in the data
      },
      {
        Header: "Nome do script",
        accessor: "scriptname",
      },
      {
        Header: "Pr??xima Execu????o",
        accessor: "proximaExecucao",
      },
      {
        Header: "??ltima Execu????o",
        accessor: "ultimaExecucao",
      },
      {
        Header: "Frequ??ncia",
        accessor: "frequencia",
      },
      {
        Header: "Hora",
        accessor: "hora",
      },
      {
        Header: "Status",
        accessor: "status",
      },
      {
        Header: "A????es",
        id: "icon",
        Cell: () => (
          <div className={classes["slide-container"]}>
            <div onClick={menuHandler}>
              <Tooltip title="Menu">
                <IconButton>
                  <MenuIcon color="info"/>
                </IconButton>
              </Tooltip>
            </div>
          </div>
        ),
        CellA: () => (
          <div className={classes["slide-container"]}>
            <div onClick={menuHandler}>
              <Tooltip title="Menu">
                <IconButton>
                  <MenuIcon color="info"/>
                </IconButton>
              </Tooltip>
            </div>
            <div className={classes["actions-container"]}>
              <Tooltip title="Executar">
                <IconButton aria-label="run" onClick={actionHandler}>
                  <PlayCircleIcon color="info"/>
                </IconButton>
              </Tooltip>
              <Tooltip title="Habilitar">
                <IconButton aria-label="enable" onClick={actionHandler}>
                  <CheckCircleIcon color="info"/>
                </IconButton>
              </Tooltip>
              <Tooltip title="Desabilitar">
                <IconButton aria-label="disable" onClick={actionHandler}>
                  <CancelIcon color="warning"/>
                </IconButton>
              </Tooltip>
              <Tooltip title="Deletar">
                <IconButton aria-label="delete" onClick={actionHandler}>
                  <DeleteIcon color="warning"/>
                </IconButton>
              </Tooltip>
            </div>
          </div>
        ),
      },
    ],
    [menuHandler, actionHandler]
  );

  return (
    <>
      <Box sx={{width: "100%", maxWidth: "65%"}} ml={8}>
        <Typography
          variant="h2"
          component="div"
          gutterBottom
          className="fw-bold text-center mx-5"
        >
          Meus agendamentos
        </Typography>
      </Box>
      <Row className="mb-3 mx-5">
        <ScriptsTable
          onAction={{rowIndex, showActionsButtons}}
          columns={columns}
          data={data}
        />
      </Row>
    </>
  );
};

export default Agendamento;
