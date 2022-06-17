import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import * as React from 'react';
import Alert from '@mui/material/Alert/Alert';
import IconButton from '@mui/material/IconButton';
import Collapse from '@mui/material/Collapse';
import Button from '@mui/material/Button';
import CloseIcon from '@mui/icons-material/Close';

export default function TransitionAlert() {
  const [open, setOpen] = React.useState(true);
  return (
    <Box
      sx={{
        pb: 5,
        justifyContent: 'center',
        textAlign: 'center'
      }}
    >
      <Typography variant="h3" component="h2" sx={{ pb: 2 }}>
        Transition Alert
      </Typography>
      <Stack
        direction="row"
        justifyContent="center"
        alignItems="center"
        spacing={2}
      >
        <Box sx={{ width: '50%' }}>
          <Collapse in={open}>
            <Alert
              action={
                <IconButton
                  aria-label="close"
                  color="inherit"
                  size="small"
                  onClick={() => {
                    setOpen(false);
                  }}
                >
                  <CloseIcon fontSize="inherit" />
                </IconButton>
              }
              sx={{ mb: 2 }}
            >
              Close me!
            </Alert>
          </Collapse>
          <Button
            disabled={open}
            variant="outlined"
            onClick={() => {
              setOpen(true);
            }}
          >
            Re-open
          </Button>
        </Box>
      </Stack>
    </Box>
  );
}
