import { NextPage } from 'next';

import { HrHeaderSection } from '@/modules/hr-management/components/hr-header-section';

const Page: NextPage = async () => {
  return (
    <div>
      <HrHeaderSection />
    </div>
  );
};

export default Page;
