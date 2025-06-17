import { NextPage } from 'next';

import { BackSection } from '@/components/molecules/back-section';
import {
  ApprovalRequestFilter,
  ApprovalRequestList,
} from '@/modules/task/components/high-position/approval-request';

const Page: NextPage = () => {
  return (
    <section className="overflow-x-hidden overflow-y-auto h-[100dvh]">
      <BackSection label="审批中请求" />
      <div>
        <ApprovalRequestFilter />
        <ApprovalRequestList />
      </div>
    </section>
  );
};

export default Page;
