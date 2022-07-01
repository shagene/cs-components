import { Grid } from '@mui/material';
import PageHeader from 'src/content/CshareHeader/PageHeader';
import Footer from 'src/components/CshareComponents/Footer';
import PageTitleWrapper from 'src/components/PageTitleWrapper';
import BasicList from '@/components/CshareComponents/Content-Containers/List/BasicList';
import NestedList from '@/components/CshareComponents/Content-Containers/List/NestedList';
import SelectedListItem from '@/components/CshareComponents/Content-Containers/List/SelectedListItem';

function ListPageContent() {
  return (
    <>
      <PageTitleWrapper>
        <PageHeader title="List" />
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
          <BasicList />
          <NestedList />
          <SelectedListItem />
        </Grid>
      </Grid>
      <Footer />
    </>
  );
}

export default ListPageContent;
