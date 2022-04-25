// import ContainedButtons from '@/components/CshareComponents/Buttons/ContainedButtons';
// import IconButtons from '@/components/CshareComponents/Buttons/IconButtons';
// import LoadingButtons from '@/components/CshareComponents/Buttons/LoadingButtons';
// import OutlinedButtons from '@/components/CshareComponents/Buttons/OutlinedButtons';
// import TextButtons from '@/components/CshareComponents/Buttons/TextButtons';

// import Head from 'next/head';

// export default function CshareComponentsButtons() {
//   return (
//     <>
//       <Head>
//         <title>Cshare Components - Buttons</title>
//         <meta name="description" content="Cshare Components - Buttons" />
//         <link rel="icon" href="/favicon.ico" />
//       </Head>

//       <ContainedButtons />
//       <OutlinedButtons />
//       <TextButtons />
//       <IconButtons />
//       <LoadingButtons />
//     </>
//   );
// }

import Head from 'next/head';

import CshareComponentsLayout from 'src/layouts/CshareComponentsLayout';

import ButtonsPageContent from 'src/content/CshareComponentsPages/buttons';

function ButtonsPage() {
  return (
    <>
      <Head>
        <title>Cshare Components - Buttons</title>
      </Head>
      <ButtonsPageContent />
    </>
  );
}

ButtonsPage.getLayout = (page) => (
  //   <Authenticated>
  <CshareComponentsLayout>{page}</CshareComponentsLayout>
  //   </Authenticated>
);

export default ButtonsPage;
