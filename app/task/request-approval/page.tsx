import { NextPage } from 'next';

import { BackSection } from '@/components/molecules/back-section';
import { RequestApprovalScreen } from '@/modules/task-management/screens/request-approval';

const Page: NextPage = () => {
  return (
    <section className="overflow-x-hidden overflow-y-auto h-[100dvh]">
      <BackSection label="审批中请求" />
      <RequestApprovalScreen />
    </section>
  );
};

export default Page;
