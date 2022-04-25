import { useRef, useState } from 'react';
import {
  Box,
  Card,
  Container,
  Popover,
  Button,
  styled,
  useTheme,
  CardActionArea,
  Typography,
  MenuList,
  Grid,
  Divider,
  MenuItem,
  ListItemText,
  alpha,
  Stack
} from '@mui/material';
import type { ReactElement } from 'react';
import BaseLayout from 'src/layouts/BaseLayout';

import Link from 'src/components/Link';
import Head from 'next/head';
import { useTranslation } from 'react-i18next';
import Logo from 'src/components/LogoSign';
import Hero from 'src/content/Overview/Hero';
import Highlights from 'src/content/Overview/Highlights';
import LanguageSwitcher from 'src/layouts/BoxedSidebarLayout/Header/Buttons/LanguageSwitcher';
import Footer from 'src/components/CshareComponents/Footer';
import ThemeSettings from '@/components/ThemeSettings';
import KeyboardArrowDownTwoToneIcon from '@mui/icons-material/KeyboardArrowDownTwoTone';

const HeaderWrapper = styled(Card)(
  ({ theme }) => `
  width: 100%;
  display: flex;
  align-items: center;
  height: ${theme.spacing(10)};
  margin-bottom: ${theme.spacing(10)};
`
);

const OverviewWrapper = styled(Box)(
  ({ theme }) => `
    overflow: auto;
    background: ${theme.palette.common.white};
    flex: 1;
    overflow-x: hidden;
`
);

const LabelWrapper = styled(Box)(
  ({ theme }) => `
  font-size: ${theme.typography.pxToRem(10)};
  font-weight: bold;
  text-transform: uppercase;
  border-radius: ${theme.general.borderRadiusSm};
  padding: ${theme.spacing(0.5, 1, 0.4)};
`
);

const CardActionAreaWrapper = styled(CardActionArea)(
  ({ theme }) => `
      .MuiTouchRipple-root {
        opacity: .2;
      }

      .MuiCardActionArea-focusHighlight {
        background: ${theme.colors.primary.main};
      }

      &:hover {
        .MuiCardActionArea-focusHighlight {
          opacity: .05;
        }
      }
`
);

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

const DotLegend = styled('span')(
  ({ theme }) => `
    border-radius: 22px;
    width: ${theme.spacing(1.4)};
    height: ${theme.spacing(1.45)};
    display: inline-block;
    border: ${theme.colors.alpha.white[100]} solid 2px;
`
);

function Overview() {
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
    <OverviewWrapper>
      <Head>
        <title>CShare Components</title>
      </Head>
      <HeaderWrapper>
        <Container maxWidth="lg">
          <Box display="flex" alignItems="center">
            <Logo />
            <Box
              display="flex"
              alignItems="center"
              justifyContent="space-between"
              flex={1}
            >
              <Box />
              <Box>
                <LanguageSwitcher />
                {/* <Button
                  component={Link}
                  href="/cs-components/buttons"
                  variant="contained"
                  sx={{ ml: 2 }}
                >
                  {t('Buttons')}
                </Button> */}
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
                    {t('Components menu')}
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
                      <MenuItem selected>
                        <Link href="/cs-components/buttons">
                          <ListItemText
                            primaryTypographyProps={{
                              variant: 'h5'
                            }}
                            primary={t('Buttons')}
                          />
                        </Link>
                      </MenuItem>
                      <MenuItem>
                        <Link href="/cs-components/sliders">
                          <ListItemText
                            primaryTypographyProps={{
                              variant: 'h5'
                            }}
                            primary={t('Sliders')}
                          />
                        </Link>
                      </MenuItem>
                      <MenuItem disabled>
                        <Link href="/cs-components/buttons">
                          <ListItemText
                            primaryTypographyProps={{
                              variant: 'h5'
                            }}
                            primary={t('Buttons')}
                          />
                        </Link>
                      </MenuItem>
                      <MenuItem disabled>
                        <Link href="/cs-components/sliders">
                          <ListItemText
                            primaryTypographyProps={{
                              variant: 'h5'
                            }}
                            primary={t('Sliders')}
                          />
                        </Link>
                      </MenuItem>
                    </MenuListWrapperSecondary>
                    <MenuListWrapperSuccess disablePadding>
                      <MenuItem>
                        <Link href="/cs-components/buttons">
                          <ListItemText
                            primaryTypographyProps={{
                              variant: 'h5'
                            }}
                            primary={t('Buttons')}
                          />
                        </Link>
                      </MenuItem>
                      <MenuItem>
                        <Link href="/cs-components/sliders">
                          <ListItemText
                            primaryTypographyProps={{
                              variant: 'h5'
                            }}
                            primary={t('Sliders')}
                          />
                        </Link>
                      </MenuItem>
                      <MenuItem disabled>
                        <Link href="/cs-components/buttons">
                          <ListItemText
                            primaryTypographyProps={{
                              variant: 'h5'
                            }}
                            primary={t('Buttons')}
                          />
                        </Link>
                      </MenuItem>
                      <MenuItem disabled>
                        <Link href="/cs-components/sliders">
                          <ListItemText
                            primaryTypographyProps={{
                              variant: 'h5'
                            }}
                            primary={t('Sliders')}
                          />
                        </Link>
                      </MenuItem>
                    </MenuListWrapperSuccess>
                    <MenuListWrapperError disablePadding>
                      <MenuItem>
                        <Link href="/cs-components/buttons">
                          <ListItemText
                            primaryTypographyProps={{
                              variant: 'h5'
                            }}
                            primary={t('Buttons')}
                          />
                        </Link>
                      </MenuItem>
                      <MenuItem>
                        <Link href="/cs-components/sliders">
                          <ListItemText
                            primaryTypographyProps={{
                              variant: 'h5'
                            }}
                            primary={t('Sliders')}
                          />
                        </Link>
                      </MenuItem>
                      <MenuItem disabled>
                        <Link href="/cs-components/buttons">
                          <ListItemText
                            primaryTypographyProps={{
                              variant: 'h5'
                            }}
                            primary={t('Buttons')}
                          />
                        </Link>
                      </MenuItem>
                      <MenuItem disabled>
                        <Link href="/cs-components/sliders">
                          <ListItemText
                            primaryTypographyProps={{
                              variant: 'h5'
                            }}
                            primary={t('Sliders')}
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
              </Box>
            </Box>
          </Box>
        </Container>
      </HeaderWrapper>
      <Hero />
      <ThemeSettings />
      {/* <Highlights /> */}
      <Footer />
    </OverviewWrapper>
  );
}

export default Overview;

Overview.getLayout = function getLayout(page: ReactElement) {
  return <BaseLayout>{page}</BaseLayout>;
};
