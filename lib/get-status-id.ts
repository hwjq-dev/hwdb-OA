export function getStatusId(status: StatusType) {
  switch (status) {
    default:
    case '审核中':
      return 1;
    case '执行中':
      return 2;
    case '已完成,待审核':
      return 3;
    case '审核完成':
      return 4;
    case '超时':
      return 5;
    case '已关闭':
      return 6;
  }
}
