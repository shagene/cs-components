import TablePageContent from '@/content/CshareComponentsPages/content-containers/table';
import Head from 'next/head';

import CshareComponentsLayout from 'src/layouts/CshareComponentsLayout';

function TablePage() {
  return (
    <>
      <Head>
        <title>Cshare Components - Skeleton Screen</title>
      </Head>
      <TablePageContent />
    </>
  );
}

TablePage.getLayout = (page) => (
  <CshareComponentsLayout>{page}</CshareComponentsLayout>
);

export default TablePage;
