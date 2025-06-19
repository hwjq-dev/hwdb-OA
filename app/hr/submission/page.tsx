import { NextPage } from 'next';

import { ScreenContainer } from '@/components/molecules/screen-container';
import { MySubmission } from '@/modules/human-resouce/components';

const Page: NextPage = () => {
  return (
    <ScreenContainer headerLabel="我已发起" containerClassName="h-[90dvh]" showBack>
      <MySubmission />
      {/* <div className="size-full flex justify-center items-center">
        <EmptyState title="空白状态" subtitle="没有发起记录" />
      </div> */}
    </ScreenContainer>
  );
};

export default Page;
