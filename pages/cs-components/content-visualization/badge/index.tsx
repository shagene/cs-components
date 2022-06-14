import BadgePageContent from '@/content/CshareComponentsPages/content-visualization/badge';
import Head from 'next/head';

import CshareComponentsLayout from 'src/layouts/CshareComponentsLayout';

function BadgePage() {
  return (
    <>
      <Head>
        <title>Cshare Components - Badge</title>
      </Head>
      <BadgePageContent />
    </>
  );
}

BadgePage.getLayout = (page) => (
  <CshareComponentsLayout>{page}</CshareComponentsLayout>
);

export default BadgePage;
