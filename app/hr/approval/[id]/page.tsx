import { NextPage } from 'next';

import { ScreenContainer } from '@/components/molecules/screen-container';
import { ApprovalDetailBlocksManager } from '@/modules/human-resouce/components';

interface PageProps {
  searchParams: Promise<{ type: ApprovalType }>;
}

const Page: NextPage<PageProps> = async ({ searchParams }) => {
  const type = (await searchParams).type;
  return (
    <ScreenContainer
      headerLabel={`${type}详情`}
      containerClassName="h-[90dvh] overflow-y-auto scrollbar-none"
      showBack
    >
      <ApprovalDetailBlocksManager type={`审批${type}` as ApprovalType} />
    </ScreenContainer>
  );
};

export default Page;
