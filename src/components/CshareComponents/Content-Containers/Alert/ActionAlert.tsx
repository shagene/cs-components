import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import * as React from 'react';
import Alert from '@mui/material/Alert';
import Button from '@mui/material/Button';

export default function ActionAlert() {
  return (
    <Box
      sx={{
        pb: 5,
        justifyContent: 'center',
        textAlign: 'center'
      }}
    >
      <Typography variant="h3" component="h2" sx={{ pb: 2 }}>
        Action Alert
      </Typography>
      <Stack
        direction="row"
        justifyContent="center"
        alignItems="center"
        spacing={2}
      >
        <Stack sx={{ width: '50%' }} spacing={2}>
          <Alert onClose={() => {}}>
            This is a success alert — check it out!
          </Alert>
          <Alert
            action={
              <Button color="inherit" size="small">
                UNDO
              </Button>
            }
          >
            This is a success alert — check it out!
          </Alert>
        </Stack>
      </Stack>
    </Box>
  );
}
