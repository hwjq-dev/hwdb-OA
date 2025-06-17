import { CircleCheck } from 'lucide-react';
import { toast } from 'sonner';

import { NotificationBaseModal } from '@/components/molecules/modal/notification-base-modal';
import { useDiscloser } from '@/hooks/use-discloser';

import { TaskProgressList } from '../../shared';

export const ApproveList = () => {
  const { isOpen, close, toggle } = useDiscloser();

  return (
    <TaskProgressList
      disableBullAction
      notificationButton={
        <NotificationBaseModal
          title="检查通知"
          description="提醒下级重新检查提交任务进度"
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
