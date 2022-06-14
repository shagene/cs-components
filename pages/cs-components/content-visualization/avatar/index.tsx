import AvatarPageContent from '@/content/CshareComponentsPages/content-visualization/avatar';
import Head from 'next/head';

import CshareComponentsLayout from 'src/layouts/CshareComponentsLayout';

function AvatarPage() {
  return (
    <>
      <Head>
        <title>Cshare Components - Avatar</title>
      </Head>
      <AvatarPageContent />
    </>
  );
}

AvatarPage.getLayout = (page) => (
  <CshareComponentsLayout>{page}</CshareComponentsLayout>
);

export default AvatarPage;
