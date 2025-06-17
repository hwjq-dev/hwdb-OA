/**
 * This is where all hr-application section related component registered here
 */
export function HrApplicationBlocksManager(props: { type: ApplicationType }) {
  switch (props.type) {
    default:
    case '申请请假':
      return null;

    case '申请加班':
      return null;

    case '申请调班':
      return null;

    case '申请调休':
      return null;

    case '申请免迟到':
      return null;

    case '申请补打卡':
      return null;

    case '申请转正':
      return null;

    case '申请转刚':
      return null;

    case '申请离职':
      return null;
  }
}
