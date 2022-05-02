import Head from 'next/head';

import CshareComponentsLayout from 'src/layouts/CshareComponentsLayout';

import ToggleButtonPageContent from '@/content/CshareComponentsPages/controls/togglebutton';

function ToggleButtonPage() {
  return (
    <>
      <Head>
        <title>Cshare Components - ToggleButton</title>
      </Head>
      <ToggleButtonPageContent />
    </>
  );
}

ToggleButtonPage.getLayout = (page) => (
  <CshareComponentsLayout>{page}</CshareComponentsLayout>
);

export default ToggleButtonPage;
