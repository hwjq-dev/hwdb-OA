import { NextPage } from 'next';

import { ScreenContainer } from '@/components/molecules/screen-container';
import { MyApprovalDetailBlocksManager } from '@/modules/human-resouce/components';

interface PageProps {
  searchParams: Promise<{ type: ApprovalType }>;
}

const Page: NextPage<PageProps> = async ({ searchParams }) => {
  const type = (await searchParams).type;
  return (
    <ScreenContainer
      headerLabel={`${type}审批详情`}
      containerClassName="h-[90dvh] overflow-y-auto scrollbar-none"
      showBack
    >
      <MyApprovalDetailBlocksManager type={`审批${type}` as ApprovalType} />
    </ScreenContainer>
  );
};

export default Page;
