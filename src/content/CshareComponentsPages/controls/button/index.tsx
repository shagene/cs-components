import { Grid } from '@mui/material';

import PageHeader from 'src/content/CshareHeader/PageHeader';
import Footer from 'src/components/CshareComponents/Footer';
import PageTitleWrapper from 'src/components/PageTitleWrapper';

import ContainedButtons from '@/components/CshareComponents/Controls/Button/ContainedButtons';
import OutlinedButtons from '@/components/CshareComponents/Controls/Button/OutlinedButtons';
import TextButtons from '@/components/CshareComponents/Controls/Button/TextButtons';
import IconButtons from '@/components/CshareComponents/Controls/Button/IconButtons';
import LoadingButtons from '@/components/CshareComponents/Controls/Button/LoadingButtons';

function ButtonPageContent() {
  return (
    <>
      <PageTitleWrapper>
        <PageHeader title="Buttons" />
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
          <ContainedButtons />
          <OutlinedButtons />
          <TextButtons />
          <IconButtons />
          <LoadingButtons />
        </Grid>
      </Grid>
      <Footer />
    </>
  );
}

export default ButtonPageContent;
