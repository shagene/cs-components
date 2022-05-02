import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import Checkbox from '@mui/material/Checkbox';
import * as React from 'react';
import FavoriteBorder from '@mui/icons-material/FavoriteBorder';
import Favorite from '@mui/icons-material/Favorite';
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import BookmarkIcon from '@mui/icons-material/Bookmark';
import FormLabel from '@mui/material/FormLabel';
import FormControl from '@mui/material/FormControl';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormHelperText from '@mui/material/FormHelperText';

const label = { inputProps: { 'aria-label': 'Form Group Checkbox' } };

export default function FormGroupCheckbox() {
  const [state, setState] = React.useState({
    gilad: true,
    jason: false,
    antoine: false
  });

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setState({
      ...state,
      [event.target.name]: event.target.checked
    });
  };

  const { gilad, jason, antoine } = state;
  const error = [gilad, jason, antoine].filter((v) => v).length !== 2;
  return (
    <Box sx={{ pb: 5, justifyContent: 'center', textAlign: 'center' }}>
      <Typography variant="h3" component="h2" sx={{ pb: 2 }}>
        Icon Checkbox
      </Typography>
      <Stack
        direction="row"
        justifyContent="center"
        alignItems="center"
        spacing={2}
      >
        <FormControl sx={{ m: 3 }} component="fieldset" variant="standard">
          <FormLabel component="legend">Assign responsibility</FormLabel>
          <FormGroup>
            <FormControlLabel
              control={
                <Checkbox
                  checked={gilad}
                  onChange={handleChange}
                  name="gilad"
                />
              }
              label="Gilad Gray"
            />
            <FormControlLabel
              control={
                <Checkbox
                  checked={jason}
                  onChange={handleChange}
                  name="jason"
                />
              }
              label="Jason Killian"
            />
            <FormControlLabel
              control={
                <Checkbox
                  checked={antoine}
                  onChange={handleChange}
                  name="antoine"
                />
              }
              label="Antoine Llorca"
            />
          </FormGroup>
          <FormHelperText>Be careful</FormHelperText>
        </FormControl>
        <FormControl
          required
          error={error}
          component="fieldset"
          sx={{ m: 3 }}
          variant="standard"
        >
          <FormLabel component="legend">Pick two</FormLabel>
          <FormGroup>
            <FormControlLabel
              control={
                <Checkbox
                  checked={gilad}
                  onChange={handleChange}
                  name="gilad"
                />
              }
              label="Gilad Gray"
            />
            <FormControlLabel
              control={
                <Checkbox
                  checked={jason}
                  onChange={handleChange}
                  name="jason"
                />
              }
              label="Jason Killian"
            />
            <FormControlLabel
              control={
                <Checkbox
                  checked={antoine}
                  onChange={handleChange}
                  name="antoine"
                />
              }
              label="Antoine Llorca"
            />
          </FormGroup>
          <FormHelperText>You can display an error</FormHelperText>
        </FormControl>
      </Stack>
    </Box>
  );
}
