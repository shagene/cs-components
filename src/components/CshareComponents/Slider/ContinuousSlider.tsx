import * as React from 'react';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Slider from '@mui/material/Slider';
import VolumeDown from '@mui/icons-material/VolumeDown';
import VolumeUp from '@mui/icons-material/VolumeUp';
import Typography from '@mui/material/Typography';

export default function ContinuousSlider() {
  const [value, setValue] = React.useState<number>(75);

  const handleChange = (event: Event, newValue: number | number[]) => {
    setValue(newValue as number);
  };

  return (
    <Box
      sx={{
        pb: 5,
        justifyContent: 'center',
        textAlign: 'center'
      }}
    >
      <Typography variant="h3" component="h2" sx={{ pb: 2 }}>
        Continuous Slider
      </Typography>
      <Stack
        spacing={2}
        direction="row"
        justifyContent="center"
        alignItems="center"
      >
        <VolumeDown />
        <Slider
          aria-label="Volume"
          value={value}
          onChange={handleChange}
          sx={{ width: 300 }}
        />
        <VolumeUp />
      </Stack>
      <Slider
        disabled
        defaultValue={30}
        aria-label="Disabled slider"
        sx={{ width: 300 }}
      />
    </Box>
  );
}
