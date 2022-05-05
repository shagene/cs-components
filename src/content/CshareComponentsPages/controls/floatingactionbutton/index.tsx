import { Grid } from '@mui/material';
import PageHeader from 'src/content/CshareHeader/PageHeader';
import Footer from 'src/components/CshareComponents/Footer';
import PageTitleWrapper from 'src/components/PageTitleWrapper';
import React from 'react';
import BasicFab from '@/components/CshareComponents/Controls/FloatingActionButton/BasicFab';
import ExtendedFab from '@/components/CshareComponents/Controls/FloatingActionButton/ExtendedFab';
import SizedFab from '@/components/CshareComponents/Controls/FloatingActionButton/SizedFab';

function FabPageContent() {
  return (
    <>
      <PageTitleWrapper>
        <PageHeader title="Floating Action Button (FAB)" />
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
          <BasicFab />
          <ExtendedFab />
          <SizedFab />
        </Grid>
      </Grid>
      <Footer />
    </>
  );
}

export default FabPageContent;
