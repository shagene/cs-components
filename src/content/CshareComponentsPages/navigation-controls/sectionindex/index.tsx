import { Grid } from '@mui/material';
import PageHeader from 'src/content/CshareHeader/PageHeader';
import Footer from 'src/components/CshareComponents/Footer';
import PageTitleWrapper from 'src/components/PageTitleWrapper';
import React from 'react';
import SectionIndex from '@/components/CshareComponents/Navigation-Controls/Section-Index/sectionindex';

function SectionIndexPageContent() {
  return (
    <>
      <PageTitleWrapper>
        <PageHeader title="Section Index" />
      </PageTitleWrapper>

      <SectionIndex />
      <Footer />
    </>
  );
}

export default SectionIndexPageContent;
