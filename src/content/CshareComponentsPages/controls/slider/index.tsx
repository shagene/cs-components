import { Grid } from '@mui/material';
import PageHeader from 'src/content/CshareHeader/PageHeader';
import Footer from 'src/components/CshareComponents/Footer';
import PageTitleWrapper from 'src/components/PageTitleWrapper';
import React from 'react';
import ContinuousSlider from '@/components/CshareComponents/Controls/Slider/ContinuousSlider';
import DiscreteSliders from '@/components/CshareComponents/Controls/Slider/DiscreteSlider';
import RangeSliders from '@/components/CshareComponents/Controls/Slider/RangeSlider';
import VerticleSlider from '@/components/CshareComponents/Controls/Slider/VerticleSlider';

function SliderPageContent() {
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
          <VerticleSlider />
        </Grid>
      </Grid>
      <Footer />
    </>
  );
}

export default SliderPageContent;
