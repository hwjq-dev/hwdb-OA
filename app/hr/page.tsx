import { NextPage } from 'next';

import { NavMenu } from '@/components/nav-menu';
import HrMainBlocksManager from '@/modules/dashboard/components/main-blocks';

const Page: NextPage = () => {
  return (
    <>
      <div className="relative overflow-y-auto h-[95dvh] pb-8">
        <HrMainBlocksManager />
      </div>
      <NavMenu />
    </>
  );
};

export default Page;
