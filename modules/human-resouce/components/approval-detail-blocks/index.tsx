/**
 * This is where all hr-approval-section related component registered here
 */

import { EmptyState } from '@/components/molecules/empty-state';
import { ChangeDayoffRequestDetail } from './approve-change-dayoff-detail';
import { ApproveChangeShiftDetail } from './approve-change-shift-detail';
import { LateRequestDetail } from './approve-late-detail';
import { ApproveLeaveDetail } from './approve-leave-detail';
import { ApproveOvertimeDetail } from './approve-overtime-detail';
import { PunishmentRequestDetail } from './approve-punishment-detail';
import { ReclockRequestDetail } from './approve-reclock-detail';

export function ApprovalDetailBlocksManager(props: { type: ApprovalType }) {
  switch (props.type) {
    default:
      return <EmptyList />;

    case '审批请假':
      return <ApproveLeaveDetail />;

    case '审批加班':
      return <ApproveOvertimeDetail />;

    case '审批调休':
      return <ChangeDayoffRequestDetail />;

    case '审批调班':
      return <ApproveChangeShiftDetail />;

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
