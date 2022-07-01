import { Grid } from '@mui/material';
import PageHeader from 'src/content/CshareHeader/PageHeader';
import Footer from 'src/components/CshareComponents/Footer';
import PageTitleWrapper from 'src/components/PageTitleWrapper';
import BasicBackdrop from '@/components/CshareComponents/Content-Containers/Backdrop/Backdrop';
import { Box } from '@mui/system';

function BackdropPageContent() {
  return (
    <>
      <PageTitleWrapper>
        <PageHeader title="Backdrop" />
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
          <Box sx={{ p: 20 }}>
            <BasicBackdrop />
          </Box>
        </Grid>
      </Grid>
      <Footer />
    </>
  );
}

export default BackdropPageContent;
