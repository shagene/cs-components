import { Grid } from '@mui/material';
import PageHeader from 'src/content/CshareHeader/PageHeader';
import Footer from 'src/components/CshareComponents/Footer';
import PageTitleWrapper from 'src/components/PageTitleWrapper';
import BasicAlert from '@/components/CshareComponents/Content-Containers/Alert/BasicAlert';
import DescriptionAlert from '@/components/CshareComponents/Content-Containers/Alert/DescriptionAlert';
import ActionAlert from '@/components/CshareComponents/Content-Containers/Alert/ActionAlert';
import OutlinedAlert from '@/components/CshareComponents/Content-Containers/Alert/OutlinedAlert';
import FilledAlert from '@/components/CshareComponents/Content-Containers/Alert/FilledAlert';
import TransitionAlert from '@/components/CshareComponents/Content-Containers/Alert/TransitionAlert';

function AlertPageContent() {
  return (
    <>
      <PageTitleWrapper>
        <PageHeader title="Accordion" />
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
          <BasicAlert />
          <DescriptionAlert />
          <ActionAlert />
          <TransitionAlert />
          <OutlinedAlert />
          <FilledAlert />
        </Grid>
      </Grid>
      <Footer />
    </>
  );
}

export default AlertPageContent;
