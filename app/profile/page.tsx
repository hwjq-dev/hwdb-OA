import { NextPage } from 'next';

import { ScreenContainer } from '@/components/molecules/screen-container';
import { ProfileAvatarSection } from '@/modules/profile/components/profile-avatar-section';
import { ProfileMenuItem } from '@/modules/profile/components/profile-menu-item';

const Page: NextPage = () => {
  return (
    <ScreenContainer headerLabel="我的">
      <ProfileAvatarSection />
      <ProfileMenuItem />
    </ScreenContainer>
  );
};

export default Page;
