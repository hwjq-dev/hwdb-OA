'use client';

import { CircleCheck } from 'lucide-react';
import { ReactNode } from 'react';
import { toast } from 'sonner';

import { BaseModal } from '@/components/molecules/modal/base-modal';
import { DeleteModal } from '@/components/molecules/modal/delete-modal';
import { TextInput } from '@/components/molecules/text-input';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
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
import { useDiscloser } from '@/hooks/use-discloser';

interface Props {
  disableBullAction?: boolean;
  notificationButton: ReactNode;
}

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

export const TaskProgressList: React.FC<Props> = ({
  disableBullAction = false,
  notificationButton,
}) => {
  return (
    <>
      <div className="px-2 mt-2 pb-20">
        <div className="shadow-[0px_10px_13px_0px_#edf4fa] border border-gray-200 p-4 rounded-lg">
          <div className="flex justify-between items-center">
            <p className="font-semibold">
              任务编号 <span className="text-sm font-medium"> # 2025010605</span>
            </p>

            {notificationButton}
          </div>

          <div className="mt-6">
            <List disableBullAction={disableBullAction} />
          </div>
        </div>
      </div>
    </>
  );
};

export const List: React.FC<Pick<Props, 'disableBullAction'>> = ({ disableBullAction = false }) => {
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
                  {!disableBullAction && (
                    <EditButton title={item.title} description={item.description} />
                  )}
                  {!disableBullAction && <DeleteButton />}
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

const EditButton: React.FC<{ title: string; description: string }> = ({ title, description }) => {
  const { isOpen, close, toggle } = useDiscloser();
  return (
    <BaseModal
      open={isOpen}
      title="编辑任务进度"
      description="请输入以下申请表单"
      onClose={close}
      onOpenChange={toggle}
    >
      <form
        className="flex flex-col space-y-3"
        onSubmit={(e) => {
          e.preventDefault();
          close();
          toast('记录已编辑成功.', {
            icon: <CircleCheck className="text-green-500" />,
            position: 'top-right',
          });
        }}
      >
        {/*--- Title ---*/}
        <TextInput label="请输入任务标题" value={title} onChange={(v) => null} />

        {/*--- Description ---*/}
        <Textarea placeholder="请输入任务描述 ..." value={description} onChange={(e) => null} />

        <Button type="submit" className="hover:!bg-primary/50">
          编辑
        </Button>
      </form>
    </BaseModal>
  );
};

const DeleteButton = () => {
  const { isOpen, close, toggle } = useDiscloser();
  return (
    <DeleteModal
      open={isOpen}
      onDelete={() => {
        close();
        toast('记录已删除成功.', {
          icon: <CircleCheck className="text-green-500" />,
          position: 'top-right',
        });
      }}
      onCancle={close}
      onOpenChange={toggle}
    />
  );
};
