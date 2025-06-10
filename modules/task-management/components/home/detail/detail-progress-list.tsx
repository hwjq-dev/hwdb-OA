'use client';

import { CircleCheck } from 'lucide-react';
import { useState } from 'react';
import { toast } from 'sonner';

import { NotificationBaseModal } from '@/components/molecules/modal/notification-base-modal';

import { ProgressList } from '../../base/progress-list';

export const DetailProgressList = () => {
  const [open, setOpen] = useState(false);

  return (
    <ProgressList
      notificationButton={
        <NotificationBaseModal
          title="审核通知"
          description="提醒上级审核任务进度"
          open={open}
          onCancle={() => setOpen(false)}
          onOpenChange={(open) => setOpen(open)}
          onNotify={() => {
            setOpen(false);
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
