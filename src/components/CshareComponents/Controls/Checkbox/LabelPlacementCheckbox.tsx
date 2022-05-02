import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import Checkbox from '@mui/material/Checkbox';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';

const label = { inputProps: { 'aria-label': 'Label Placement Checkbox' } };

export default function LabelPlacementCheckbox() {
  return (
    <Box sx={{ pb: 5, justifyContent: 'center', textAlign: 'center' }}>
      <Typography variant="h3" component="h2" sx={{ pb: 2 }}>
        Basic Checkbox
      </Typography>
      <Stack
        direction="row"
        justifyContent="center"
        alignItems="center"
        spacing={2}
      >
        <FormControl component="fieldset">
          <FormLabel component="legend">Label placement</FormLabel>
          <FormGroup aria-label="position" row>
            <FormControlLabel
              value="top"
              control={<Checkbox />}
              label="Top"
              labelPlacement="top"
            />
            <FormControlLabel
              value="start"
              control={<Checkbox />}
              label="Start"
              labelPlacement="start"
            />
            <FormControlLabel
              value="bottom"
              control={<Checkbox />}
              label="Bottom"
              labelPlacement="bottom"
            />
            <FormControlLabel
              value="end"
              control={<Checkbox />}
              label="End"
              labelPlacement="end"
            />
          </FormGroup>
        </FormControl>
      </Stack>
    </Box>
  );
}
