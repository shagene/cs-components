import { Grid } from '@mui/material';
import PageHeader from 'src/content/CshareHeader/PageHeader';
import Footer from 'src/components/CshareComponents/Footer';
import PageTitleWrapper from 'src/components/PageTitleWrapper';
import React from 'react';
import BasicLink from '@/components/CshareComponents/Controls/Link/BasicLink';
import UnderlineLink from '@/components/CshareComponents/Controls/Link/UnderlineLink';

function LinkPageContent() {
  return (
    <>
      <PageTitleWrapper>
        <PageHeader title="Link" />
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
          <BasicLink />
          <UnderlineLink />
        </Grid>
      </Grid>
      <Footer />
    </>
  );
}

export default LinkPageContent;
