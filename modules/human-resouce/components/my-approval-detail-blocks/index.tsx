/**
 * This is where all hr-approval-section related component registered here
 */

import { EmptyState } from '@/components/molecules/empty-state';

import { ChangeDayoffRequestDetail } from './change-day-off-request-detail';
import { ChangeShiftRequestDetail } from './change-shift-request-detail';
import { LateRequestDetail } from './late-request-detail';
import { LeaveRequestDetail } from './leave-request-detail';
import { OvertimeRequestDetail } from './overtime-request-detail';
import { PunishmentRequestDetail } from './punishment-request-detail';
import { ReclockRequestDetail } from './reclock-request-detail';

export function MyApprovalDetailBlocksManager(props: { type: ApprovalType }) {
  switch (props.type) {
    default:
      return <EmptyList />;

    case '审批请假':
      return <LeaveRequestDetail />;

    case '审批加班':
      return <OvertimeRequestDetail />;

    case '审批调休':
      return <ChangeDayoffRequestDetail />;

    case '审批调班':
      return <ChangeShiftRequestDetail />;

    case '审批免迟到':
      return <LateRequestDetail />;

    case '审批补打卡':
      return <ReclockRequestDetail />;

    case '审批处罚':
      return <PunishmentRequestDetail />;

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
