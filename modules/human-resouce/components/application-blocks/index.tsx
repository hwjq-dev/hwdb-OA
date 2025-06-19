import { ChangeDayoffRequestForm } from './change-dayoff-request-form';
import { ChangePositionRequestForm } from './change-position-request-form';
import { ChangeShiftRequestForm } from './change-shift-request-form';
import { LateExeptiontRequestForm } from './late-exeption-request-form';
import { LeaveRequestForm } from './leave-request-form';
import { OvertimeRequestForm } from './overtime-request-form';
import { PunishmentRequestForm } from './punishment-request-form';
import { ReclockRequestForm } from './reclock-request-form';
import { RegularizationRequestForm } from './regularization-request-form';
import { ResignRequestForm } from './resign-request-form';

/**
 * This is where all hr-application section related component registered here
 */
export function HrApplicationBlocksManager(props: { type: ApplicationType }) {
  switch (props.type) {
    default:
      return null;

    case '申请请假':
      return <LeaveRequestForm />;

    case '申请加班':
      return <OvertimeRequestForm />;

    case '申请调班':
      return <ChangeShiftRequestForm />;

    case '申请调休':
      return <ChangeDayoffRequestForm />;

    case '申请免迟到':
      return <LateExeptiontRequestForm />;

    case '申请补打卡':
      return <ReclockRequestForm />;

    case '申请转正':
      return <RegularizationRequestForm />;

    case '申请转刚':
      return <ChangePositionRequestForm />;

    case '申请离职':
      return <ResignRequestForm />;

    case '申请处罚':
      return <PunishmentRequestForm />;
  }
}
