import { Grid } from '@mui/material';

import PageHeader from 'src/content/CshareHeader/PageHeader';
import Footer from 'src/components/CshareComponents/Footer';
import PageTitleWrapper from 'src/components/PageTitleWrapper';
import BasicButtonGroup from '@/components/CshareComponents/Controls/ButtonGroup/BasicButtonGroup';
import ButtonVariant from '@/components/CshareComponents/Controls/ButtonGroup/ButtonVariant';
import SizeAndColor from '@/components/CshareComponents/Controls/ButtonGroup/SizeAndColor';
import SplitButton from '@/components/CshareComponents/Controls/ButtonGroup/SplitButton';
import VerticleGroup from '@/components/CshareComponents/Controls/ButtonGroup/VerticleGroup';

function ToggleButtonPageContent() {
  return (
    <>
      <PageTitleWrapper>
        <PageHeader title="Toggle Button" />
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
          <BasicButtonGroup />
          <ButtonVariant />
          <SizeAndColor />
          <VerticleGroup />
          <SplitButton />
        </Grid>
      </Grid>
      <Footer />
    </>
  );
}

export default ToggleButtonPageContent;
