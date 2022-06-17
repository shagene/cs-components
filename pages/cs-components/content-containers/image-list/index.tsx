import ImageListPageContent from '@/content/CshareComponentsPages/content-containers/image-list';
import Head from 'next/head';

import CshareComponentsLayout from 'src/layouts/CshareComponentsLayout';

function ImageListPage() {
  return (
    <>
      <Head>
        <title>Cshare Components - Image List</title>
      </Head>
      <ImageListPageContent />
    </>
  );
}

ImageListPage.getLayout = (page) => (
  <CshareComponentsLayout>{page}</CshareComponentsLayout>
);

export default ImageListPage;
