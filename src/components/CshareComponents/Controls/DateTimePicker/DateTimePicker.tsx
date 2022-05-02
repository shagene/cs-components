import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import * as React from 'react';
import TextField from '@mui/material/TextField';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { TimePicker } from '@mui/x-date-pickers/TimePicker';
import { DateTimePicker } from '@mui/x-date-pickers/DateTimePicker';
import { DesktopDatePicker } from '@mui/x-date-pickers/DesktopDatePicker';
import { MobileDatePicker } from '@mui/x-date-pickers/MobileDatePicker';

export default function CSDateTimePicker() {
  const [value, setValue] = React.useState<Date | null>(
    new Date('2014-08-18T21:11:54')
  );

  const handleChange = (newValue: Date | null) => {
    setValue(newValue);
  };
  return (
    <Box sx={{ pb: 5, justifyContent: 'center', textAlign: 'center' }}>
      <Typography variant="h3" component="h2" sx={{ pb: 2 }}>
        Date Time Picker
      </Typography>
      <Stack
        direction="row"
        justifyContent="center"
        alignItems="center"
        spacing={2}
      >
        <LocalizationProvider dateAdapter={AdapterDateFns}>
          <Stack spacing={3}>
            <DesktopDatePicker
              label="Date desktop"
              inputFormat="MM/dd/yyyy"
              value={value}
              onChange={handleChange}
              renderInput={(params) => <TextField {...params} />}
            />
            <MobileDatePicker
              label="Date mobile"
              inputFormat="MM/dd/yyyy"
              value={value}
              onChange={handleChange}
              renderInput={(params) => <TextField {...params} />}
            />
            <TimePicker
              label="Time"
              value={value}
              onChange={handleChange}
              renderInput={(params) => <TextField {...params} />}
            />
            <DateTimePicker
              label="Date&Time picker"
              value={value}
              onChange={handleChange}
              renderInput={(params) => <TextField {...params} />}
            />
          </Stack>
        </LocalizationProvider>
      </Stack>
    </Box>
  );
}
