import Head from 'next/head';

import CshareComponentsLayout from 'src/layouts/CshareComponentsLayout';

import SearchPageContent from '@/content/CshareComponentsPages/controls/search';

function SearchPage() {
  return (
    <>
      <Head>
        <title>Cshare Components - Search</title>
      </Head>
      <SearchPageContent />
    </>
  );
}

SearchPage.getLayout = (page) => (
  <CshareComponentsLayout>{page}</CshareComponentsLayout>
);

export default SearchPage;
