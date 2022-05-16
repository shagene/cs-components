import { Grid } from '@mui/material';
import PageHeader from 'src/content/CshareHeader/PageHeader';
import Footer from 'src/components/CshareComponents/Footer';
import PageTitleWrapper from 'src/components/PageTitleWrapper';
import React from 'react';
import BasicAppbar from '@/components/CshareComponents/Navigation-Controls/Appbar/BasicAppbar';
import ResponsiveAppbar from '@/components/CshareComponents/Navigation-Controls/Appbar/ResponsiveAppbar';
import AppbarWithSearch from '@/components/CshareComponents/Navigation-Controls/Appbar/AppbarWithSearch';

function AppbarPageContent() {
  return (
    <>
      <PageTitleWrapper>
        <PageHeader title="App Bar" />
      </PageTitleWrapper>
      <Grid
        sx={{ px: 4 }}
        container
        direction="row"
        justifyContent="center"
        alignItems="stretch"
        spacing={3}
      >
        <BasicAppbar />
        <ResponsiveAppbar />
        <AppbarWithSearch />
      </Grid>
      <Footer />
    </>
  );
}

export default AppbarPageContent;
