import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import {
  blue,
  deepOrange,
  deepPurple,
  grey,
  pink,
  red
} from '@mui/material/colors';

export default function LetterAvatar() {
  return (
    <Box sx={{ pb: 5, justifyContent: 'center', textAlign: 'center' }}>
      <Typography variant="h3" component="h2" sx={{ pb: 2 }}>
        Letter Avatar
      </Typography>
      <Stack
        direction="row"
        justifyContent="center"
        alignItems="center"
        spacing={2}
      >
        <Avatar sx={{ bgcolor: deepOrange[500] }}>C</Avatar>
        <Avatar sx={{ bgcolor: deepPurple[500] }}>S</Avatar>
        <Avatar sx={{ bgcolor: red[500] }}>H</Avatar>
        <Avatar sx={{ bgcolor: blue[500] }}>A</Avatar>
        <Avatar sx={{ bgcolor: pink[500] }}>R</Avatar>
        <Avatar sx={{ bgcolor: grey[500] }}>E</Avatar>
      </Stack>
    </Box>
  );
}
