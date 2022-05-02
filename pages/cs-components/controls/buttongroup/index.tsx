import Head from 'next/head';

import CshareComponentsLayout from 'src/layouts/CshareComponentsLayout';

import ButtonGroupPageContent from '@/content/CshareComponentsPages/controls/buttongroup';

function ButtonGroupPage() {
  return (
    <>
      <Head>
        <title>Cshare Components - Button Group</title>
      </Head>
      <ButtonGroupPageContent />
    </>
  );
}

ButtonGroupPage.getLayout = (page) => (
  <CshareComponentsLayout>{page}</CshareComponentsLayout>
);

export default ButtonGroupPage;
