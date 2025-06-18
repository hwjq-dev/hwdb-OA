import { NextPage } from 'next';

import { ScreenContainer } from '@/components/molecules/screen-container';
import { HrApplicationBlocksManager } from '@/modules/human-resouce/components';

interface PageProps {
  searchParams: Promise<{ type: ApplicationType }>;
}

const Page: NextPage<PageProps> = async ({ searchParams }) => {
  const type = (await searchParams).type;

  return (
    <ScreenContainer
      headerLabel={type}
      containerClassName="h-[90dvh] overflow-y-auto scrollbar-none"
      showBack
    >
      <HrApplicationBlocksManager type={type} />
    </ScreenContainer>
  );
};

export default Page;
