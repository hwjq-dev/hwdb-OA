'use client';

import { CircleCheck } from 'lucide-react';
import { toast } from 'sonner';

import { NotificationBaseModal } from '@/components/molecules/modal/notification-base-modal';
import { useDiscloser } from '@/hooks/use-discloser';

import { TaskProgressList } from './task-progess-list';

export const DetailProgressList = () => {
  const { isOpen, close, toggle } = useDiscloser();
  return (
    <TaskProgressList
      notificationButton={
        <NotificationBaseModal
          title="审核通知"
          description="提醒上级审核任务进度"
          open={isOpen}
          onCancle={close}
          onOpenChange={toggle}
          onNotify={() => {
            close();
            toast('通知已成功.', {
              icon: <CircleCheck className="text-green-500" />,
              position: 'top-right',
            });
          }}
        />
      }
    />
  );
};
