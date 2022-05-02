import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import Checkbox from '@mui/material/Checkbox';
import { pink } from '@mui/material/colors';

const label = { inputProps: { 'aria-label': 'Size Checkbox' } };

export default function ColorCheckbox() {
  return (
    <Box sx={{ pb: 5, justifyContent: 'center', textAlign: 'center' }}>
      <Typography variant="h3" component="h2" sx={{ pb: 2 }}>
        Color Checkbox
      </Typography>
      <Stack
        direction="row"
        justifyContent="center"
        alignItems="center"
        spacing={2}
      >
        <Checkbox {...label} defaultChecked />
        <Checkbox {...label} defaultChecked color="secondary" />
        <Checkbox {...label} defaultChecked color="success" />
        <Checkbox {...label} defaultChecked color="default" />
        <Checkbox
          {...label}
          defaultChecked
          sx={{
            color: pink[800],
            '&.Mui-checked': {
              color: pink[600]
            }
          }}
        />
      </Stack>
    </Box>
  );
}
