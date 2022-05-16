import Head from 'next/head';

import CshareComponentsLayout from 'src/layouts/CshareComponentsLayout';

import SectionIndexPageContent from '@/content/CshareComponentsPages/navigation-controls/sectionindex';

function SectionIndexPage() {
  return (
    <>
      <Head>
        <title>Cshare Components - Navigation Rail</title>
      </Head>
      <SectionIndexPageContent />
    </>
  );
}

SectionIndexPage.getLayout = (page) => (
  <CshareComponentsLayout>{page}</CshareComponentsLayout>
);

export default SectionIndexPage;
