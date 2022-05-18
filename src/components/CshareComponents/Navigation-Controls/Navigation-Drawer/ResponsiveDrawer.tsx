import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import { Box } from '@mui/material';
import React from 'react';

export default function ResponsiveDrawer() {
  return (
    <Box sx={{ pb: 5, justifyContent: 'center', textAlign: 'center' }}>
      <Typography variant="h3" component="h2" sx={{ pb: 2 }}>
        Responsive Drawer
      </Typography>
      <Stack
        direction="row"
        justifyContent="center"
        alignItems="center"
        spacing={2}
      >
        <iframe
          src="https://react-hh8g4v.stackblitz.io"
          width={1000}
          height={500}
        ></iframe>
      </Stack>
    </Box>
  );
}
