import SkeletonScreenPageContent from '@/content/CshareComponentsPages/content-containers/skeleton-screen';
import Head from 'next/head';

import CshareComponentsLayout from 'src/layouts/CshareComponentsLayout';

function SkeletonScreenPage() {
  return (
    <>
      <Head>
        <title>Cshare Components - Skeleton Screen</title>
      </Head>
      <SkeletonScreenPageContent />
    </>
  );
}

SkeletonScreenPage.getLayout = (page) => (
  <CshareComponentsLayout>{page}</CshareComponentsLayout>
);

export default SkeletonScreenPage;
