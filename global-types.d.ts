interface TaskProps {
  id?: string | number;
  tgId: string;
  title: string;
  subtitle: string;
  assignedAt: string;
  tgUsername?: string;
  nickName?: string;
  assigner?: string;
  assignee?: string;
  startAt?: string;
  endAt?: string;
  department?: string;
  status: 'in-progress' | 'done' | 'wait-approval' | 'approved' | 'overdue';
  priority: '高优先' | '中优先' | '低优先';
}

type ApplicationType =
  | '申请请假'
  | '申请加班'
  | '申请调休'
  | '申请调班'
  | '申请免迟到'
  | '申请补打卡'
  | '申请转正'
  | '申请转刚'
  | '申请离职';

type ApprovalType =
  | '审批请假'
  | '审批加班'
  | '审批调休'
  | '审批调班'
  | '审批免迟到'
  | '审批补打卡'
  | '审批转正'
  | '审批转刚'
  | '审批离职';
