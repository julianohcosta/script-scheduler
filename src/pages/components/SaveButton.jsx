import Box from '@mui/material/Box';
import CircularProgress from '@mui/material/CircularProgress';
import {green} from '@mui/material/colors';
import Fab from '@mui/material/Fab';
import CheckIcon from '@mui/icons-material/Check';
import SaveIcon from '@mui/icons-material/Save';
import {useState} from "react";

const SaveButton = props => {

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const buttonSx = {
    ...(success && {
      bgcolor: green[500],
      '&:hover': {
        bgcolor: green[700],
      },
    }),
  };

  const handleButtonClick = () => {

    props.setShowSucess(false);
    props.setShowError(false);

    setLoading(true);

    const url = (
      'https://localhost:8443/ctx/run/Agendador/createtask?' +
      'taskname=' + props.taskName +
      '&scriptname=' + props.scriptName +
      '&frequencia=' + props.frequencia +
      '&horario=' + props.horario +
      '&dia=&params='
    )

    console.log(url);

    fetch(url)
      .then(response => response.json())
      .then(tarefa => {
        if(tarefa.status){

          setSuccess(true);
          setLoading(false);
          props.onSave(true, tarefa.message);
        } else {
          setSuccess(false);
          setLoading(false);
          props.onSave(false, tarefa.message);
        }
      })
      .catch(e => {
        console.log(e);
      })

    // props.onSave(false);

    // if (!loading) {
    //     setSuccess(false);
    //     setLoading(true);
    //     timer.current = window.setTimeout(() => {
    //         setSuccess(true);
    //         setLoading(false);
    //
    //         props.onSave(false);
    //
    //     }, 2000);
    // }
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
          {success ? <CheckIcon/> : <SaveIcon/>}
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
