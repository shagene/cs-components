import { Grid } from '@mui/material';
import PageHeader from 'src/content/CshareHeader/PageHeader';
import Footer from 'src/components/CshareComponents/Footer';
import PageTitleWrapper from 'src/components/PageTitleWrapper';
import React from 'react';

function NavigationRailPageContent() {
  return (
    <>
      <PageTitleWrapper>
        <PageHeader title="Navigation Rail" />
      </PageTitleWrapper>
      <Grid
        sx={{ px: 4 }}
        container
        direction="row"
        justifyContent="center"
        alignItems="stretch"
        spacing={3}
      >
        Navigation Rail
      </Grid>
      <Footer />
    </>
  );
}

export default NavigationRailPageContent;
