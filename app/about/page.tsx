import { AboutMenuItem } from '@/modules/about/components/about-menu-item';
import { AvatarSection } from '@/modules/about/components/avatar-section';
import { NextPage } from 'next';

const Page: NextPage = () => {
  return (
    <div className="overflow-hidden">
      <div className="tornado-pattern relative px-2 h-40 bg-primary flex justify-center">
        <p className="text-center text-lg font-semibold text-white pt-5">我的</p>
      </div>
      <div className="bg-white -translate-y-24 h-[85dvh] rounded-t-4xl p-4">
        <AvatarSection />
        <AboutMenuItem />
      </div>
    </div>
  );
};

export default Page;
