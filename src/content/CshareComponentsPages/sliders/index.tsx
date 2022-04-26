import { Grid } from '@mui/material';
import PageHeader from 'src/content/CshareHeader/PageHeader';
import Footer from 'src/components/CshareComponents/Footer';
import PageTitleWrapper from 'src/components/PageTitleWrapper';
import React from 'react';
import ContinuousSlider from '@/components/CshareComponents/Sliders/ContinuousSliders';
import DiscreteSliders from '@/components/CshareComponents/Sliders/DiscreteSliders';
import RangeSliders from '@/components/CshareComponents/Sliders/RangeSliders';
import VerticleSliders from '@/components/CshareComponents/Sliders/VerticleSliders';

function SlidersPageContent() {
  return (
    <>
      <PageTitleWrapper>
        <PageHeader title="Sliders" />
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
          <ContinuousSlider />
          <DiscreteSliders />
          <RangeSliders />
          <VerticleSliders />
        </Grid>
      </Grid>
      <Footer />
    </>
  );
}

export default SlidersPageContent;
