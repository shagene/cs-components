import Head from 'next/head';

import CshareComponentsLayout from 'src/layouts/CshareComponentsLayout';

import CheckboxPageContent from '@/content/CshareComponentsPages/controls/checkbox';

function CheckboxPage() {
  return (
    <>
      <Head>
        <title>Cshare Components - CheckBox</title>
      </Head>
      <CheckboxPageContent />
    </>
  );
}

CheckboxPage.getLayout = (page) => (
  <CshareComponentsLayout>{page}</CshareComponentsLayout>
);

export default CheckboxPage;
