import { Grid } from '@mui/material';
import PageHeader from 'src/content/CshareHeader/PageHeader';
import Footer from 'src/components/CshareComponents/Footer';
import PageTitleWrapper from 'src/components/PageTitleWrapper';
import StandardImageList from '@/components/CshareComponents/Content-Containers/ImageList/StandardImageList';
import QuiltedImageList from '@/components/CshareComponents/Content-Containers/ImageList/QuiltedImageList';
import WovenImageList from '@/components/CshareComponents/Content-Containers/ImageList/WovenImageList';
import MasonryImageList from '@/components/CshareComponents/Content-Containers/ImageList/MasonryImageList';
import ImageListTitleBar from '@/components/CshareComponents/Content-Containers/ImageList/ImageListTitleBar';

function ImageListPageContent() {
  return (
    <>
      <PageTitleWrapper>
        <PageHeader title="Image List" />
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
          <StandardImageList />
          <QuiltedImageList />
          <WovenImageList />
          <MasonryImageList />
          <ImageListTitleBar />
        </Grid>
      </Grid>
      <Footer />
    </>
  );
}

export default ImageListPageContent;
