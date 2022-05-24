import { useRef, useState } from 'react';
import {
  Box,
  Card,
  Container,
  styled,
  useTheme,
  MenuList
} from '@mui/material';
import type { ReactElement } from 'react';
import BaseLayout from 'src/layouts/BaseLayout';

import Head from 'next/head';
import { useTranslation } from 'react-i18next';
import Logo from 'src/components/LogoSign';
import Hero from 'src/content/Overview/Hero';
import LanguageSwitcher from 'src/layouts/BoxedSidebarLayout/Header/Buttons/LanguageSwitcher';
import Footer from 'src/components/CshareComponents/Footer';
import ThemeSettings from '@/components/ThemeSettings';

import ComponentsMenu from '@/content/CshareBuiltComponents/componentsMenuDropdown';

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
                <ComponentsMenu />
              </Box>
            </Box>
          </Box>
        </Container>
      </HeaderWrapper>
      <Hero />
      {/* <ScrollToTop /> */}
      <ThemeSettings />
      <Footer />
    </OverviewWrapper>
  );
}

export default Overview;

Overview.getLayout = function getLayout(page: ReactElement) {
  return <BaseLayout>{page}</BaseLayout>;
};
