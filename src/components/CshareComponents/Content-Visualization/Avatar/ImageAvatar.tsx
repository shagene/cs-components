import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import * as React from 'react';
import Avatar from '@mui/material/Avatar';

export default function ImageAvatar() {
  return (
    <Box sx={{ pb: 5, justifyContent: 'center', textAlign: 'center' }}>
      <Typography variant="h3" component="h2" sx={{ pb: 2 }}>
        Image Avatar
      </Typography>
      <Stack
        direction="row"
        justifyContent="center"
        alignItems="center"
        spacing={2}
      >
        <Avatar
          alt="Cshare Avatar 1"
          src="/static/images/avatar/avatar-image-1.png"
        />
        <Avatar
          alt="Cshare Avatar 1"
          src="/static/images/avatar/avatar-image-2.jpg"
        />
        <Avatar
          alt="Cshare Avatar 1"
          src="/static/images/avatar/avatar-image-3.jpg"
        />
      </Stack>
    </Box>
  );
}
