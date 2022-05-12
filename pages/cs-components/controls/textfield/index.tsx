import Head from 'next/head';

import CshareComponentsLayout from 'src/layouts/CshareComponentsLayout';

import TextFieldPageContent from '@/content/CshareComponentsPages/controls/textfield';

function TextFieldPage() {
  return (
    <>
      <Head>
        <title>Cshare Components - Text Field</title>
      </Head>
      <TextFieldPageContent />
    </>
  );
}

TextFieldPage.getLayout = (page) => (
  <CshareComponentsLayout>{page}</CshareComponentsLayout>
);

export default TextFieldPage;
