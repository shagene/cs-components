import Head from 'next/head';

import CshareComponentsLayout from 'src/layouts/CshareComponentsLayout';

import AutocompletePageContent from 'src/content/CshareComponentsPages/autocomplete';

function AutocompletePage() {
  return (
    <>
      <Head>
        <title>Cshare Components - Autocomplete</title>
      </Head>
      <AutocompletePageContent />
    </>
  );
}

AutocompletePage.getLayout = (page) => (
  <CshareComponentsLayout>{page}</CshareComponentsLayout>
);

export default AutocompletePage;
