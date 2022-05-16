import Head from 'next/head';

import CshareComponentsLayout from 'src/layouts/CshareComponentsLayout';

import NavigationDrawerPageContent from '@/content/CshareComponentsPages/navigation-controls/navigationdrawer';

function NavigationDrawerPage() {
  return (
    <>
      <Head>
        <title>Cshare Components - Navigation Drawer</title>
      </Head>
      <NavigationDrawerPageContent />
    </>
  );
}

NavigationDrawerPage.getLayout = (page) => (
  <CshareComponentsLayout>{page}</CshareComponentsLayout>
);

export default NavigationDrawerPage;
