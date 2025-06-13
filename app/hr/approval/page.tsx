import { NextPage } from 'next';

import HrApprovalBlocksManager from '@/modules/hr-management/components/approval-blocks';

const Page: NextPage = () => {
  return (
    <div>
      <HrApprovalBlocksManager />
    </div>
  );
};

export default Page;
