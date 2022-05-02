import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import Checkbox from '@mui/material/Checkbox';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';

export default function LabelCheckbox() {
  return (
    <Box sx={{ pb: 5, justifyContent: 'center', textAlign: 'center' }}>
      <Typography variant="h3" component="h2" sx={{ pb: 2 }}>
        Label Checkbox
      </Typography>
      <Stack
        direction="row"
        justifyContent="center"
        alignItems="center"
        spacing={2}
      >
        <FormGroup>
          <FormControlLabel
            control={<Checkbox defaultChecked />}
            label="Label"
          />
          <FormControlLabel disabled control={<Checkbox />} label="Disabled" />
        </FormGroup>
      </Stack>
    </Box>
  );
}
