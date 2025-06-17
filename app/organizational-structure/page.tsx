import { NextPage } from 'next';

import { ScreenContainer } from '@/components/molecules/screen-container';
import {
  OrganizationalStructureFilter,
  OrganizationalStructureStats,
  OrganizationStructureList,
} from '@/modules/organizational-structure/components';

const Page: NextPage = () => {
  return (
    <ScreenContainer
      headerLabel="组织架构"
      containerClassName="h-[90dvh] overflow-y-auto scrollbar-none"
      showBack
    >
      <OrganizationalStructureStats />
      <OrganizationalStructureFilter />
      <OrganizationStructureList />
    </ScreenContainer>
  );
};

export default Page;
