import { Grid } from '@mui/material';
import PageHeader from 'src/content/CshareHeader/PageHeader';
import Footer from 'src/components/CshareComponents/Footer';
import PageTitleWrapper from 'src/components/PageTitleWrapper';
import ReactMaterialUICarousel from '@/components/CshareComponents/Content-Containers/Carousel/ReactMaterialUiCarousel';

function CarouselPageContent() {
  return (
    <>
      <PageTitleWrapper>
        <PageHeader title="Carousel" />
      </PageTitleWrapper>
      <Grid
        // sx={{ px: 4 }}
        container
        direction="row"
        justifyContent="center"
        alignItems="stretch"
        spacing={3}
      >
        <Grid item lg={12} md={12} xs={12}>
          <ReactMaterialUICarousel />
        </Grid>
      </Grid>
      {/* <Grid item lg={12} md={12} xs={12}>
        <ReactMaterialUICarousel />
      </Grid> */}
      <Footer />
    </>
  );
}

export default CarouselPageContent;
