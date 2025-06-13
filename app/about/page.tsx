import { NextPage } from 'next';

import { ScreenContainer } from '@/components/molecules/screen-container';
import { AboutMenuItem } from '@/modules/about/components/about-menu-item';
import { AvatarSection } from '@/modules/about/components/avatar-section';

const Page: NextPage = () => {
  return (
    <ScreenContainer headerLabel="我的">
      <AvatarSection />
      <AboutMenuItem />
    </ScreenContainer>
  );
};

export default Page;
