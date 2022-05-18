import { Grid } from '@mui/material';
import PageHeader from 'src/content/CshareHeader/PageHeader';
import Footer from 'src/components/CshareComponents/Footer';
import PageTitleWrapper from 'src/components/PageTitleWrapper';
import React from 'react';
import TemporaryDrawer from '@/components/CshareComponents/Navigation-Controls/Navigation-Drawer/TemporaryDrawer';
import DrawerSwipeable from '@/components/CshareComponents/Navigation-Controls/Navigation-Drawer/DrawerSwipeable';
import MiniDrawer from '@/components/CshareComponents/Navigation-Controls/Navigation-Drawer/MiniDrawer';
import ResponsiveDrawer from '@/components/CshareComponents/Navigation-Controls/Navigation-Drawer/ResponsiveDrawer';

function NavigationDrawerPageContent() {
  return (
    <>
      <PageTitleWrapper>
        <PageHeader title="Navigation Drawer" />
      </PageTitleWrapper>
      <Grid
        sx={{ px: 4 }}
        container
        direction="row"
        justifyContent="center"
        alignItems="stretch"
        spacing={3}
      >
        <Grid item lg={12} md={12} xs={12}>
          <TemporaryDrawer />
          <DrawerSwipeable />
          <ResponsiveDrawer />
          <MiniDrawer />
        </Grid>
      </Grid>
      <Footer />
    </>
  );
}

export default NavigationDrawerPageContent;
