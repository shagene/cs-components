import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import * as React from 'react';
import Badge from '@mui/material/Badge';
import MailIcon from '@mui/icons-material/Mail';

export default function BadgeValue() {
  const [count, setCount] = React.useState(1);
  const [invisible, setInvisible] = React.useState(false);

  const handleBadgeVisibility = () => {
    setInvisible(!invisible);
  };

  return (
    <Box sx={{ pb: 5, justifyContent: 'center', textAlign: 'center' }}>
      <Typography variant="h3" component="h2" sx={{ pb: 2 }}>
        Badge Value
      </Typography>
      <Stack
        direction="row"
        justifyContent="center"
        alignItems="center"
        spacing={2}
      >
        <Stack spacing={4} direction="row" sx={{ color: 'action.active' }}>
          <Badge color="secondary" badgeContent={0}>
            <MailIcon />
          </Badge>
          <Badge color="secondary" badgeContent={99}>
            <MailIcon />
          </Badge>
          <Badge color="secondary" badgeContent={100}>
            <MailIcon />
          </Badge>
          <Badge color="secondary" badgeContent={1000} max={999}>
            <MailIcon />
          </Badge>
        </Stack>
      </Stack>
    </Box>
  );
}
