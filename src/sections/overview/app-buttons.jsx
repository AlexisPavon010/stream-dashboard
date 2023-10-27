import PropTypes from 'prop-types';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import { BsFillPauseFill, BsFillPlayFill, BsImage } from 'react-icons/bs';
import { Box, Button, Stack } from '@mui/material';

import { useVideoContext } from 'src/context/video/VideoProvider';

export default function AppButtons({ title, subheader, ...other }) {

  const { isLive, startChangeTransition, startRemoveTransition } = useVideoContext()

  return (
    <Card {...other}>
      <CardHeader title={title} subheader={subheader} sx={{ mb: 2 }} />
      {/* <Box sx={{ p: 2, }}>
        <Stack spacing={1} direction="row">
          <Button onClick={() => setPlay(false)} variant="contained">
            <BsStopFill size={24} />
          </Button>
          <Button onClick={() => startAnimation()} variant="outlined">
            {play ? (<BsFillPauseFill size={24} />) : (<BsFillPlayFill size={24} />)}
          </Button>
          <Button variant="outlined">
            <AiOutlineReload />
          </Button>
        </Stack>
      </Box> */}
      <Box sx={{ p: 2, }}>
        <Stack spacing={1} direction="column">
          <Button onClick={() => { }} variant="contained" endIcon={isLive ? <BsFillPauseFill size={16} /> : <BsFillPlayFill size={16} />}>
            {isLive ? 'Detener' : 'Iniciar'}
          </Button>
          <Button onClick={() => { }} variant="contained" endIcon={<BsImage size={16} />}>
            subir imagen
          </Button>
          <Button onClick={() => startChangeTransition()} variant="contained" endIcon={<BsImage size={16} />}>
            Iniciar Transición
          </Button>
          <Button onClick={() => startRemoveTransition()} variant="contained" endIcon={<BsImage size={16} />}>
            Resetear
          </Button>
        </Stack>
      </Box>
    </Card >
  );
}

AppButtons.propTypes = {
  subheader: PropTypes.string,
  title: PropTypes.string,
};
