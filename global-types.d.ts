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
