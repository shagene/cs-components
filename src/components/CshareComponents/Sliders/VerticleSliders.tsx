import * as React from 'react';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Slider from '@mui/material/Slider';
import Typography from '@mui/material/Typography';

function valuetext(value: number) {
  return `${value}°C`;
}

const marks = [
  {
    value: 0,
    label: '0°C'
  },
  {
    value: 20,
    label: '20°C'
  },
  {
    value: 37,
    label: '37°C'
  },
  {
    value: 100,
    label: '100°C'
  }
];

export default function VerticleSliders() {
  return (
    <Box
      sx={{
        pb: 5,
        justifyContent: 'center',
        textAlign: 'center'
      }}
    >
      <Typography variant="h3" component="h2" sx={{ pb: 2 }}>
        Verticle Sliders
      </Typography>
      <Stack
        spacing={2}
        direction="row"
        justifyContent="center"
        alignItems="center"
        sx={{ height: 150 }}
      >
        <Slider
          aria-label="Temperature"
          orientation="vertical"
          getAriaValueText={valuetext}
          defaultValue={30}
        />
        <Slider
          aria-label="Temperature"
          orientation="vertical"
          defaultValue={30}
          disabled
        />
        <Slider
          getAriaLabel={() => 'Temperature'}
          orientation="vertical"
          getAriaValueText={valuetext}
          defaultValue={[20, 37]}
          marks={marks}
        />
      </Stack>
    </Box>
  );
}
