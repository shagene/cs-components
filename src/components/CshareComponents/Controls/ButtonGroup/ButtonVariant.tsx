import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';

export default function ButtonVariant() {
  return (
    <Box sx={{ pb: 5, justifyContent: 'center', textAlign: 'center' }}>
      <Typography variant="h3" component="h2" sx={{ pb: 2 }}>
        Button Variant
      </Typography>
      <Stack
        direction="row"
        justifyContent="center"
        alignItems="center"
        spacing={2}
      >
        <ButtonGroup variant="outlined" aria-label="outlined button group">
          <Button>One</Button>
          <Button>Two</Button>
          <Button>Three</Button>
        </ButtonGroup>
        <ButtonGroup variant="text" aria-label="text button group">
          <Button>One</Button>
          <Button>Two</Button>
          <Button>Three</Button>
        </ButtonGroup>
      </Stack>
    </Box>
  );
}
