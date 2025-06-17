/**
 * This is where all hr-approval-section related component registered here
 */

import { EmptyState } from '@/components/molecules/empty-state';

export function HrApprovalBlocksManager(props: { type: ApprovalType }) {
  switch (props.type) {
    default:
    case '审批请假':
      return <EmptyList />;

    case '审批加班':
      return <EmptyList />;

    case '审批调休':
      return <EmptyList />;

    case '审批排班':
      return <EmptyList />;

    case '审批免迟到':
      return <EmptyList />;

    case '审批补打卡':
      return <EmptyList />;

    case '审批转正':
      return <EmptyList />;

    case '审批转刚':
      return <EmptyList />;

    case '审批离职':
      return <EmptyList />;
  }
}

const EmptyList = () => (
  <div className="size-full flex justify-center items-center">
    <EmptyState type="service-unavailabel" title="空白状态" subtitle="功能还没实施" />
  </div>
);
