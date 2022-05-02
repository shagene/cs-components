import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';

const buttons = [
  <Button key="one">One</Button>,
  <Button key="two">Two</Button>,
  <Button key="three">Three</Button>
];

export default function VerticleGroup() {
  return (
    <Box sx={{ pb: 5, justifyContent: 'center', textAlign: 'center' }}>
      <Typography variant="h3" component="h2" sx={{ pb: 2 }}>
        Verticle Button Group
      </Typography>
      <Stack
        direction="row"
        justifyContent="center"
        alignItems="center"
        spacing={2}
      >
        <ButtonGroup
          orientation="vertical"
          aria-label="vertical contained button group"
          variant="contained"
        >
          {buttons}
        </ButtonGroup>
        <ButtonGroup
          orientation="vertical"
          aria-label="vertical contained button group"
          variant="text"
        >
          {buttons}
        </ButtonGroup>
      </Stack>
    </Box>
  );
}
