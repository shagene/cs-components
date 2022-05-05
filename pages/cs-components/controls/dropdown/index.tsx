import Head from 'next/head';
import CshareComponentsLayout from 'src/layouts/CshareComponentsLayout';
import DropdwonPageContent from '@/content/CshareComponentsPages/controls/dropdown';

function DropdownPage() {
  return (
    <>
      <Head>
        <title>Cshare Components - Dropdown / Select</title>
      </Head>
      <DropdwonPageContent />
    </>
  );
}

DropdownPage.getLayout = (page) => (
  <CshareComponentsLayout>{page}</CshareComponentsLayout>
);

export default DropdownPage;
