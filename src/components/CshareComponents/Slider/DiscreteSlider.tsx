import * as React from 'react';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Slider from '@mui/material/Slider';
import Typography from '@mui/material/Typography';

export default function DiscreteSliders() {
  function valuetext(value: number) {
    return `${value}°C`;
  }

  return (
    <Box
      sx={{
        pb: 5,
        justifyContent: 'center',
        textAlign: 'center'
      }}
    >
      <Typography variant="h3" component="h2" sx={{ pb: 2 }}>
        Discrete Slider
      </Typography>
      <Stack
        spacing={2}
        direction="row"
        justifyContent="center"
        alignItems="center"
      >
        <Slider
          aria-label="Temperature"
          defaultValue={80}
          getAriaValueText={valuetext}
          valueLabelDisplay="auto"
          step={10}
          marks
          min={10}
          max={110}
          sx={{ width: 300 }}
        />
      </Stack>

      <Slider
        defaultValue={30}
        step={10}
        marks
        min={10}
        max={110}
        sx={{ width: 300 }}
        disabled
      />
    </Box>
  );
}
