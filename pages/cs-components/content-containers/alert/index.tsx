import AlertPageContent from '@/content/CshareComponentsPages/content-containers/alert';
import Head from 'next/head';

import CshareComponentsLayout from 'src/layouts/CshareComponentsLayout';

function AlertPage() {
  return (
    <>
      <Head>
        <title>Cshare Components - Alert</title>
      </Head>
      <AlertPageContent />
    </>
  );
}

AlertPage.getLayout = (page) => (
  <CshareComponentsLayout>{page}</CshareComponentsLayout>
);

export default AlertPage;
