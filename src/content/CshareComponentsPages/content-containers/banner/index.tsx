import { Grid } from '@mui/material';
import PageHeader from 'src/content/CshareHeader/PageHeader';
import Footer from 'src/components/CshareComponents/Footer';
import PageTitleWrapper from 'src/components/PageTitleWrapper';
import * as React from 'react';
import Banner from '@/components/CshareComponents/Content-Containers/Banner/Banner';

function BannerPageContent() {
  return (
    <>
      <PageTitleWrapper>
        <PageHeader title="Banner" />
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
          <Banner />
          <Banner />
        </Grid>
      </Grid>
      <Footer />
    </>
  );
}

export default BannerPageContent;
