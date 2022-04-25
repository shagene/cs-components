import { Grid } from '@mui/material';

import PageHeader from 'src/content/CshareHeader/PageHeader';
import Footer from 'src/components/CshareComponents/Footer';
import PageTitleWrapper from 'src/components/PageTitleWrapper';

import ContainedButtons from '@/components/CshareComponents/Buttons/ContainedButtons';
import OutlinedButtons from '@/components/CshareComponents/Buttons/OutlinedButtons';
import TextButtons from '@/components/CshareComponents/Buttons/TextButtons';
import IconButtons from '@/components/CshareComponents/Buttons/IconButtons';
import LoadingButtons from '@/components/CshareComponents/Buttons/LoadingButtons';

function ButtonsPageContent() {
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

export default ButtonsPageContent;
