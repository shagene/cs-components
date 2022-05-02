import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import Chip from '@mui/material/Chip';

export default function ClickableChip() {
  const handleClick = () => {
    console.info('You clicked the Chip.');
  };
  return (
    <Box sx={{ pb: 5, justifyContent: 'center', textAlign: 'center' }}>
      <Typography variant="h3" component="h2" sx={{ pb: 2 }}>
        Clickable Chip
      </Typography>
      <Stack
        direction="row"
        justifyContent="center"
        alignItems="center"
        spacing={2}
      >
        <Chip label="Clickable" onClick={handleClick} />
        <Chip label="Clickable" variant="outlined" onClick={handleClick} />
      </Stack>
    </Box>
  );
}
