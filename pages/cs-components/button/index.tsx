import Head from 'next/head';

import CshareComponentsLayout from 'src/layouts/CshareComponentsLayout';

import ButtonPageContent from 'src/content/CshareComponentsPages/button';

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
  //   <Authenticated>
  <CshareComponentsLayout>{page}</CshareComponentsLayout>
  //   </Authenticated>
);

export default ButtonPage;
