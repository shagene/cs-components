import Head from 'next/head';
import CshareComponentsLayout from 'src/layouts/CshareComponentsLayout';
import FabPageContent from '@/content/CshareComponentsPages/controls/floatingactionbutton';

function FabPage() {
  return (
    <>
      <Head>
        <title>Cshare Components - Floating Action Button (FAB)</title>
      </Head>
      <FabPageContent />
    </>
  );
}

FabPage.getLayout = (page) => (
  <CshareComponentsLayout>{page}</CshareComponentsLayout>
);

export default FabPage;
