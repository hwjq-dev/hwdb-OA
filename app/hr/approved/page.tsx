import { NextPage } from 'next';

import { ScreenContainer } from '@/components/molecules/screen-container';
import { MyApproval } from '@/modules/human-resouce/components';

const Page: NextPage = () => {
  return (
    <ScreenContainer headerLabel="我已审批" containerClassName="h-[90dvh]" showBack>
      <MyApproval />
      {/* <div className="size-full flex justify-center items-center">
        <EmptyState title="空白状态" subtitle="没有已审批记录" />
      </div> */}
    </ScreenContainer>
  );
};

export default Page;
