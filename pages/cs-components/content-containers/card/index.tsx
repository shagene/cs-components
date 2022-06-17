import CardPageContent from '@/content/CshareComponentsPages/content-containers/card';
import Head from 'next/head';

import CshareComponentsLayout from 'src/layouts/CshareComponentsLayout';

function CardPage() {
  return (
    <>
      <Head>
        <title>Cshare Components - Card</title>
      </Head>
      <CardPageContent />
    </>
  );
}

CardPage.getLayout = (page) => (
  <CshareComponentsLayout>{page}</CshareComponentsLayout>
);

export default CardPage;
