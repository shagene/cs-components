import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import Chip from '@mui/material/Chip';

export default function BasicChip() {
  return (
    <Box sx={{ pb: 5, justifyContent: 'center', textAlign: 'center' }}>
      <Typography variant="h3" component="h2" sx={{ pb: 2 }}>
        Basic Chip
      </Typography>
      <Stack
        direction="row"
        justifyContent="center"
        alignItems="center"
        spacing={2}
      >
        <Chip label="Chip Filled" />
        <Chip label="Chip Outlined" variant="outlined" />
      </Stack>
    </Box>
  );
}
