import Head from 'next/head';

import CshareComponentsLayout from 'src/layouts/CshareComponentsLayout';

import MenuPageContent from '@/content/CshareComponentsPages/navigation-controls/menu';

function MenuPage() {
  return (
    <>
      <Head>
        <title>Cshare Components - Menu</title>
      </Head>
      <MenuPageContent />
    </>
  );
}

MenuPage.getLayout = (page) => (
  <CshareComponentsLayout>{page}</CshareComponentsLayout>
);

export default MenuPage;
