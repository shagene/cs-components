import { Grid } from '@mui/material';
import PageHeader from 'src/content/CshareHeader/PageHeader';
import Footer from 'src/components/CshareComponents/Footer';
import PageTitleWrapper from 'src/components/PageTitleWrapper';
import React from 'react';
import BasicMenu from '@/components/CshareComponents/Navigation-Controls/Menu/BasicMenu';
import IconMenu from '@/components/CshareComponents/Navigation-Controls/Menu/IconMenu';
import DenseMenu from '@/components/CshareComponents/Navigation-Controls/Menu/DenseMenu';
import SelectedMenu from '@/components/CshareComponents/Navigation-Controls/Menu/SelectedMenu';
import MaxHeightMenu from '@/components/CshareComponents/Navigation-Controls/Menu/MaxHeightMenu';

function MenuPageContent() {
  return (
    <>
      <PageTitleWrapper>
        <PageHeader title="Menu" />
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
          <BasicMenu />
          <IconMenu />
          <DenseMenu />
          <SelectedMenu />
          <MaxHeightMenu />
        </Grid>
      </Grid>
      <Footer />
    </>
  );
}

export default MenuPageContent;
