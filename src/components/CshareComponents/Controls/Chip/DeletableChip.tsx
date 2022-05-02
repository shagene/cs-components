import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import Chip from '@mui/material/Chip';
import * as React from 'react';

export default function DeletableChip() {
  const handleDelete = () => {
    console.info('You clicked the delete icon.');
  };
  return (
    <Box sx={{ pb: 5, justifyContent: 'center', textAlign: 'center' }}>
      <Typography variant="h3" component="h2" sx={{ pb: 2 }}>
        Deletable Chip
      </Typography>
      <Stack
        direction="row"
        justifyContent="center"
        alignItems="center"
        spacing={2}
      >
        <Chip label="Deletable" onDelete={handleDelete} />
        <Chip label="Deletable" variant="outlined" onDelete={handleDelete} />
      </Stack>
    </Box>
  );
}
