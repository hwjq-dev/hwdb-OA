import { NextPage } from 'next';

import { ScreenContainer } from '@/components/molecules/screen-container';
import { MyWaitApproval } from '@/modules/human-resouce/components';

const Page: NextPage = () => {
  return (
    <ScreenContainer headerLabel="待我审批" containerClassName="h-[90dvh]" showBack>
      <MyWaitApproval />
      {/* <div className="size-full flex justify-center items-center">
        <EmptyState title="空白状态" subtitle="没有待审批记录" />
      </div> */}
    </ScreenContainer>
  );
};

export default Page;
