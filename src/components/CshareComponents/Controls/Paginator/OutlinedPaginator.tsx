import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import * as React from 'react';
import Pagination from '@mui/material/Pagination';

const preventDefault = (event: React.SyntheticEvent) => event.preventDefault();

export default function OutlinedPaginator() {
  return (
    <Box sx={{ pb: 5, justifyContent: 'center', textAlign: 'center' }}>
      <Typography variant="h3" component="h2" sx={{ pb: 2 }}>
        Outlined Paginator
      </Typography>
      <Stack
        direction="row"
        justifyContent="center"
        alignItems="center"
        spacing={2}
        onClick={preventDefault}
      >
        <Stack
          direction="column"
          justifyContent="center"
          alignItems="center"
          spacing={2}
        >
          <Pagination count={10} variant="outlined" />
          <Pagination count={10} variant="outlined" color="primary" />
          <Pagination count={10} variant="outlined" color="secondary" />
          <Pagination count={10} variant="outlined" disabled />
        </Stack>
      </Stack>
    </Box>
  );
}
