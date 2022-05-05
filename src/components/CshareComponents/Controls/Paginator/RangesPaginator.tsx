import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import * as React from 'react';
import Pagination from '@mui/material/Pagination';

const preventDefault = (event: React.SyntheticEvent) => event.preventDefault();

export default function RangesPaginator() {
  return (
    <Box sx={{ pb: 5, justifyContent: 'center', textAlign: 'center' }}>
      <Typography variant="h3" component="h2" sx={{ pb: 2 }}>
        Ranges Paginator
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
          <Pagination count={11} defaultPage={6} siblingCount={0} />
          <Pagination count={11} defaultPage={6} /> {/* Default ranges */}
          <Pagination
            count={11}
            defaultPage={6}
            siblingCount={0}
            boundaryCount={2}
          />
          <Pagination count={11} defaultPage={6} boundaryCount={2} />
        </Stack>
      </Stack>
    </Box>
  );
}
