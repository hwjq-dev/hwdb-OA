import { NextPage } from 'next';

import { BackSection } from '@/components/molecules/back-section';
import { ProfilePersonalInformation } from '@/modules/profile/components';

const Page: NextPage = () => {
  return (
    <section className="overflow-hidden h-[100dvh]">
      <BackSection label="个人资料" />
      <ProfilePersonalInformation />
      {/* <EmptyState title="暂时空白" subtitle="在实施界面" /> */}
    </section>
  );
};

export default Page;
