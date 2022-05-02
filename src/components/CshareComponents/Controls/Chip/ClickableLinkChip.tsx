import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import Chip from '@mui/material/Chip';
import * as React from 'react';

export default function ClickableLinkChip() {
  return (
    <Box sx={{ pb: 5, justifyContent: 'center', textAlign: 'center' }}>
      <Typography variant="h3" component="h2" sx={{ pb: 2 }} id={'basic-chip'}>
        Clickable Link Chip
      </Typography>
      <Stack
        direction="row"
        justifyContent="center"
        alignItems="center"
        spacing={2}
      >
        <Chip
          label="Clickable Link"
          component="a"
          href="#basic-chip"
          clickable
        />
        <Chip
          label="Clickable Link"
          component="a"
          href="#basic-chip"
          variant="outlined"
          clickable
        />
      </Stack>
    </Box>
  );
}
