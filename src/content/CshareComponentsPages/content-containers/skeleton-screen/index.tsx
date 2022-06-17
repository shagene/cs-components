import { Grid } from '@mui/material';
import PageHeader from 'src/content/CshareHeader/PageHeader';
import Footer from 'src/components/CshareComponents/Footer';
import PageTitleWrapper from 'src/components/PageTitleWrapper';

function SkeletonScreenPageContent() {
  return (
    <>
      <PageTitleWrapper>
        <PageHeader title="Skeleton Screen" />
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
          Skeleton Screen
        </Grid>
      </Grid>
      <Footer />
    </>
  );
}

export default SkeletonScreenPageContent;
