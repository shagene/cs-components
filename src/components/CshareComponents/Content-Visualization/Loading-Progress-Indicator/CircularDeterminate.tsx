import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import * as React from 'react';
import CircularProgress from '@mui/material/CircularProgress';

export default function CircularDeterminate() {
  const [progress, setProgress] = React.useState(0);

  React.useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prevProgress) =>
        prevProgress >= 100 ? 0 : prevProgress + 10
      );
    }, 800);

    return () => {
      clearInterval(timer);
    };
  }, []);
  return (
    <Box sx={{ pb: 5, justifyContent: 'center', textAlign: 'center' }}>
      <Typography variant="h3" component="h2" sx={{ pb: 2 }}>
        Circular Determinate
      </Typography>
      <Stack
        direction="row"
        justifyContent="center"
        alignItems="center"
        spacing={2}
      >
        <CircularProgress color="primary" variant="determinate" value={25} />
        <CircularProgress color="secondary" variant="determinate" value={50} />
        <CircularProgress color="success" variant="determinate" value={75} />
        <CircularProgress color="warning" variant="determinate" value={100} />
        <CircularProgress
          color="inherit"
          variant="determinate"
          value={progress}
        />
      </Stack>
    </Box>
  );
}
