import { NextPage } from 'next';

import { ScreenContainer } from '@/components/molecules/screen-container';

const Page: NextPage = () => {
  return (
    <ScreenContainer
      headerLabel="个人详情"
      containerClassName="h-[90dvh] overflow-y-auto scrollbar-none"
      showBack
    >
      Hello Detail Page
    </ScreenContainer>
  );
};

export default Page;
