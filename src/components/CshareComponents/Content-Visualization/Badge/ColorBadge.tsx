import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import * as React from 'react';
import Badge from '@mui/material/Badge';
import MailIcon from '@mui/icons-material/Mail';

export default function ColorBadge() {
  return (
    <Box sx={{ pb: 5, justifyContent: 'center', textAlign: 'center' }}>
      <Typography variant="h3" component="h2" sx={{ pb: 2 }}>
        Color Badge
      </Typography>
      <Stack
        direction="row"
        justifyContent="center"
        alignItems="center"
        spacing={2}
      >
        <Badge badgeContent={1} color="primary">
          <MailIcon color="action" />
        </Badge>
        <Badge badgeContent={3} color="secondary">
          <MailIcon color="action" />
        </Badge>
        <Badge badgeContent={5} color="success">
          <MailIcon color="action" />
        </Badge>
        <Badge badgeContent={5} color="warning">
          <MailIcon color="action" />
        </Badge>
      </Stack>
    </Box>
  );
}
