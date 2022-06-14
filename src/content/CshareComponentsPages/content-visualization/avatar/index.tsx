import { Grid } from '@mui/material';

import PageHeader from 'src/content/CshareHeader/PageHeader';
import Footer from 'src/components/CshareComponents/Footer';
import PageTitleWrapper from 'src/components/PageTitleWrapper';
import ImageAvatar from '@/components/CshareComponents/Content-Visualization/Avatar/ImageAvatar';
import LetterAvatar from '@/components/CshareComponents/Content-Visualization/Avatar/LetterAvatar';
import StringAvatar from '@/components/CshareComponents/Content-Visualization/Avatar/StringAvatar';
import IconAvatar from '@/components/CshareComponents/Content-Visualization/Avatar/IconAvatar';
import VariantAvatar from '@/components/CshareComponents/Content-Visualization/Avatar/VariantAvatar';

function AvatarPageContent() {
  return (
    <>
      <PageTitleWrapper>
        <PageHeader title="Avatar" />
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
          <ImageAvatar />
          <LetterAvatar />
          <StringAvatar />
          <IconAvatar />
          <VariantAvatar />
        </Grid>
      </Grid>
      <Footer />
    </>
  );
}

export default AvatarPageContent;
