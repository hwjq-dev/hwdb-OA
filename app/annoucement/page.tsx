'use client';

import { NextPage } from 'next';

import { ScreenContainer } from '@/components/molecules/screen-container';
import { AnnoucementTab } from '@/modules/annoucement/components';

const Page: NextPage = () => {
  return (
    <ScreenContainer headerLabel="发布通知" showBack>
      <AnnoucementTab />
    </ScreenContainer>
  );
};

export default Page;
