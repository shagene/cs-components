import { Grid } from '@mui/material';
import PageHeader from 'src/content/CshareHeader/PageHeader';
import Footer from 'src/components/CshareComponents/Footer';
import PageTitleWrapper from 'src/components/PageTitleWrapper';
import React from 'react';
import BasicChip from '@/components/CshareComponents/Controls/Chip/BasicChip';
import ClickableChip from '@/components/CshareComponents/Controls/Chip/ClickableChip';
import DeletableChip from '@/components/CshareComponents/Controls/Chip/DeletableChip';
import ClickableLinkChip from '@/components/CshareComponents/Controls/Chip/ClickableLinkChip';
import ArrayChip from '@/components/CshareComponents/Controls/Chip/ArrayChip';

function ChipPageContent() {
  return (
    <>
      <PageTitleWrapper>
        <PageHeader title="Chip" />
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
          <BasicChip />
          <ClickableChip />
          <DeletableChip />
          <ClickableLinkChip />
          <ArrayChip />
        </Grid>
      </Grid>
      <Footer />
    </>
  );
}

export default ChipPageContent;
