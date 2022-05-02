import Head from 'next/head';

import CshareComponentsLayout from 'src/layouts/CshareComponentsLayout';

import DateTimePickerContent from '@/content/CshareComponentsPages/controls/date-time-picker';

function DateTimePickerPage() {
  return (
    <>
      <Head>
        <title>Cshare Components - Date Time Picker</title>
      </Head>
      <DateTimePickerContent />
    </>
  );
}

DateTimePickerPage.getLayout = (page) => (
  <CshareComponentsLayout>{page}</CshareComponentsLayout>
);

export default DateTimePickerPage;
