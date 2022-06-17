import CarouselPageContent from '@/content/CshareComponentsPages/content-containers/carousel';
import Head from 'next/head';

import CshareComponentsLayout from 'src/layouts/CshareComponentsLayout';

function CarouselPage() {
  return (
    <>
      <Head>
        <title>Cshare Components - Carousel</title>
      </Head>
      <CarouselPageContent />
    </>
  );
}

CarouselPage.getLayout = (page) => (
  <CshareComponentsLayout>{page}</CshareComponentsLayout>
);

export default CarouselPage;
