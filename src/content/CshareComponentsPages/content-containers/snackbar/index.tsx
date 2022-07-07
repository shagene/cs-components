import { Grid } from '@mui/material';
import PageHeader from 'src/content/CshareHeader/PageHeader';
import Footer from 'src/components/CshareComponents/Footer';
import PageTitleWrapper from 'src/components/PageTitleWrapper';
import SimpleSnackbar from '@/components/CshareComponents/Content-Containers/Snackbar/SimpleSnackbar';
import PositionedSnackbar from '@/components/CshareComponents/Content-Containers/Snackbar/PositionedSnackbar';

function SnackbarPageContent() {
  return (
    <>
      <PageTitleWrapper>
        <PageHeader title="Snackbar" />
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
          <SimpleSnackbar />
          <PositionedSnackbar />
        </Grid>
      </Grid>
      <Footer />
    </>
  );
}

export default SnackbarPageContent;
