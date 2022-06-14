import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import * as React from 'react';
import Badge, { BadgeProps } from '@mui/material/Badge';
import { styled } from '@mui/material/styles';
import IconButton from '@mui/material/IconButton';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import MailIcon from '@mui/icons-material/Mail';
import HomeMaxIcon from '@mui/icons-material/HomeMax';

const StyledBadge = styled(Badge)<BadgeProps>(({ theme }) => ({
  '& .MuiBadge-badge': {
    right: -3,
    top: 13,
    border: `2px solid ${theme.palette.background.paper}`,
    padding: '0 4px'
  }
}));

export default function CustomBadge() {
  return (
    <Box sx={{ pb: 5, justifyContent: 'center', textAlign: 'center' }}>
      <Typography variant="h3" component="h2" sx={{ pb: 2 }}>
        Custom Badge
      </Typography>
      <Stack
        direction="row"
        justifyContent="center"
        alignItems="center"
        spacing={2}
      >
        <IconButton aria-label="cart">
          <StyledBadge badgeContent={2} color="primary">
            <ShoppingCartIcon />
          </StyledBadge>
        </IconButton>
        <IconButton aria-label="cart">
          <StyledBadge badgeContent={4} color="secondary">
            <MailIcon />
          </StyledBadge>
        </IconButton>
        <IconButton aria-label="cart">
          <StyledBadge badgeContent={8} color="primary">
            <HomeMaxIcon />
          </StyledBadge>
        </IconButton>
      </Stack>
    </Box>
  );
}
