import { Box } from '@mui/material';
import LanguageSwitcher from './LanguageSwitcher';

function HeaderButtons() {
  return (
    <Box>
      {/* <HeaderNotifications /> */}
      <LanguageSwitcher />
      {/* <Chat /> */}
    </Box>
  );
}

export default HeaderButtons;
