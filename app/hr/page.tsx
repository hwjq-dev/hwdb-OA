import HrMainBlocksManager from '@/modules/hr-management/components/main-blocks';
import { NextPage } from 'next';

const Page: NextPage = () => {
  return (
    <div className="relative overflow-y-auto h-[95dvh] pb-8">
      <HrMainBlocksManager />
    </div>
  );
};

export default Page;
