import { NextPage } from 'next';

import { NotificationHeaderSection } from '@/modules/notification-management/components/notification-header-section';
import { NotificationTab } from '@/modules/notification-management/components/notification-tab';

const Page: NextPage = () => {
  return (
    <div className="relative">
      <NotificationHeaderSection />
      <div className="bg-white -translate-y-16 rounded-t-4xl h-[84dvh] p-4 overflow-hidden">
        <NotificationTab />
      </div>
    </div>
  );
};

export default Page;
