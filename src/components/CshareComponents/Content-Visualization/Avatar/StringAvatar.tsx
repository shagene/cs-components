import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import * as React from 'react';
import Avatar from '@mui/material/Avatar';

function stringToColor(string: string) {
  let hash = 0;
  let i;

  /* eslint-disable no-bitwise */
  for (i = 0; i < string.length; i += 1) {
    hash = string.charCodeAt(i) + ((hash << 5) - hash);
  }

  let color = '#';

  for (i = 0; i < 3; i += 1) {
    const value = (hash >> (i * 8)) & 0xff;
    color += `00${value.toString(16)}`.slice(-2);
  }
  /* eslint-enable no-bitwise */

  return color;
}

function stringAvatar(name: string) {
  return {
    sx: {
      bgcolor: stringToColor(name)
    },
    children: `${name.split(' ')[0][0]}${name.split(' ')[1][0]}`
  };
}

export default function StringAvatar() {
  return (
    <Box sx={{ pb: 5, justifyContent: 'center', textAlign: 'center' }}>
      <Typography variant="h3" component="h2" sx={{ pb: 2 }}>
        String Avatar
      </Typography>
      <Stack
        direction="row"
        justifyContent="center"
        alignItems="center"
        spacing={2}
      >
        <Avatar {...stringAvatar('Kent Dodds')} />
        <Avatar {...stringAvatar('Jed Watson')} />
        <Avatar {...stringAvatar('Tim Neutkens')} />
        <Avatar {...stringAvatar('Billy Bob')} />
        <Avatar {...stringAvatar('Computer Share')} />
      </Stack>
    </Box>
  );
}
