import Tooltip from "@mui/material/Tooltip";
import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";
import PlayCircleIcon from '@mui/icons-material/PlayCircle';
import EditIcon from '@mui/icons-material/Edit';

const Agendamento = () => {
    return (
        <div>
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
            <Tooltip title="Deletar">
                <IconButton aria-label="delete">
                    <DeleteIcon color='warning'/>
                </IconButton>
            </Tooltip>
        </div>
    )
};

export default Agendamento;