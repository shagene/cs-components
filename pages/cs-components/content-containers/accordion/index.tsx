import AccordionPageContent from '@/content/CshareComponentsPages/content-containers/accordion';
import Head from 'next/head';

import CshareComponentsLayout from 'src/layouts/CshareComponentsLayout';

function AccordionPage() {
  return (
    <>
      <Head>
        <title>Cshare Components - Accordion</title>
      </Head>
      <AccordionPageContent />
    </>
  );
}

AccordionPage.getLayout = (page) => (
  <CshareComponentsLayout>{page}</CshareComponentsLayout>
);

export default AccordionPage;
