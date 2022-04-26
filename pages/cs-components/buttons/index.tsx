import Head from 'next/head';

import CshareComponentsLayout from 'src/layouts/CshareComponentsLayout';

import ButtonsPageContent from 'src/content/CshareComponentsPages/buttons';

function ButtonsPage() {
  return (
    <>
      <Head>
        <title>Cshare Components - Buttons</title>
      </Head>
      <ButtonsPageContent />
    </>
  );
}

ButtonsPage.getLayout = (page) => (
  //   <Authenticated>
  <CshareComponentsLayout>{page}</CshareComponentsLayout>
  //   </Authenticated>
);

export default ButtonsPage;
