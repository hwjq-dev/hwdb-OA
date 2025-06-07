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
import { SquarePen, Trash2 } from 'lucide-react';

const items = [
  {
    id: 1,
    date: '2025年 5月 17 日 2:26:30',
    title: '#处理频道异常情况',
    description:
      '开始了卢卡申科到了看来是疯狂首开纪录开始了卢卡申科到了看来是疯狂首开纪录开始了卢卡申科到了看来是疯狂首开纪录开 ',
  },
  {
    id: 2,
    date: '2025年 5月 17 日 2:45:20',
    title: '#跟踪公群新加入的成员',
    description:
      '开始了卢卡申科到了看来是疯狂首开纪录开始了卢卡申科到了看来是疯狂首开纪录开始了卢卡申科到了看来是疯狂首开纪录开',
  },
  {
    id: 3,
    date: '2025年 5月 17 日 3:21:10',
    title: '#整理数据',
    description:
      '开始了卢卡申科到了看来是疯狂首开纪录开始了卢卡申科到了看来是疯狂首开纪录开始了卢卡申科到了看来是疯狂首开纪录开',
  },
  {
    id: 4,
    date: '2025年 5月 17 日 4:03:55',
    title: '#更新公群导航内容',
    description:
      '开始了卢卡申科到了看来是疯狂首开纪录开始了卢卡申科到了看来是疯狂首开纪录开始了卢卡申科到了看来是疯狂首开纪录开',
  },
];

export const List = () => {
  return (
    <Timeline defaultValue={items.length}>
      {items.map((item) => (
        <TimelineItem
          key={item.id}
          step={item.id}
          className="group-data-[orientation=vertical]/timeline:sm:ms-32 !px-0 !pb-5"
        >
          <TimelineHeader>
            <TimelineSeparator className="border !h-[105px] border-dashed !bg-gray-50/50" />
            <TimelineDate className="group-data-[orientation=vertical]/timeline:sm:absolute group-data-[orientation=vertical]/timeline:sm:-left-32 group-data-[orientation=vertical]/timeline:sm:w-20 group-data-[orientation=vertical]/timeline:sm:text-right text-primary">
              {item.date}
            </TimelineDate>
            <TimelineIndicator />
          </TimelineHeader>
          <TimelineContent className="shadow-[0px_10px_13px_0px_#edf4fa] px-3 py-2 rounded-sm border border-gray-100">
            <div>
              <div className="flex items-center">
                <TimelineTitle className="sm:-mt-0.5 basis-[80%] text-base text-gray-800">
                  {item.title}
                </TimelineTitle>
                <div className="flex items-center space-x-1.5 ml-auto">
                  <button>
                    <SquarePen className="text-primary size-4" />
                  </button>
                  <button>
                    <Trash2 className="text-red size-4" />
                  </button>
                </div>
              </div>
              <p className="line-clamp-2 text-xs mt-1">{item.description}</p>
            </div>
          </TimelineContent>
        </TimelineItem>
      ))}
    </Timeline>
  );
};
