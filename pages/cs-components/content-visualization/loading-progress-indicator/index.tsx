import LoadingProgressIndicatorPageContent from '@/content/CshareComponentsPages/content-visualization/loading-progress-indicator';
import Head from 'next/head';

import CshareComponentsLayout from 'src/layouts/CshareComponentsLayout';

function LoadingProgressIndicatorPage() {
  return (
    <>
      <Head>
        <title>Cshare Components - Loading / Progress Indicator</title>
      </Head>
      <LoadingProgressIndicatorPageContent />
    </>
  );
}

LoadingProgressIndicatorPage.getLayout = (page) => (
  <CshareComponentsLayout>{page}</CshareComponentsLayout>
);

export default LoadingProgressIndicatorPage;
