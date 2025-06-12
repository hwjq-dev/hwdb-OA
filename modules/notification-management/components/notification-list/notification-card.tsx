import { ChevronRight } from 'lucide-react';
import Link from 'next/link';

import { ROUTES } from '@/config/route';
import { getFormatDatetime, getFormatHumanReadable } from '@/lib/dayjs';

export const NotificationCard = () => {
  return (
    <Link href={ROUTES.$NOTIFICATION('1')}>
      <div className="relative border border-primary/10 bg-gray-100/40 py-2.5 px-3.5 rounded-lg">
        <div className="absolute bg-primary px-3 flex items-center py-1 rounded-tr-lg rounded-bl-lg text-white right-0 top-0">
          <span className="text-[10px]">
            {getFormatHumanReadable(new Date('2025-06-12 10:34:48'))}
          </span>
        </div>
        <p className="text-start text-base w-11/12 line-clamp-1 font-bold text-dark">
          智能助手上线通知
        </p>
        <p className="text-sm line-clamp-1 text-start w-5/6">
          我们全新推出的智能助手现已上线，助您高效完成每日任务。
        </p>
        <div className="flex items-center justify-between">
          <p className="text-[11px] font-semibold text-start mt-1">
            <span className="text-primary"> 发布：</span>
            {getFormatDatetime(new Date())}
          </p>
          <div className="flex space-x-1 text-primary items-center">
            <span className="text-sm">查看详情</span>
            <ChevronRight className="size-4" />
          </div>
        </div>
      </div>
    </Link>
  );
};
