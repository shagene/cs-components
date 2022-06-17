import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import * as React from 'react';
import Alert from '@mui/material/Alert/Alert';
import AlertTitle from '@mui/material/AlertTitle';

export default function DescriptionAlert() {
  return (
    <Box
      sx={{
        pb: 5,
        justifyContent: 'center',
        textAlign: 'center'
      }}
    >
      <Typography variant="h3" component="h2" sx={{ pb: 2 }}>
        Description Alert
      </Typography>
      <Stack
        direction="row"
        justifyContent="center"
        alignItems="center"
        spacing={2}
      >
        <Stack sx={{ width: '50%' }} spacing={2}>
          <Alert severity="error">
            <AlertTitle>Error</AlertTitle>
            This is an error alert — <strong>check it out!</strong>
          </Alert>
          <Alert severity="warning">
            <AlertTitle>Warning</AlertTitle>
            This is a warning alert — <strong>check it out!</strong>
          </Alert>
          <Alert severity="info">
            <AlertTitle>Info</AlertTitle>
            This is an info alert — <strong>check it out!</strong>
          </Alert>
          <Alert severity="success">
            <AlertTitle>Success</AlertTitle>
            This is a success alert — <strong>check it out!</strong>
          </Alert>
        </Stack>
      </Stack>
    </Box>
  );
}
