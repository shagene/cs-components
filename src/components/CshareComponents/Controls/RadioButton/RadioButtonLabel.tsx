import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import * as React from 'react';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';

export default function RadioButtonLabel() {
  return (
    <Box sx={{ pb: 5, justifyContent: 'center', textAlign: 'center' }}>
      <Typography variant="h3" component="h2" sx={{ pb: 2 }}>
        Radio Label Placement
      </Typography>
      <Stack
        direction="row"
        justifyContent="center"
        alignItems="center"
        spacing={2}
      >
        <FormControl>
          <FormLabel id="demo-form-control-label-placement">
            Label placement
          </FormLabel>
          <RadioGroup
            row
            aria-labelledby="demo-form-control-label-placement"
            name="position"
            defaultValue="top"
          >
            <FormControlLabel
              value="top"
              control={<Radio />}
              label="Top"
              labelPlacement="top"
            />
            <FormControlLabel
              value="start"
              control={<Radio />}
              label="Start"
              labelPlacement="start"
            />
            <FormControlLabel
              value="bottom"
              control={<Radio />}
              label="Bottom"
              labelPlacement="bottom"
            />
            <FormControlLabel value="end" control={<Radio />} label="End" />
          </RadioGroup>
        </FormControl>
      </Stack>
    </Box>
  );
}
