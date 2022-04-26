import { Grid } from '@mui/material';
import PageHeader from 'src/content/CshareHeader/PageHeader';
import Footer from 'src/components/CshareComponents/Footer';
import PageTitleWrapper from 'src/components/PageTitleWrapper';
import React from 'react';
import { Autocomplete } from 'formik-mui';
import ComboBox from '@/components/CshareComponents/Autocomplete/ComboBox';
import Playground from '@/components/CshareComponents/Autocomplete/Playground';

function AutocompletePageContent() {
  return (
    <>
      <PageTitleWrapper>
        <PageHeader title="Autocomplete" />
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
          {/* <ComboBox /> */}
          <Playground />
        </Grid>
      </Grid>
      <Footer />
    </>
  );
}

export default AutocompletePageContent;
