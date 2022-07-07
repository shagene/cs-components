import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import * as React from 'react';
import Skeleton from '@mui/material/Skeleton';

export default function SkeletonScreenText() {
  return (
    <Box
      sx={{
        pb: 5,
        justifyContent: 'center',
        textAlign: 'center'
      }}
    >
      <Typography variant="h3" component="h2" sx={{ pb: 2 }}>
        Text Variant Skeleton Screen
      </Typography>
      <Stack
        direction="row"
        justifyContent="center"
        alignItems="center"
        spacing={2}
      >
        <Box sx={{ width: 300 }}>
          <Skeleton variant="text" />
        </Box>
      </Stack>
    </Box>
  );
}
