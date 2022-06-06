import PageHeader from 'src/content/CshareHeader/PageHeader';
import Footer from 'src/components/CshareComponents/Footer';
import PageTitleWrapper from 'src/components/PageTitleWrapper';
import React from 'react';
import BasicTabs from '@/components/CshareComponents/Navigation-Controls/Tabs/BasicTabs';
import Grid from '@mui/material/Grid/Grid';
import WrappedTabs from '@/components/CshareComponents/Navigation-Controls/Tabs/WrappedLabels';
import VerticleTabs from '@/components/CshareComponents/Navigation-Controls/Tabs/VerticleTabs';

function TabsPageContent() {
  return (
    <>
      <PageTitleWrapper>
        <PageHeader title="Tabs" />
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
          <BasicTabs />
          <WrappedTabs />
          <VerticleTabs />
        </Grid>
      </Grid>

      <Footer />
    </>
  );
}

export default TabsPageContent;
