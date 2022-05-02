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

export default function SizeAndColor() {
  return (
    <Box sx={{ pb: 5, justifyContent: 'center', textAlign: 'center' }}>
      <Typography variant="h3" component="h2" sx={{ pb: 2 }}>
        Size And Colors
      </Typography>
      <Stack
        direction="row"
        justifyContent="center"
        alignItems="center"
        spacing={2}
      >
        <ButtonGroup size="small" aria-label="small button group">
          {buttons}
        </ButtonGroup>
        <ButtonGroup
          color="secondary"
          aria-label="medium secondary button group"
        >
          {buttons}
        </ButtonGroup>
        <ButtonGroup size="large" aria-label="large button group">
          {buttons}
        </ButtonGroup>
      </Stack>
    </Box>
  );
}
