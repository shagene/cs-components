import { Grid } from '@mui/material';
import PageHeader from 'src/content/CshareHeader/PageHeader';
import Footer from 'src/components/CshareComponents/Footer';
import PageTitleWrapper from 'src/components/PageTitleWrapper';
import React from 'react';
import BasicCheckbox from '@/components/CshareComponents/Controls/Checkbox/BasicCheckBox';
import LabelCheckbox from '@/components/CshareComponents/Controls/Checkbox/LabelCheckbox';
import SizeCheckbox from '@/components/CshareComponents/Controls/Checkbox/SizeCheckbox';
import ColorCheckbox from '@/components/CshareComponents/Controls/Checkbox/ColorCheckbox';
import IconCheckbox from '@/components/CshareComponents/Controls/Checkbox/IconCheckbox';
import IndeterminateCheckbox from '@/components/CshareComponents/Controls/Checkbox/Indeterminate';
import FormGroupCheckbox from '@/components/CshareComponents/Controls/Checkbox/FormGroupCheckbox';
import LabelPlacementCheckbox from '@/components/CshareComponents/Controls/Checkbox/LabelPlacementCheckbox';

function CheckboxPageContent() {
  return (
    <>
      <PageTitleWrapper>
        <PageHeader title="Checkbox" />
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
          <BasicCheckbox />
          <LabelCheckbox />
          <SizeCheckbox />
          <ColorCheckbox />
          <IconCheckbox />
          <IndeterminateCheckbox />
          <FormGroupCheckbox />
          <LabelPlacementCheckbox />
        </Grid>
      </Grid>
      <Footer />
    </>
  );
}

export default CheckboxPageContent;
