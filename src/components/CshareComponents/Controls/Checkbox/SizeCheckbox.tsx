import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import Checkbox from '@mui/material/Checkbox';

const label = { inputProps: { 'aria-label': 'Size Checkbox' } };

export default function SizeCheckbox() {
  return (
    <Box sx={{ pb: 5, justifyContent: 'center', textAlign: 'center' }}>
      <Typography variant="h3" component="h2" sx={{ pb: 2 }}>
        Size Checkbox
      </Typography>
      <Stack
        direction="row"
        justifyContent="center"
        alignItems="center"
        spacing={2}
      >
        <Checkbox {...label} defaultChecked size="small" />
        <Checkbox {...label} defaultChecked />
        <Checkbox
          {...label}
          defaultChecked
          sx={{ '& .MuiSvgIcon-root': { fontSize: 28 } }}
        />
      </Stack>
    </Box>
  );
}
