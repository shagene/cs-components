import { useRef, useState } from 'react';
import {
  Box,
  Button,
  useTheme,
  Typography,
  MenuList,
  Divider,
  MenuItem,
  ListItemText,
  alpha,
  Popover,
  Stack,
  styled
} from '@mui/material';
import Link from 'src/components/Link';

import { useTranslation } from 'react-i18next';
import KeyboardArrowDownTwoToneIcon from '@mui/icons-material/KeyboardArrowDownTwoTone';

const MenuListWrapperSecondary = styled(MenuList)(
  ({ theme }) => `
    padding: ${theme.spacing(3)};
  
    & .MuiMenuItem-root {
        border-radius: 50px;
        padding: ${theme.spacing(1, 1, 1, 2.5)};
        min-width: 200px;
        margin-bottom: 2px;
        position: relative;
        color: ${theme.colors.alpha.black[70]};
  
        &.Mui-selected,
        &:hover,
        &.MuiButtonBase-root:active {
            background: ${theme.colors.alpha.black[10]};
            color: ${theme.colors.alpha.black[100]};
        }
  
        &:last-child {
            margin-bottom: 0;
        }
      }
  `
);

const MenuListWrapperSuccess = styled(MenuList)(
  ({ theme }) => `
    padding: ${theme.spacing(3)};
  
    & .MuiMenuItem-root {
        border-radius: 50px;
        padding: ${theme.spacing(1, 1, 1, 2.5)};
        min-width: 200px;
        margin-bottom: 2px;
        position: relative;
        color: ${theme.colors.success.main};
  
        &.Mui-selected,
        &:hover,
        &.MuiButtonBase-root:active {
            background: ${theme.colors.success.lighter};
            color: ${theme.colors.success.dark};
        }
  
        &:last-child {
            margin-bottom: 0;
        }
      }
  `
);

const MenuListWrapperError = styled(MenuList)(
  ({ theme }) => `
    padding: ${theme.spacing(3)};
  
    & .MuiMenuItem-root {
        border-radius: 50px;
        padding: ${theme.spacing(1, 1, 1, 2.5)};
        min-width: 200px;
        margin-bottom: 2px;
        position: relative;
        color: ${theme.colors.error.main};
  
        &.Mui-selected,
        &:hover,
        &.MuiButtonBase-root:active {
            background: ${theme.colors.error.lighter};
            color: ${theme.colors.error.dark};
        }
  
        &:last-child {
            margin-bottom: 0;
        }
      }
  `
);

function ComponentsMenu() {
  const { t }: { t: any } = useTranslation();
  const theme = useTheme();

  const ref = useRef<any>(null);
  const [isOpen, setOpen] = useState<boolean>(false);

  const handleOpen = (): void => {
    setOpen(true);
  };

  const handleClose = (): void => {
    setOpen(false);
  };
  return (
    <>
      <Box
        sx={{
          display: { xs: 'none', md: 'inline-flex' }
        }}
      >
        <Button
          ref={ref}
          onClick={handleOpen}
          endIcon={<KeyboardArrowDownTwoToneIcon />}
          color="secondary"
          size="small"
          sx={{
            mr: 1,
            px: 2,
            backgroundColor: `${theme.colors.secondary.lighter}`,
            color: `${theme.colors.secondary.dark}`,

            '.MuiSvgIcon-root': {
              color: `${theme.colors.secondary.dark}`,
              transition: `${theme.transitions.create(['color'])}`
            },

            '&:hover': {
              backgroundColor: `${theme.colors.secondary.main}`,
              color: `${theme.palette.getContrastText(
                theme.colors.secondary.main
              )}`,

              '.MuiSvgIcon-root': {
                color: `${theme.palette.getContrastText(
                  theme.colors.secondary.main
                )}`
              }
            }
          }}
        >
          {t('Components Menu')}
        </Button>
      </Box>
      <Popover
        disableScrollLock
        anchorEl={ref.current}
        onClose={handleClose}
        open={isOpen}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'left'
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'left'
        }}
      >
        <Box
          sx={{
            p: 2,
            background: alpha(theme.colors.alpha.black[100], 0.06)
          }}
          display="flex"
          alignItems="center"
          justifyContent="space-between"
        >
          <Box>
            <Typography
              sx={{
                pb: 0.5
              }}
              variant="h4"
            >
              {t('Components Menus')}
            </Typography>
            <Typography noWrap variant="subtitle2">
              {t('This is the components menus')}
            </Typography>
          </Box>
          <Link
            href="#"
            variant="subtitle2"
            sx={{
              textTransform: 'none',
              display: { xs: 'none', lg: 'inline-block' }
            }}
          >
            {t('View all')}
          </Link>
        </Box>
        <Divider />
        <Stack
          direction={{ xs: 'column', sm: 'row' }}
          divider={<Divider orientation="vertical" flexItem />}
          justifyContent="stretch"
          alignItems="stretch"
          spacing={0}
        >
          <MenuListWrapperSecondary disablePadding>
            <Typography variant="h5" textAlign={'start'} sx={{ pb: 2 }}>
              Content Containers
            </Typography>
            <MenuItem disabled>
              <Link href="/cs-components/controls/button">
                <ListItemText
                  primaryTypographyProps={{
                    variant: 'h5'
                  }}
                  primary={t('Accordion')}
                />
              </Link>
            </MenuItem>
            <MenuItem disabled>
              <Link href="/cs-components/controls/slider">
                <ListItemText
                  primaryTypographyProps={{
                    variant: 'h5'
                  }}
                  primary={t('Alert')}
                />
              </Link>
            </MenuItem>
            <MenuItem disabled>
              <Link href="/cs-components/controls/button">
                <ListItemText
                  primaryTypographyProps={{
                    variant: 'h5'
                  }}
                  primary={t('Backdrop')}
                />
              </Link>
            </MenuItem>
            <MenuItem disabled>
              <Link href="/cs-components/controls/slider">
                <ListItemText
                  primaryTypographyProps={{
                    variant: 'h5'
                  }}
                  primary={t('Banner')}
                />
              </Link>
            </MenuItem>
            <MenuItem disabled>
              <Link href="/cs-components/controls/slider">
                <ListItemText
                  primaryTypographyProps={{
                    variant: 'h5'
                  }}
                  primary={t('Card')}
                />
              </Link>
            </MenuItem>
            <MenuItem disabled>
              <Link href="/cs-components/controls/slider">
                <ListItemText
                  primaryTypographyProps={{
                    variant: 'h5'
                  }}
                  primary={t('Carousel')}
                />
              </Link>
            </MenuItem>
            <MenuItem disabled>
              <Link href="/cs-components/controls/slider">
                <ListItemText
                  primaryTypographyProps={{
                    variant: 'h5'
                  }}
                  primary={t('Dialog')}
                />
              </Link>
            </MenuItem>
            <MenuItem disabled>
              <Link href="/cs-components/controls/slider">
                <ListItemText
                  primaryTypographyProps={{
                    variant: 'h5'
                  }}
                  primary={t('List')}
                />
              </Link>
            </MenuItem>
            <MenuItem disabled>
              <Link href="/cs-components/controls/slider">
                <ListItemText
                  primaryTypographyProps={{
                    variant: 'h5'
                  }}
                  primary={t('Image List')}
                />
              </Link>
            </MenuItem>
            <MenuItem disabled>
              <Link href="/cs-components/controls/slider">
                <ListItemText
                  primaryTypographyProps={{
                    variant: 'h5'
                  }}
                  primary={t('Skeleton Screen')}
                />
              </Link>
            </MenuItem>
            <MenuItem disabled>
              <Link href="/cs-components/controls/slider">
                <ListItemText
                  primaryTypographyProps={{
                    variant: 'h5'
                  }}
                  primary={t('Snackbar')}
                />
              </Link>
            </MenuItem>
            <MenuItem disabled>
              <Link href="/cs-components/controls/slider">
                <ListItemText
                  primaryTypographyProps={{
                    variant: 'h5'
                  }}
                  primary={t('Table')}
                />
              </Link>
            </MenuItem>
            <MenuItem disabled>
              <Link href="/cs-components/controls/slider">
                <ListItemText
                  primaryTypographyProps={{
                    variant: 'h5'
                  }}
                  primary={t('Tooltip')}
                />
              </Link>
            </MenuItem>
          </MenuListWrapperSecondary>
          <MenuListWrapperSuccess disablePadding>
            <Typography variant="h5" textAlign={'start'} sx={{ pb: 2 }}>
              Content Visualization
            </Typography>
            <MenuItem disabled>
              <Link href="/cs-components/controls/button">
                <ListItemText
                  primaryTypographyProps={{
                    variant: 'h5'
                  }}
                  primary={t('Avatars')}
                />
              </Link>
            </MenuItem>
            <MenuItem disabled>
              <Link href="/cs-components/controls/slider">
                <ListItemText
                  primaryTypographyProps={{
                    variant: 'h5'
                  }}
                  primary={t('Badges')}
                />
              </Link>
            </MenuItem>
            <MenuItem disabled>
              <Link href="/cs-components/controls/button">
                <ListItemText
                  primaryTypographyProps={{
                    variant: 'h5'
                  }}
                  primary={t('Loading Indicators')}
                />
              </Link>
            </MenuItem>
            <MenuItem disabled>
              <Link href="/cs-components/controls/slider">
                <ListItemText
                  primaryTypographyProps={{
                    variant: 'h5'
                  }}
                  primary={t('Progress Indicators')}
                />
              </Link>
            </MenuItem>
            <MenuItem disabled>
              <Link href="/cs-components/controls/slider">
                <ListItemText
                  primaryTypographyProps={{
                    variant: 'h5'
                  }}
                  primary={t('Tags')}
                />
              </Link>
            </MenuItem>
          </MenuListWrapperSuccess>
          <MenuListWrapperError disablePadding>
            <Typography variant="h5" textAlign={'start'} sx={{ pb: 2 }}>
              Controls
            </Typography>
            <MenuItem selected>
              <Link href="/cs-components/controls/button">
                <ListItemText
                  primaryTypographyProps={{
                    variant: 'h5'
                  }}
                  primary={t('Button')}
                />
              </Link>
            </MenuItem>
            <MenuItem>
              <Link href="/cs-components/controls/buttongroup">
                <ListItemText
                  primaryTypographyProps={{
                    variant: 'h5'
                  }}
                  primary={t('Button Group')}
                />
              </Link>
            </MenuItem>
            <MenuItem>
              <Link href="/cs-components/controls/togglebutton">
                <ListItemText
                  primaryTypographyProps={{
                    variant: 'h5'
                  }}
                  primary={t('Button Toggle')}
                />
              </Link>
            </MenuItem>
            <MenuItem>
              <Link href="/cs-components/controls/checkbox">
                <ListItemText
                  primaryTypographyProps={{
                    variant: 'h5'
                  }}
                  primary={t('Checkbox')}
                />
              </Link>
            </MenuItem>
            <MenuItem>
              <Link href="/cs-components/controls/chip">
                <ListItemText
                  primaryTypographyProps={{
                    variant: 'h5'
                  }}
                  primary={t('Chip')}
                />
              </Link>
            </MenuItem>
            <MenuItem>
              <Link href="/cs-components/controls/datetimepicker">
                <ListItemText
                  primaryTypographyProps={{
                    variant: 'h5'
                  }}
                  primary={t('Date Time Picker')}
                />
              </Link>
            </MenuItem>
            <MenuItem>
              <Link href="/cs-components/controls/dropdown">
                <ListItemText
                  primaryTypographyProps={{
                    variant: 'h5'
                  }}
                  primary={t('Dropdown')}
                />
              </Link>
            </MenuItem>
            <MenuItem>
              <Link href="/cs-components/controls/floatingactionbutton">
                <ListItemText
                  primaryTypographyProps={{
                    variant: 'h5'
                  }}
                  primary={t('Floating Action Button')}
                />
              </Link>
            </MenuItem>
            <MenuItem>
              <Link href="/cs-components/controls/link">
                <ListItemText
                  primaryTypographyProps={{
                    variant: 'h5'
                  }}
                  primary={t('Link')}
                />
              </Link>
            </MenuItem>
            <MenuItem>
              <Link href="/cs-components/controls/paginator">
                <ListItemText
                  primaryTypographyProps={{
                    variant: 'h5'
                  }}
                  primary={t('Paginator')}
                />
              </Link>
            </MenuItem>
            <MenuItem>
              <Link href="/cs-components/controls/radiobutton">
                <ListItemText
                  primaryTypographyProps={{
                    variant: 'h5'
                  }}
                  primary={t('Radio Button')}
                />
              </Link>
            </MenuItem>
            <MenuItem disabled>
              <Link href="/cs-components/controls/slider">
                <ListItemText
                  primaryTypographyProps={{
                    variant: 'h5'
                  }}
                  primary={t('Search')}
                />
              </Link>
            </MenuItem>
            <MenuItem>
              <Link href="/cs-components/controls/slider">
                <ListItemText
                  primaryTypographyProps={{
                    variant: 'h5'
                  }}
                  primary={t('Slider')}
                />
              </Link>
            </MenuItem>
            <MenuItem disabled>
              <Link href="/cs-components/controls/slider">
                <ListItemText
                  primaryTypographyProps={{
                    variant: 'h5'
                  }}
                  primary={t('Text Area')}
                />
              </Link>
            </MenuItem>
            <MenuItem disabled>
              <Link href="/cs-components/controls/slider">
                <ListItemText
                  primaryTypographyProps={{
                    variant: 'h5'
                  }}
                  primary={t('Text Field')}
                />
              </Link>
            </MenuItem>
            <MenuItem disabled>
              <Link href="/cs-components/controls/slider">
                <ListItemText
                  primaryTypographyProps={{
                    variant: 'h5'
                  }}
                  primary={t('Toggle / Switch')}
                />
              </Link>
            </MenuItem>
          </MenuListWrapperError>
          <MenuListWrapperError disablePadding>
            <Typography variant="h5" textAlign={'start'} sx={{ pb: 2 }}>
              Navigation Controls
            </Typography>
            <MenuItem disabled>
              <Link href="/cs-components/controls/button">
                <ListItemText
                  primaryTypographyProps={{
                    variant: 'h5'
                  }}
                  primary={t('App bar')}
                />
              </Link>
            </MenuItem>
            <MenuItem disabled>
              <Link href="/cs-components/controls/slider">
                <ListItemText
                  primaryTypographyProps={{
                    variant: 'h5'
                  }}
                  primary={t('Menus')}
                />
              </Link>
            </MenuItem>
            <MenuItem disabled>
              <Link href="/cs-components/controls/button">
                <ListItemText
                  primaryTypographyProps={{
                    variant: 'h5'
                  }}
                  primary={t('Navigation Drawer')}
                />
              </Link>
            </MenuItem>
            <MenuItem disabled>
              <Link href="/cs-components/controls/slider">
                <ListItemText
                  primaryTypographyProps={{
                    variant: 'h5'
                  }}
                  primary={t('Navigation Rail')}
                />
              </Link>
            </MenuItem>
            <MenuItem disabled>
              <Link href="/cs-components/controls/slider">
                <ListItemText
                  primaryTypographyProps={{
                    variant: 'h5'
                  }}
                  primary={t('Section Index')}
                />
              </Link>
            </MenuItem>
            <MenuItem disabled>
              <Link href="/cs-components/controls/slider">
                <ListItemText
                  primaryTypographyProps={{
                    variant: 'h5'
                  }}
                  primary={t('Tabs')}
                />
              </Link>
            </MenuItem>
            <MenuItem disabled>
              <Link href="/cs-components/controls/slider">
                <ListItemText
                  primaryTypographyProps={{
                    variant: 'h5'
                  }}
                  primary={t('Toolbar')}
                />
              </Link>
            </MenuItem>
            <MenuItem disabled>
              <Link href="/cs-components/controls/slider">
                <ListItemText
                  primaryTypographyProps={{
                    variant: 'h5'
                  }}
                  primary={t('Stepper / Wizard')}
                />
              </Link>
            </MenuItem>
          </MenuListWrapperError>
        </Stack>
        <Divider />
        <Box
          sx={{
            m: 2,
            textAlign: 'center'
          }}
        >
          <Button size="small" color="primary">
            {t('View more components')}
          </Button>
        </Box>
      </Popover>
    </>
  );
}

export default ComponentsMenu;
