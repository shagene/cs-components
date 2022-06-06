import StepperPageContent from '@/content/CshareComponentsPages/navigation-controls/stepper';
import Head from 'next/head';

import CshareComponentsLayout from 'src/layouts/CshareComponentsLayout';

function StepperPage() {
  return (
    <>
      <Head>
        <title>Cshare Components - Stepper / Wizard</title>
      </Head>
      <StepperPageContent />
    </>
  );
}

StepperPage.getLayout = (page) => (
  <CshareComponentsLayout>{page}</CshareComponentsLayout>
);

export default StepperPage;
