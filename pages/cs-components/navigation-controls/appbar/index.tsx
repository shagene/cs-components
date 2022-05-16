import Head from 'next/head';

import CshareComponentsLayout from 'src/layouts/CshareComponentsLayout';

import AppbarPageContent from '@/content/CshareComponentsPages/navigation-controls/appbar';

function AppbarPage() {
  return (
    <>
      <Head>
        <title>Cshare Components - App bar</title>
      </Head>
      <AppbarPageContent />
    </>
  );
}

AppbarPage.getLayout = (page) => (
  <CshareComponentsLayout>{page}</CshareComponentsLayout>
);

export default AppbarPage;
