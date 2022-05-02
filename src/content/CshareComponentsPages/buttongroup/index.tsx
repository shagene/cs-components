import { Grid } from '@mui/material';

import PageHeader from 'src/content/CshareHeader/PageHeader';
import Footer from 'src/components/CshareComponents/Footer';
import PageTitleWrapper from 'src/components/PageTitleWrapper';
import BasicButtonGroup from '@/components/CshareComponents/ButtonGroup/BasicButtonGroup';
import ButtonVariant from '@/components/CshareComponents/ButtonGroup/ButtonVariant';
import SizeAndColor from '@/components/CshareComponents/ButtonGroup/SizeAndColor';
import SplitButton from '@/components/CshareComponents/ButtonGroup/SplitButton';
import VerticleGroup from '@/components/CshareComponents/ButtonGroup/VerticleGroup';

function ButtonGroupPageContent() {
  return (
    <>
      <PageTitleWrapper>
        <PageHeader title="Button Group" />
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

export default ButtonGroupPageContent;
