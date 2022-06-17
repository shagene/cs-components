import TooltipPageContent from '@/content/CshareComponentsPages/content-containers/tooltip';
import Head from 'next/head';

import CshareComponentsLayout from 'src/layouts/CshareComponentsLayout';

function TooltipPage() {
  return (
    <>
      <Head>
        <title>Cshare Components - Skeleton Screen</title>
      </Head>
      <TooltipPageContent />
    </>
  );
}

TooltipPage.getLayout = (page) => (
  <CshareComponentsLayout>{page}</CshareComponentsLayout>
);

export default TooltipPage;
