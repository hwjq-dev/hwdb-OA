import { NextPage } from 'next';

import { ScreenContainer } from '@/components/molecules/screen-container';
import { StructureFilter, StructureList, StructureStats } from '@/modules/structure/components';

const Page: NextPage = () => {
  return (
    <ScreenContainer
      headerLabel="组织架构"
      containerClassName="h-[90dvh] overflow-y-auto scrollbar-none"
      showBack
    >
      <StructureStats />
      <StructureFilter />
      <StructureList />
    </ScreenContainer>
  );
};

export default Page;
