import Head from 'next/head';

import CshareComponentsLayout from 'src/layouts/CshareComponentsLayout';

import ChipPageContent from '@/content/CshareComponentsPages/controls/chip';

function ChipPage() {
  return (
    <>
      <Head>
        <title>Cshare Components - CheckBox</title>
      </Head>
      <ChipPageContent />
    </>
  );
}

ChipPage.getLayout = (page) => (
  <CshareComponentsLayout>{page}</CshareComponentsLayout>
);

export default ChipPage;
