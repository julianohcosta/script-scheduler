import Tooltip from "@mui/material/Tooltip";
import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";
import PlayCircleIcon from '@mui/icons-material/PlayCircle';
import EditIcon from '@mui/icons-material/Edit';
import CancelIcon from '@mui/icons-material/Cancel';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

const Agendamento = () => {
  return (
    <>

      <Box sx={{ width: '100%', maxWidth: '65%' }} ml={8} >
        <Typography variant="h2" component="div" gutterBottom className='fw-bold text-center'>
          Meus agendamentos
        </Typography>
      </Box>
      <Tooltip title="Editar">
        <IconButton aria-label="edit">
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
};

export default Agendamento;