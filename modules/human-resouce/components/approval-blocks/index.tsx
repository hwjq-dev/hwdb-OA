/**
 * This is where all hr-approval-section related component registered here
 */

import { EmptyState } from '@/components/molecules/empty-state';

import { ApproveChangeDayoffRequest } from './approve-change-dayoff-request';
import { ApproveChangeShiftRequest } from './approve-change-shift-request';
import { ApproveLateRequest } from './approve-late-request';
import { ApproveLeaveRequest } from './approve-leave-request';
import { ApproveOvertimeRequest } from './approve-overtime-request';
import { ApprovePunishmentRequest } from './approve-punishment-request';
import { ApproveReclockRequest } from './approve-reclock-request';

export function HrApprovalBlocksManager(props: { type: ApprovalType }) {
  switch (props.type) {
    default:
      return <EmptyList />;

    case '审批请假':
      return <ApproveLeaveRequest />;

    case '审批加班':
      return <ApproveOvertimeRequest />;

    case '审批调休':
      return <ApproveChangeDayoffRequest />;

    case '审批调班':
      return <ApproveChangeShiftRequest />;

    case '审批免迟到':
      return <ApproveLateRequest />;

    case '审批补打卡':
      return <ApproveReclockRequest />;

    case '审批处罚':
      return <ApprovePunishmentRequest />;

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
