import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import * as React from 'react';
import { pink } from '@mui/material/colors';
import Radio from '@mui/material/Radio';

export default function RadioButtonColor() {
  const [selectedValue, setSelectedValue] = React.useState('a');

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedValue(event.target.value);
  };

  const controlProps = (item: string) => ({
    checked: selectedValue === item,
    onChange: handleChange,
    value: item,
    name: 'color-radio-button-demo',
    inputProps: { 'aria-label': item }
  });

  return (
    <Box sx={{ pb: 5, justifyContent: 'center', textAlign: 'center' }}>
      <Typography variant="h3" component="h2" sx={{ pb: 2 }}>
        Radio Color
      </Typography>
      <Stack
        direction="row"
        justifyContent="center"
        alignItems="center"
        spacing={2}
      >
        <Radio {...controlProps('a')} />
        <Radio {...controlProps('b')} color="secondary" />
        <Radio {...controlProps('c')} color="success" />
        <Radio {...controlProps('d')} color="default" />
        <Radio
          {...controlProps('e')}
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
