import { NextPage } from 'next';

import { HrApplicationBlocksManager } from '@/modules/human-resouce/components';

interface PageProps {
  searchParams: Promise<{ type: ApplicationType }>;
}

const Page: NextPage<PageProps> = async ({ searchParams }) => {
  const type = (await searchParams).type;
  console.log(type);

  return (
    <div>
      <HrApplicationBlocksManager />
    </div>
  );
};

export default Page;
