import Head from 'next/head';

import CshareComponentsLayout from 'src/layouts/CshareComponentsLayout';

import TabsPageContent from '@/content/CshareComponentsPages/navigation-controls/tabs';

function TabsPage() {
  return (
    <>
      <Head>
        <title>Cshare Components - Navigation Rail</title>
      </Head>
      <TabsPageContent />
    </>
  );
}

TabsPage.getLayout = (page) => (
  <CshareComponentsLayout>{page}</CshareComponentsLayout>
);

export default TabsPage;
