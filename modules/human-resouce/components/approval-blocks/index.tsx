/**
 * This is where all hr-approval-section related component registered here
 */

export function HrApprovalBlocksManager(props: { type: ApprovalType }) {
  switch (props.type) {
    default:
    case '审批请假':
      return null;

    case '审批加班':
      return null;

    case '审批调休':
      return null;

    case '审批调班':
      return null;

    case '审批免迟到':
      return null;

    case '审批补打卡':
      return null;

    case '审批转正':
      return null;

    case '审批转刚':
      return null;

    case '审批离职':
      return null;
  }
}
