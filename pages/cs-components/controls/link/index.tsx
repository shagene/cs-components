import Head from 'next/head';
import CshareComponentsLayout from 'src/layouts/CshareComponentsLayout';
import LinkPageContent from '@/content/CshareComponentsPages/controls/link';

function LinkPage() {
  return (
    <>
      <Head>
        <title>Cshare Components - Link</title>
      </Head>
      <LinkPageContent />
    </>
  );
}

LinkPage.getLayout = (page) => (
  <CshareComponentsLayout>{page}</CshareComponentsLayout>
);

export default LinkPage;
