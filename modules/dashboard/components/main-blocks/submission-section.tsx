import { CheckCircle, Clock } from 'lucide-react';
import Link from 'next/link';
import { ReactNode } from 'react';

import { ROUTES } from '@/config/route';

const items: ItemProps[] = [
  {
    icon: <Clock className="size-8 text-yellow-500" />,
    label: '待审批',
    link: ROUTES.HR_WAIT_APPROVAL,
  },
  {
    icon: <CheckCircle className="size-8 text-green-500" />,
    label: '已审批',
    link: ROUTES.HR_APPROVED,
  },
  // {
  //   icon: <Send className="size-8 text-primary-500" />,
  //   label: '我发起的',
  //   link: ROUTES.HR_SUBMISSION,
  // },
];

export const HrViewSubmissionSection = () => {
  return (
    <div className="bg-white p-4 mt-2 mx-4 rounded-2xl shadow-[0px_4px_30px_0px_#bababa]">
      <div className="grid grid-cols-2 gap-4">
        {items.map((x, i) => (
          <Link key={i} href={x.link || '#'}>
            <Item {...x} />
          </Link>
        ))}
      </div>
    </div>
  );
};

interface ItemProps {
  icon: ReactNode;
  label: string;
  link?: string;
}

export const Item: React.FC<ItemProps> = ({ icon: Icon, label }) => (
  <div className="flex flex-col justify-center bg-gray-100/70 py-2 px-6 rounded-2xl items-center space-y-1">
    {Icon}
    <p className="text-xs font-medium text-dark">{label}</p>
  </div>
);
