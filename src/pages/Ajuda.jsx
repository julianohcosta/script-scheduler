import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

const Ajuda = () => {
  return (
    <Box sx={{width: '100%', maxWidth: '65%'}} ml={8}>
      <Typography variant="h2" component="div" gutterBottom className='fw-bold'>
        Agendamento de Scripts
      </Typography>
      <Typography variant="h3" gutterBottom component="div">
        Como utilizar este script
      </Typography>
      <Typography variant="h4" gutterBottom component="div">
        Como agendar a execução de um script.
      </Typography>
      <Typography variant="subtitle1" gutterBottom component="div">
        subtitle1. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos
        blanditiis tenetur
      </Typography>
      <Typography variant="subtitle2" gutterBottom component="div">
        subtitle2. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos
        blanditiis tenetur
      </Typography>
      <Typography variant="body1" gutterBottom>
        body1. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos
        blanditiis tenetur unde suscipit, quam beatae rerum inventore consectetur,
        neque doloribus, cupiditate numquam dignissimos laborum fugiat deleniti? Eum
        quasi quidem quibusdam.
      </Typography>
      <Typography variant="body2" gutterBottom>
        body2. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos
        blanditiis tenetur unde suscipit, quam beatae rerum inventore consectetur,
        neque doloribus, cupiditate numquam dignissimos laborum fugiat deleniti? Eum
        quasi quidem quibusdam.
      </Typography>
      <Typography variant="button" display="block" gutterBottom>
        button text
      </Typography>
      <Typography variant="caption" display="block" gutterBottom>
        caption text
      </Typography>
      <Typography variant="overline" display="block" gutterBottom>
        overline text
      </Typography>
    </Box>
  )
};

export default Ajuda;