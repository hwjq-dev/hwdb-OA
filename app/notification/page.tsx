import { NextPage } from 'next';

import { ScreenContainer } from '@/components/molecules/screen-container';
import { NotificationTab } from '@/modules/notifications/components/notification-tab';

const Page: NextPage = () => {
  return (
    <ScreenContainer headerLabel="通知">
      <NotificationTab />
    </ScreenContainer>
  );
};

export default Page;
