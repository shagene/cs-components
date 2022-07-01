import { Grid } from '@mui/material';
import PageHeader from 'src/content/CshareHeader/PageHeader';
import Footer from 'src/components/CshareComponents/Footer';
import PageTitleWrapper from 'src/components/PageTitleWrapper';
import BasicCard from '@/components/CshareComponents/Content-Containers/Card/BasicCard';
import OutlinedCard from '@/components/CshareComponents/Content-Containers/Card/OutlinedCard';
import ComplexCard from '@/components/CshareComponents/Content-Containers/Card/ComplexCard';
import ActionCard from '@/components/CshareComponents/Content-Containers/Card/ActionCard';
import ControlsCard from '@/components/CshareComponents/Content-Containers/Card/Controls';

function CardPageContent() {
  return (
    <>
      <PageTitleWrapper>
        <PageHeader title="Card" />
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
          <BasicCard />
          <OutlinedCard />
          <ComplexCard />
          <ActionCard />
          <ControlsCard />
        </Grid>
      </Grid>
      <Footer />
    </>
  );
}

export default CardPageContent;
