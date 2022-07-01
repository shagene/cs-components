import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import * as React from 'react';
import {
  Paper,
  DialogContent,
  DialogContentText,
  DialogActions,
  Button
} from '@mui/material';

export default function Banner() {
  return (
    <Box
      sx={{
        pb: 5,
        justifyContent: 'center',
        textAlign: 'center'
      }}
    >
      <Typography variant="h3" component="h2" sx={{ pb: 2 }}>
        {/* Basic Banner */}
      </Typography>
      <Stack
        direction="row"
        justifyContent="center"
        alignItems="center"
        spacing={2}
      >
        <Stack sx={{ width: '50%' }} spacing={2}>
          <Box sx={{ maxWidth: '800px', textAlign: 'start' }}>
            <Paper elevation={3}>
              <Typography padding={'20px'}>
                <DialogContent>
                  <DialogContentText sx={{ fontFamily: 'Open Sans' }}>
                    Are you sure you want to proceed? Before moving on double
                    check if you understood the terms of agreement.
                  </DialogContentText>
                </DialogContent>
                <DialogActions>
                  <Button color="primary" variant="text">
                    DISAGREE
                  </Button>
                  <Button color="primary" variant="text">
                    AGREE
                  </Button>
                </DialogActions>
              </Typography>
            </Paper>
          </Box>
        </Stack>
      </Stack>
    </Box>
  );
}
