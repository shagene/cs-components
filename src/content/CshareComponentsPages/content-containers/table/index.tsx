import { Grid } from '@mui/material';
import PageHeader from 'src/content/CshareHeader/PageHeader';
import Footer from 'src/components/CshareComponents/Footer';
import PageTitleWrapper from 'src/components/PageTitleWrapper';
import BasicTable from '@/components/CshareComponents/Content-Containers/Table/BasicTable';
import DataTable from '@/components/CshareComponents/Content-Containers/Table/DataTable';
import SortingSelectingTable from '@/components/CshareComponents/Content-Containers/Table/SortingSelectingTable';

function TablePageContent() {
  return (
    <>
      <PageTitleWrapper>
        <PageHeader title="table" />
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
          <BasicTable />
          <DataTable />
          <SortingSelectingTable />
        </Grid>
      </Grid>
      <Footer />
    </>
  );
}

export default TablePageContent;
