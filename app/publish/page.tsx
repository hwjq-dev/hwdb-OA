'use client';

import { NextPage } from 'next';

import { ScreenContainer } from '@/components/molecules/screen-container';
import { PublishTab } from '@/modules/publish/components';

const Page: NextPage = () => {
  return (
    <ScreenContainer headerLabel="发布通知" showBack>
      <PublishTab />
    </ScreenContainer>
  );
};

export default Page;
