import Head from 'next/head';

import CshareComponentsLayout from 'src/layouts/CshareComponentsLayout';

import RadioButtonPageContent from '@/content/CshareComponentsPages/controls/radiobutton';

function RadioButtonPage() {
  return (
    <>
      <Head>
        <title>Cshare Components - Radio Button</title>
      </Head>
      <RadioButtonPageContent />
    </>
  );
}

RadioButtonPage.getLayout = (page) => (
  <CshareComponentsLayout>{page}</CshareComponentsLayout>
);

export default RadioButtonPage;
