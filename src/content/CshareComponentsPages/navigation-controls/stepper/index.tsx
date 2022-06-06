import { Grid } from '@mui/material';
import PageHeader from 'src/content/CshareHeader/PageHeader';
import Footer from 'src/components/CshareComponents/Footer';
import PageTitleWrapper from 'src/components/PageTitleWrapper';
import React from 'react';
import HorizontalStepperLinear from '@/components/CshareComponents/Navigation-Controls/Stepper/HorizontalStepperLinear';
import HorizontalStepperNonLinear from '@/components/CshareComponents/Navigation-Controls/Stepper/HorizontalStepperLinearNonLinear';
import VerticalStepperLinear from '@/components/CshareComponents/Navigation-Controls/Stepper/VerticalStepper';

function StepperPageContent() {
  return (
    <>
      <PageTitleWrapper>
        <PageHeader title="Stepper / Wizard" />
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
          <HorizontalStepperLinear />
          <HorizontalStepperNonLinear />
          <VerticalStepperLinear />
        </Grid>
      </Grid>

      <Footer />
    </>
  );
}

export default StepperPageContent;
