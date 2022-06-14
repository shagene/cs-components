import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import { green, pink } from '@mui/material/colors';
import FolderIcon from '@mui/icons-material/Folder';
import PageviewIcon from '@mui/icons-material/Pageview';
import AssignmentIcon from '@mui/icons-material/Assignment';

export default function IconAvatar() {
  return (
    <Box sx={{ pb: 5, justifyContent: 'center', textAlign: 'center' }}>
      <Typography variant="h3" component="h2" sx={{ pb: 2 }}>
        Icon Avatar
      </Typography>
      <Stack
        direction="row"
        justifyContent="center"
        alignItems="center"
        spacing={2}
      >
        <Avatar>
          <FolderIcon />
        </Avatar>
        <Avatar sx={{ bgcolor: pink[500] }}>
          <PageviewIcon />
        </Avatar>
        <Avatar sx={{ bgcolor: green[500] }}>
          <AssignmentIcon />
        </Avatar>
      </Stack>
    </Box>
  );
}
