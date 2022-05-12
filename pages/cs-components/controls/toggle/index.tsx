import Head from 'next/head';

import CshareComponentsLayout from 'src/layouts/CshareComponentsLayout';

import TogglePageContent from '@/content/CshareComponentsPages/controls/toggle';

function TogglePage() {
  return (
    <>
      <Head>
        <title>Cshare Components - Toggle</title>
      </Head>
      <TogglePageContent />
    </>
  );
}

TogglePage.getLayout = (page) => (
  <CshareComponentsLayout>{page}</CshareComponentsLayout>
);

export default TogglePage;
