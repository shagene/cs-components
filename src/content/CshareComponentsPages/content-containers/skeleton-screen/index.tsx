import { Grid } from '@mui/material';
import PageHeader from 'src/content/CshareHeader/PageHeader';
import Footer from 'src/components/CshareComponents/Footer';
import PageTitleWrapper from 'src/components/PageTitleWrapper';
import SkeletonScreenText from '@/components/CshareComponents/Content-Containers/SkeletonScreen/TextVariant';
import SkeletonScreenCircular from '@/components/CshareComponents/Content-Containers/SkeletonScreen/CircularVariant';
import SkeletonScreenRectangular from '@/components/CshareComponents/Content-Containers/SkeletonScreen/RectangularVariant';
import SkeletonScreenAnimation from '@/components/CshareComponents/Content-Containers/SkeletonScreen/AnimationVariant';
import SkeletonScreenColor from '@/components/CshareComponents/Content-Containers/SkeletonScreen/ColorVariant';

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
          <SkeletonScreenText />
          <SkeletonScreenCircular />
          <SkeletonScreenRectangular />
          <SkeletonScreenAnimation />
          <SkeletonScreenColor />
        </Grid>
      </Grid>
      <Footer />
    </>
  );
}

export default SkeletonScreenPageContent;
