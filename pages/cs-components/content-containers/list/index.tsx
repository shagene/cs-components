import ListPageContent from '@/content/CshareComponentsPages/content-containers/list';
import Head from 'next/head';

import CshareComponentsLayout from 'src/layouts/CshareComponentsLayout';

function ListPage() {
  return (
    <>
      <Head>
        <title>Cshare Components - List</title>
      </Head>
      <ListPageContent />
    </>
  );
}

ListPage.getLayout = (page) => (
  <CshareComponentsLayout>{page}</CshareComponentsLayout>
);

export default ListPage;
