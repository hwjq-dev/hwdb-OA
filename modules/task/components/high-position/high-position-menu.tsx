import { ChevronRight } from 'lucide-react';
import Link from 'next/link';

import { ROUTES } from '@/config/route';

const data = [
  { id: 1, label: '分配任务', link: ROUTES.TASK_ASSIGNMENT, value: 0 },
  { id: 2, label: '待审批任务', link: ROUTES.TASK_REQUEST_APPROVAL, value: 5 },
  { id: 3, label: '自助申请', link: ROUTES.TASK_PERSONAL_TASK },
  { id: 4, label: '分析与报告', link: ROUTES.TASK_REPORT },
];

export const HighPositionMenu = () => {
  return (
    <div className="mt-8 p-2 grid grid-cols-2 gap-2">
      {data.map((x, i) => (
        <Item key={i} {...x} />
      ))}
    </div>
  );
};

interface ItemProps {
  id: number;
  label: string;
  link: string;
  value?: number;
}

const Item: React.FC<ItemProps> = ({ label, link, value }) => (
  <Link href={link || '#'}>
    <div className="bg-white shadow-[0px_4px_33px_0px_#ebebeb] p-2.5 rounded-lg border border-gray-200/80 cursor-pointer flex justify-between items-center">
      <div className="flex items-center">
        <span className="font-semibold text-xs py-1.5 px-3 bg-primary-600 text-white rounded-sm">
          {label}
        </span>
        {!!value && (
          <div className="bg-red p-1 size-4.5 flex justify-center items-center rounded-full ml-1.5">
            <span className="text-xs text-white">{value}</span>
          </div>
        )}
      </div>
      <span className="p-1.5 bg-primary-200/40 size-fit rounded-full">
        <ChevronRight className="text-primary size-4" />
      </span>
    </div>
  </Link>
);
