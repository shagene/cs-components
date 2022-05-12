import Head from 'next/head';

import CshareComponentsLayout from 'src/layouts/CshareComponentsLayout';

import ButtonPageContent from '@/content/CshareComponentsPages/controls/button';

function ButtonPage() {
  return (
    <>
      <Head>
        <title>Cshare Components - Button</title>
      </Head>
      <ButtonPageContent />
    </>
  );
}

ButtonPage.getLayout = (page) => (
  <CshareComponentsLayout>{page}</CshareComponentsLayout>
);

export default ButtonPage;
