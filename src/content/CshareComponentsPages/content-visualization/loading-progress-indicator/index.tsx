import { CircularProgress, Grid } from '@mui/material';

import PageHeader from 'src/content/CshareHeader/PageHeader';
import Footer from 'src/components/CshareComponents/Footer';
import PageTitleWrapper from 'src/components/PageTitleWrapper';
import CircularIndicator from '@/components/CshareComponents/Content-Visualization/Loading-Progress-Indicator/CicularIndicator';
import CircularDeterminate from '@/components/CshareComponents/Content-Visualization/Loading-Progress-Indicator/CircularDeterminate';
import InteractiveIndicator from '@/components/CshareComponents/Content-Visualization/Loading-Progress-Indicator/InteractiveIndicator';
import LinearIndeterminate from '@/components/CshareComponents/Content-Visualization/Loading-Progress-Indicator/LinearIndeterminate';
import LinearColor from '@/components/CshareComponents/Content-Visualization/Loading-Progress-Indicator/LinearColor';
import CircularLabel from '@/components/CshareComponents/Content-Visualization/Loading-Progress-Indicator/CircularLabel';
import LinearDeterminate from '@/components/CshareComponents/Content-Visualization/Loading-Progress-Indicator/LinearDeterminate';
import LinearBuffer from '@/components/CshareComponents/Content-Visualization/Loading-Progress-Indicator/LinearBuffer';
import LinearLabel from '@/components/CshareComponents/Content-Visualization/Loading-Progress-Indicator/LinearLabel';

function LoadingProgressIndicatorPageContent() {
  return (
    <>
      <PageTitleWrapper>
        <PageHeader title="Loading / Progress Indicator" />
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
          <CircularIndicator />
          <CircularDeterminate />
          <InteractiveIndicator />
          <CircularLabel />
          <LinearIndeterminate />
          <LinearColor />
          <LinearDeterminate />
          <LinearBuffer />
          <LinearLabel />
        </Grid>
      </Grid>
      <Footer />
    </>
  );
}

export default LoadingProgressIndicatorPageContent;
