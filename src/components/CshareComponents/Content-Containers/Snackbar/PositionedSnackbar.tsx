import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import * as React from 'react';
import Button from '@mui/material/Button';
import Snackbar, { SnackbarOrigin } from '@mui/material/Snackbar';

export interface State extends SnackbarOrigin {
  open: boolean;
}

export default function PositionedSnackbar() {
  const [state, setState] = React.useState<State>({
    open: false,
    vertical: 'top',
    horizontal: 'center'
  });
  const { vertical, horizontal, open } = state;

  const handleClick = (newState: SnackbarOrigin) => () => {
    setState({ open: true, ...newState });
  };

  const handleClose = () => {
    setState({ ...state, open: false });
  };

  const buttons = (
    <React.Fragment>
      <Button
        onClick={handleClick({
          vertical: 'top',
          horizontal: 'center'
        })}
      >
        Top-Center
      </Button>
      <Button
        onClick={handleClick({
          vertical: 'top',
          horizontal: 'right'
        })}
      >
        Top-Right
      </Button>
      <Button
        onClick={handleClick({
          vertical: 'bottom',
          horizontal: 'right'
        })}
      >
        Bottom-Right
      </Button>
      <Button
        onClick={handleClick({
          vertical: 'bottom',
          horizontal: 'center'
        })}
      >
        Bottom-Center
      </Button>
      <Button
        onClick={handleClick({
          vertical: 'bottom',
          horizontal: 'left'
        })}
      >
        Bottom-Left
      </Button>
      <Button
        onClick={handleClick({
          vertical: 'top',
          horizontal: 'left'
        })}
      >
        Top-Left
      </Button>
    </React.Fragment>
  );

  return (
    <Box
      sx={{
        pb: 5,
        justifyContent: 'center',
        textAlign: 'center'
      }}
    >
      <Typography variant="h3" component="h2" sx={{ pb: 2 }}>
        Positioned Snackbar
      </Typography>
      <Stack
        direction="row"
        justifyContent="center"
        alignItems="center"
        spacing={2}
      >
        <div>
          {buttons}
          <Snackbar
            anchorOrigin={{ vertical, horizontal }}
            open={open}
            onClose={handleClose}
            message="I love snacks"
            key={vertical + horizontal}
          />
        </div>
      </Stack>
    </Box>
  );
}
