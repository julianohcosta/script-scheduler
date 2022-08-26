import {useEffect, useState} from "react";
import Box from '@mui/material/Box';
import {green, red} from '@mui/material/colors';
import Fab from '@mui/material/Fab';
import CheckIcon from '@mui/icons-material/Check';
import SaveIcon from '@mui/icons-material/Save';
import ErrorIcon from '@mui/icons-material/Error';
import CircularProgress from '@mui/material/CircularProgress';


const SaveButton = props => {

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    setError(false);
    setSuccess(false);
  }, [props.resetBtn]);


  const buttonSx = {
    ...(success && {
      bgcolor: green[500],
      '&:hover': {
        bgcolor: green[700],
      },
    }),
    ...(error && {
      bgcolor: red[500],
      '&:hover': {
        bgcolor: red[700],
      },
    }),
  };

  const handleButtonClick = () => {

    const controller = new AbortController();
    const signal = controller.signal;

    props.setShowSucess(false);
    props.setShowError(false);

    setLoading(true);

    /** Aqui apenas para dar tempo de visualizar a animação do botão*/
    setTimeout(() => {
      const url = (
        'https://localhost:8443/ctx/run/Agendador/createtask?' +
        'taskname=' + props.taskName +
        '&scriptname=' + props.scriptName +
        '&frequencia=' + props.frequencia +
        '&horario=' + props.horario +
        '&dia=' + props.dia +
        '&params=' + props.params.replace(/;$/, "")
      )

      console.log(url);

      fetch(url, {signal})
        .then(response => response.json())
        .then(tarefa => {

          if (tarefa.status) {

            setSuccess(true);
            setLoading(false);
            props.onSave(true, tarefa.message);

          } else if (tarefa.status === false) {

            setSuccess(false);
            setLoading(false);
            setError(true);

            props.onSave(false, tarefa.message);
          } else {
            setSuccess(false);
            setLoading(false);
            setError(true);

            props.onSave(false, `Um erro inesperado ocorreu`);
          }
        })
        .catch(e => {
          console.log(e);
          setSuccess(false);
          setLoading(false);
          setError(true);

          props.onSave(false, `Um erro inesperado ocorreu`);
        })
      return () => {
        controller.abort();
      }
    }, 2000)
  };

  return (
    <Box sx={{display: 'flex', alignItems: 'center'}}>
      <Box sx={{m: 1, position: 'relative'}}>
        <Fab
          aria-label="save"
          color="primary"
          sx={buttonSx}
          onClick={handleButtonClick}
        >
          {success ? <CheckIcon/> : error ? <ErrorIcon/> : <SaveIcon/>}
        </Fab>
        {loading && (
          <CircularProgress
            size={68}
            sx={{
              color: green[500],
              position: 'absolute',
              top: -6,
              left: -6,
              zIndex: 1,
            }}
          />
        )}
      </Box>
    </Box>
  );
};

export default SaveButton;
