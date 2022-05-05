import PaginatorPageContent from '@/content/CshareComponentsPages/controls/paginator';
import Head from 'next/head';
import CshareComponentsLayout from 'src/layouts/CshareComponentsLayout';

function PaginatorPage() {
  return (
    <>
      <Head>
        <title>Cshare Components - Paginator</title>
      </Head>
      <PaginatorPageContent />
    </>
  );
}

PaginatorPage.getLayout = (page) => (
  <CshareComponentsLayout>{page}</CshareComponentsLayout>
);

export default PaginatorPage;
