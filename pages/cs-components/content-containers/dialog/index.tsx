import DialogPageContent from '@/content/CshareComponentsPages/content-containers/dialog';
import Head from 'next/head';

import CshareComponentsLayout from 'src/layouts/CshareComponentsLayout';

function DialogPage() {
  return (
    <>
      <Head>
        <title>Cshare Components - Dialog</title>
      </Head>
      <DialogPageContent />
    </>
  );
}

DialogPage.getLayout = (page) => (
  <CshareComponentsLayout>{page}</CshareComponentsLayout>
);

export default DialogPage;
