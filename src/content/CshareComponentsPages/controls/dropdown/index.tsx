import { Grid } from '@mui/material';
import PageHeader from 'src/content/CshareHeader/PageHeader';
import Footer from 'src/components/CshareComponents/Footer';
import PageTitleWrapper from 'src/components/PageTitleWrapper';
import React from 'react';
import BasicSelect from '@/components/CshareComponents/Controls/Dropdown/BasicSelect';
import FilledAndStandard from '@/components/CshareComponents/Controls/Dropdown/FilledAndStandard';
import LabelsAndHelpers from '@/components/CshareComponents/Controls/Dropdown/LabelsAndHelperText';
import NativeSelect from '@/components/CshareComponents/Controls/Dropdown/NativeSelect';
import MutlipleSelect from '@/components/CshareComponents/Controls/Dropdown/MultipleSelect';

function DropdwonPageContent() {
  return (
    <>
      <PageTitleWrapper>
        <PageHeader title="Dropdown" />
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
          <BasicSelect />
          <FilledAndStandard />
          <LabelsAndHelpers />
          <NativeSelect />
          <MutlipleSelect />
        </Grid>
      </Grid>
      <Footer />
    </>
  );
}

export default DropdwonPageContent;
