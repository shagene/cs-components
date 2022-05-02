import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import LoadingButton from '@mui/lab/LoadingButton';
import SaveIcon from '@mui/icons-material/Save';
import FormControlLabel from '@mui/material/FormControlLabel';
import Switch from '@mui/material/Switch';
import SendIcon from '@mui/icons-material/Send';
import Stack from '@mui/material/Stack';

export default function LoadingButtons() {
  const [loading, setLoading] = React.useState(true);
  function handleClick() {
    setLoading(true);
  }
  return (
    <Box sx={{ pb: 5, justifyContent: 'center', textAlign: 'center' }}>
      <Typography variant="h3" component="h2" sx={{ pb: 2 }}>
        Loading Button
      </Typography>
      <Box>
        <FormControlLabel
          sx={{
            display: 'block'
          }}
          control={
            <Switch
              checked={loading}
              onChange={() => setLoading(!loading)}
              name="loading"
              color="primary"
            />
          }
          label="Loading"
        />
        <Box sx={{ pb: 2 }} />
        <Stack
          direction="row"
          justifyContent="space-around"
          alignItems="flex-end"
          spacing={2}
        >
          <LoadingButton
            size="small"
            onClick={handleClick}
            loading={loading}
            variant="outlined"
            disabled
          >
            disabled
          </LoadingButton>
          <LoadingButton
            size="small"
            onClick={handleClick}
            loading={loading}
            loadingIndicator="Loading..."
            variant="outlined"
          >
            Fetch data
          </LoadingButton>
          <LoadingButton
            size="small"
            onClick={handleClick}
            endIcon={<SendIcon />}
            loading={loading}
            loadingPosition="end"
            variant="contained"
          >
            Send
          </LoadingButton>
          <LoadingButton
            size="small"
            color="secondary"
            onClick={handleClick}
            loading={loading}
            loadingPosition="start"
            startIcon={<SaveIcon />}
            variant="contained"
          >
            Save
          </LoadingButton>
        </Stack>
        <Box sx={{ pb: 2 }} />
        <Stack
          direction="row"
          justifyContent="space-around"
          alignItems="flex-end"
          spacing={2}
        >
          <LoadingButton
            onClick={handleClick}
            loading={loading}
            variant="outlined"
            disabled
          >
            disabled
          </LoadingButton>
          <LoadingButton
            onClick={handleClick}
            loading={loading}
            loadingIndicator="Loading..."
            variant="outlined"
          >
            Fetch data
          </LoadingButton>
          <LoadingButton
            onClick={handleClick}
            endIcon={<SendIcon />}
            loading={loading}
            loadingPosition="end"
            variant="contained"
          >
            Send
          </LoadingButton>
          <LoadingButton
            color="secondary"
            onClick={handleClick}
            loading={loading}
            loadingPosition="start"
            startIcon={<SaveIcon />}
            variant="contained"
          >
            Save
          </LoadingButton>
        </Stack>
      </Box>
    </Box>
  );
}
