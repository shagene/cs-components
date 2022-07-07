import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import * as React from 'react';
import Skeleton from '@mui/material/Skeleton';

export default function SkeletonScreenColor() {
  return (
    <Box
      sx={{
        pb: 5,
        justifyContent: 'center',
        textAlign: 'center'
      }}
    >
      <Typography variant="h3" component="h2" sx={{ pb: 2 }}>
        Color Variant Skeleton Screen
      </Typography>
      <Stack
        direction="row"
        justifyContent="center"
        alignItems="center"
        spacing={2}
      >
        <Skeleton
          sx={{ bgcolor: 'green' }}
          variant="rectangular"
          width={210}
          height={118}
        />
      </Stack>
    </Box>
  );
}
