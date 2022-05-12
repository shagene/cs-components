import Head from 'next/head';

import CshareComponentsLayout from 'src/layouts/CshareComponentsLayout';

import SlidersPageContent from '@/content/CshareComponentsPages/controls/slider';

function SlidersPage() {
  return (
    <>
      <Head>
        <title>Cshare Components - Sliders</title>
      </Head>
      <SlidersPageContent />
    </>
  );
}

SlidersPage.getLayout = (page) => (
  <CshareComponentsLayout>{page}</CshareComponentsLayout>
);

export default SlidersPage;
