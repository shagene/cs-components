import BannerPageContent from '@/content/CshareComponentsPages/content-containers/banner';
import Head from 'next/head';

import CshareComponentsLayout from 'src/layouts/CshareComponentsLayout';

function BannerPage() {
  return (
    <>
      <Head>
        <title>Cshare Components - Backdrop</title>
      </Head>
      <BannerPageContent />
    </>
  );
}

BannerPage.getLayout = (page) => (
  <CshareComponentsLayout>{page}</CshareComponentsLayout>
);

export default BannerPage;
