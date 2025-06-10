import { CircleCheck } from 'lucide-react';
import { useState } from 'react';
import { toast } from 'sonner';

import { NotificationBaseModal } from '@/components/molecules/modal/notification-base-modal';

import { ProgressList } from '../../base/progress-list';

export const ApproveList = () => {
  const [open, setOpen] = useState(false);
  return (
    <ProgressList
      disableBullAction
      notificationButton={
        <NotificationBaseModal
          title="检查通知"
          description="提醒下级重新检查提交任务进度"
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
