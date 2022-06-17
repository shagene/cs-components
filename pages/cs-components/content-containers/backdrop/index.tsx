import BackdropPageContent from '@/content/CshareComponentsPages/content-containers/backdrop';
import Head from 'next/head';

import CshareComponentsLayout from 'src/layouts/CshareComponentsLayout';

function BackdropPage() {
  return (
    <>
      <Head>
        <title>Cshare Components - Backdrop</title>
      </Head>
      <BackdropPageContent />
    </>
  );
}

BackdropPage.getLayout = (page) => (
  <CshareComponentsLayout>{page}</CshareComponentsLayout>
);

export default BackdropPage;
