import { Grid } from '@mui/material';
import PageHeader from 'src/content/CshareHeader/PageHeader';
import Footer from 'src/components/CshareComponents/Footer';
import PageTitleWrapper from 'src/components/PageTitleWrapper';
import BasicAccordion from '@/components/CshareComponents/Content-Containers/Accordion/BasicAccordion';
import ControlledAccordion from '@/components/CshareComponents/Content-Containers/Accordion/ControlledAccordion';

function AccordionPageContent() {
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
          <BasicAccordion />
          <ControlledAccordion />
        </Grid>
      </Grid>
      <Footer />
    </>
  );
}

export default AccordionPageContent;
