import { NextPage } from 'next';

import { ScreenContainer } from '@/components/molecules/screen-container';
import { HrApprovalBlocksManager } from '@/modules/human-resouce/components';

interface PageProps {
  searchParams: Promise<{ type: ApprovalType }>;
}

const Page: NextPage<PageProps> = async ({ searchParams }) => {
  const type = (await searchParams).type;
  return (
    <ScreenContainer headerLabel={type} containerClassName="h-[90dvh]" showBack>
      <HrApprovalBlocksManager type={type} />
    </ScreenContainer>
  );
};

export default Page;
