'use client';

import { ITaskProcess } from '@/api';
import {
  Timeline,
  TimelineContent,
  TimelineDate,
  TimelineHeader,
  TimelineIndicator,
  TimelineItem,
  TimelineSeparator,
  TimelineTitle,
} from '@/components/ui/timeline';
import { getFormatDatetime } from '@/lib/dayjs';
import { cn } from '@/lib/utils';

export const TaskProgressList: React.FC<{ items: ITaskProcess[] }> = ({ items }) => {
  if (!items?.length) return null;

  return (
    <Timeline defaultValue={items.length}>
      {(items || [])?.map((process) => (
        <TimelineItem
          key={process?.id}
          step={process?.id}
          className={cn(
            'relative group-data-[orientation=vertical]/timeline:sm:ms-32 !px-0 !pb-5 space-y-4',
            'last:[&>div:nth-child(1)]:hidden',
          )}
        >
          <div className="absolute h-[98%] w-0.5 bg-transparent border-r border-orange-500 border-dashed top-0 -left-[25px]" />
          <TimelineHeader>
            <TimelineSeparator className="!!h-[7.5rem] !bg-transparent !w-0" />
            <TimelineDate className="group-data-[orientation=vertical]/timeline:sm:absolute group-data-[orientation=vertical]/timeline:sm:-left-32 group-data-[orientation=vertical]/timeline:sm:w-20 group-data-[orientation=vertical]/timeline:sm:text-right text-primary text-[11px]">
              {getFormatDatetime(new Date(process.created_at))}
            </TimelineDate>
            <TimelineIndicator />
          </TimelineHeader>

          <TimelineContent className="relative pr-2 -mt-4 pb-4 border-gray-100">
            <div className="absolute top-0 right-2 text-xs text-green-500 bg-green-500/10 px-2 py-0.5">
              {process.type_text}
            </div>
            <p className="text-[11px] mb-1 bg-amber-300/15 ring ring-gray-200 rounded-xl w-fit px-2 py-0.5">
              发起人: {process.processor} - 审核者: {process.reviewer}
            </p>
            <div className="flex items-center">
              <TimelineTitle className="sm:-mt-0.5 basis-[70%] line-clamp-3 text-base text-gray-800 font-bold">
                {process.title}
              </TimelineTitle>
            </div>
            <p className="text-xs mt-2 text-dark">{process.content}</p>
          </TimelineContent>
        </TimelineItem>
      ))}
    </Timeline>
  );
};
