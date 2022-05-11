import { Grid } from '@mui/material';
import PageHeader from 'src/content/CshareHeader/PageHeader';
import Footer from 'src/components/CshareComponents/Footer';
import PageTitleWrapper from 'src/components/PageTitleWrapper';
import React from 'react';
import RadioButtonGroup from '@/components/CshareComponents/Controls/RadioButton/RadioButtonGroup';
import RadioButtonDirection from '@/components/CshareComponents/Controls/RadioButton/RadioButtonDirection';
import RadioButtonColor from '@/components/CshareComponents/Controls/RadioButton/RadioButtonColor';
import RadioButtonLabel from '@/components/CshareComponents/Controls/RadioButton/RadioButtonLabel';

function RadioButtonPageContent() {
  return (
    <>
      <PageTitleWrapper>
        <PageHeader title="Radio Button" />
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
          <RadioButtonGroup />
          <RadioButtonDirection />
          <RadioButtonColor />
          <RadioButtonLabel />
        </Grid>
      </Grid>
      <Footer />
    </>
  );
}

export default RadioButtonPageContent;
