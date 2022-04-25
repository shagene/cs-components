import Head from 'next/head';

import CshareComponentsLayout from 'src/layouts/CshareComponentsLayout';

import SlidersPageContent from 'src/content/CshareComponentsPages/sliders';

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
  //   <Authenticated>
  <CshareComponentsLayout>{page}</CshareComponentsLayout>
  //   </Authenticated>
);

export default SlidersPage;
