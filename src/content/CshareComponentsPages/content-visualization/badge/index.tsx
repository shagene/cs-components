import { Grid } from '@mui/material';

import PageHeader from 'src/content/CshareHeader/PageHeader';
import Footer from 'src/components/CshareComponents/Footer';
import PageTitleWrapper from 'src/components/PageTitleWrapper';
import BasicBadge from '@/components/CshareComponents/Content-Visualization/Badge/BasicBadge';
import ColorBadge from '@/components/CshareComponents/Content-Visualization/Badge/ColorBadge';
import CustomBadge from '@/components/CshareComponents/Content-Visualization/Badge/CustomBadge';
import BadgeVisibility from '@/components/CshareComponents/Content-Visualization/Badge/BadgeVisibility';
import BadgeValue from '@/components/CshareComponents/Content-Visualization/Badge/BadgeValue';

function BadgePageContent() {
  return (
    <>
      <PageTitleWrapper>
        <PageHeader title="Badge" />
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
          <BasicBadge />
          <ColorBadge />
          <CustomBadge />
          <BadgeVisibility />
          <BadgeValue />
        </Grid>
      </Grid>
      <Footer />
    </>
  );
}

export default BadgePageContent;
