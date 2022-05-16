import Head from 'next/head';

import CshareComponentsLayout from 'src/layouts/CshareComponentsLayout';

import NavigationRailPageContent from '@/content/CshareComponentsPages/navigation-controls/navigationrail';

function NavigationRailPage() {
  return (
    <>
      <Head>
        <title>Cshare Components - Navigation Rail</title>
      </Head>
      <NavigationRailPageContent />
    </>
  );
}

NavigationRailPage.getLayout = (page) => (
  <CshareComponentsLayout>{page}</CshareComponentsLayout>
);

export default NavigationRailPage;
