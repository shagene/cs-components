import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import * as React from 'react';
import Alert from '@mui/material/Alert/Alert';

export default function BasicAlert() {
  return (
    <Box
      sx={{
        pb: 5,
        justifyContent: 'center',
        textAlign: 'center'
      }}
    >
      <Typography variant="h3" component="h2" sx={{ pb: 2 }}>
        Basic Alert
      </Typography>
      <Stack
        direction="row"
        justifyContent="center"
        alignItems="center"
        spacing={2}
      >
        <Stack sx={{ width: '50%' }} spacing={2}>
          <Alert severity="error">This is an error alert — check it out!</Alert>
          <Alert severity="warning">
            This is a warning alert — check it out!
          </Alert>
          <Alert severity="info">This is an info alert — check it out!</Alert>
          <Alert severity="success">
            This is a success alert — check it out!
          </Alert>
        </Stack>
      </Stack>
    </Box>
  );
}
