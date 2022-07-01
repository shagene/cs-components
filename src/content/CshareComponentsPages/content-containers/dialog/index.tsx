import { Grid } from '@mui/material';
import PageHeader from 'src/content/CshareHeader/PageHeader';
import Footer from 'src/components/CshareComponents/Footer';
import PageTitleWrapper from 'src/components/PageTitleWrapper';
import BasicDialog from '@/components/CshareComponents/Content-Containers/Dialog/BasicDialog';
import AlertDialog from '@/components/CshareComponents/Content-Containers/Dialog/AlertDialog';
import FormDialog from '@/components/CshareComponents/Content-Containers/Dialog/FormDialog';
import FullScreenDialog from '@/components/CshareComponents/Content-Containers/Dialog/FullScreenDialog';

function DialogPageContent() {
  return (
    <>
      <PageTitleWrapper>
        <PageHeader title="Dialog" />
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
          <BasicDialog />
          <AlertDialog />
          <FormDialog />
          <FullScreenDialog />
        </Grid>
      </Grid>
      <Footer />
    </>
  );
}

export default DialogPageContent;
