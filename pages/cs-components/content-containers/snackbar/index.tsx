import SnackbarPageContent from '@/content/CshareComponentsPages/content-containers/snackbar';
import Head from 'next/head';

import CshareComponentsLayout from 'src/layouts/CshareComponentsLayout';

function SnackbarPage() {
  return (
    <>
      <Head>
        <title>Cshare Components - Snackbar</title>
      </Head>
      <SnackbarPageContent />
    </>
  );
}

SnackbarPage.getLayout = (page) => (
  <CshareComponentsLayout>{page}</CshareComponentsLayout>
);

export default SnackbarPage;
