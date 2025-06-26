'use client';

import { ChevronRight } from 'lucide-react';
import Image, { StaticImageData } from 'next/image';
import Link from 'next/link';

import { useAccountDetect } from '@/hooks/use-account-detect';

// const data = [
//   {
//     id: 1,
//     alt: 'profile-setting.png',
//     icon: ProfileSettingLogo,
//     label: '个人资料',
//     link: ROUTES.PROFILE_ACCOUNTS,
//   },
//   // {
//   //   id: 2,
//   //   alt: 'attendance-logo.png',
//   //   icon: AttendanceLogo,
//   //   label: '我的考勤',
//   //   link: ROUTES.PROFILE_ATTENDENCES,
//   // },
//   // {
//   //   id: 3,
//   //   alt: 'punishment-log.png',
//   //   icon: PunishmentLogo,
//   //   label: '我的罚单',
//   //   link: ROUTES.PROFILE_PUNISHMENTS,
//   // },
// ];

export const ProfileMenuItem = () => {
  const { setLevel } = useAccountDetect();

  return (
    <div className="mt-6 flex flex-col space-y-2.5">
      {/* {data.map((x, i) => (
        <Item key={i} {...x} />
      ))} */}
    </div>
  );
};

interface ItemProps {
  alt: string;
  icon: StaticImageData;
  label: string;
  link: string;
}

const Item: React.FC<ItemProps> = ({ alt, icon, label, link }) => {
  return (
    <Link href={link || '#'}>
      <div className="bg-white relative flex justify-between shadow-[0px_0px_38px_-17px_#a6a6a6] mx-1 rounded-lg py-2.5 px-4 border border-gray-200/60">
        <div className="flex items-center space-x-4">
          <Image width={32} height={32} src={icon} className="object-cover" alt={alt} priority />
          <span>{label}</span>
        </div>

        <button className="bg-gray-100/70 p-2 rounded-full">
          <ChevronRight className="text-primary size-4" />
        </button>
      </div>
    </Link>
  );
};
