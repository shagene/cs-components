import { Grid } from '@mui/material';
import PageHeader from 'src/content/CshareHeader/PageHeader';
import Footer from 'src/components/CshareComponents/Footer';
import PageTitleWrapper from 'src/components/PageTitleWrapper';
import React from 'react';
import BasicPaginator from '@/components/CshareComponents/Controls/Paginator/BasicPaginator';
import OutlinedPaginator from '@/components/CshareComponents/Controls/Paginator/OutlinedPaginator';
import RoundedPaginator from '@/components/CshareComponents/Controls/Paginator/RoundedPaginator';
import RangesPaginator from '@/components/CshareComponents/Controls/Paginator/RangesPaginator';
import TablePaginator from '@/components/CshareComponents/Controls/Paginator/TablePaginator';

function PaginatorPageContent() {
  return (
    <>
      <PageTitleWrapper>
        <PageHeader title="Paginator" />
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
          <BasicPaginator />
          <OutlinedPaginator />
          <RoundedPaginator />
          <RangesPaginator />
          <TablePaginator />
        </Grid>
      </Grid>
      <Footer />
    </>
  );
}

export default PaginatorPageContent;
