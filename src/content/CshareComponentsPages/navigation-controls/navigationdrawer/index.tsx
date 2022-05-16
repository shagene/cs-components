import { Grid } from '@mui/material';
import PageHeader from 'src/content/CshareHeader/PageHeader';
import Footer from 'src/components/CshareComponents/Footer';
import PageTitleWrapper from 'src/components/PageTitleWrapper';
import React from 'react';

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
        Navigation Drawer
      </Grid>
      <Footer />
    </>
  );
}

export default NavigationDrawerPageContent;
