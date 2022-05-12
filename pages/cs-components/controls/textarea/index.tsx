import Head from 'next/head';

import CshareComponentsLayout from 'src/layouts/CshareComponentsLayout';

import TextAreaPageContent from '@/content/CshareComponentsPages/controls/textarea';

function TextAreaPage() {
  return (
    <>
      <Head>
        <title>Cshare Components - Text Area</title>
      </Head>
      <TextAreaPageContent />
    </>
  );
}

TextAreaPage.getLayout = (page) => (
  <CshareComponentsLayout>{page}</CshareComponentsLayout>
);

export default TextAreaPage;
